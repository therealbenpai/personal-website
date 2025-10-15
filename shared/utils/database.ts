import type { RuntimeConfig as RTC } from 'nuxt/schema';

export class QueryHelper {
    queryParams: Record<string, string> = {};

    constructor() { }

    addLimit(limit: number) {
        this.queryParams['limit'] = `${limit}`;
        return this;
    }

    equal(field: string, value: string | number) {
        this.queryParams[field] = `eq.${value}`;
        return this;
    }

    notEqual(field: string, value: string | number) {
        this.queryParams[field] = `neq.${value}`;
        return this;
    }

    greaterThan(field: string, value: string | number) {
        this.queryParams[field] = `gt.${value}`;
        return this;
    }

    lessThan(field: string, value: string | number) {
        this.queryParams[field] = `lt.${value}`;
        return this;
    }

    orderBy(field: string, ascending: boolean = true) {
        this.queryParams['order'] = `${field}.${ascending ? 'asc' : 'desc'}`;
        return this;
    }

    build(): string {
        return new URLSearchParams(this.queryParams).toString();
    }
}

export class DatabaseResponse<T> {
    data: Promise<T[] | null> = new Promise((resolve, reject) => {
    });

    constructor(data: Promise<T[] | null>) {
        this.data = data;
    }

    get first(): Promise<T | null> {
        return this.data.then(data => (data || [null])[0] as T || null);
    }

    get all(): Promise<T[] | null> {
        return this.data;
    }
}

export class DatabaseCall<T> {
    rtc: RTC;
    table: string;
    query: QueryHelper;

    constructor(
        rtc: RTC,
        table: string,
    ) {
        this.rtc = rtc;
        this.table = table;
        this.query = new QueryHelper();
    }

    get result() {
        return new DatabaseResponse<T>(fetch(
            `${this.rtc.supabase.url}/rest/v1/${this.table}?${this.query.build()}`,
            {
                headers: {
                    apikey: this.rtc.supabase.key,
                    'Accept-Profile': 'ben',
                },
            },
        ).then(res => res.json()) as Promise<T[]>);
    }
}

export class Database {
    static quick<T, F = Enums.ResponseFormat.ONE>(form: F, rtc: RTC, table: string, data: Partial<T>): Promise<Types.Nullable<T>>;
    static quick<T, F = Enums.ResponseFormat.ALL>(form: F, rtc: RTC, table: string): Promise<Types.Nullable<T[]>>;
    static quick<T, F extends Enums.ResponseFormat>(form: F, rtc: RTC, table: string, data?: Partial<T>): Promise<Types.Nullable<T | T[]>> {
        const dbReq = new DatabaseCall<T>(rtc, table);
        dbReq.query.orderBy('id', true);
        if (form === Enums.ResponseFormat.ONE) {
            Object.entries(data!)
                .forEach(([k, v]) => {
                    if (typeof v !== 'string' && typeof v !== 'number') return;
                    dbReq.query.equal(k, v);
                });
            dbReq.query.addLimit(1);
        }
        return dbReq.result[form === Enums.ResponseFormat.ONE ? 'first' : 'all'];
    }
}