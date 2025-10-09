import type { RuntimeConfig as RTC } from "nuxt/schema"

export class QueryHelper {
    queryParams: Record<string, string> = {};
    constructor() { }
    addLimit(limit: number) {
        this.queryParams['limit'] = `${limit}`;
        return this;
    }
    equal(field: string, value: string | number): QueryHelper {
        this.queryParams[field] = `eq.${value}`;
        return this;
    }
    notEqual(field: string, value: string | number): QueryHelper {
        this.queryParams[field] = `neq.${value}`;
        return this;
    }
    greaterThan(field: string, value: string | number): QueryHelper {
        this.queryParams[field] = `gt.${value}`;
        return this;
    }
    lessThan(field: string, value: string | number): QueryHelper {
        this.queryParams[field] = `lt.${value}`;
        return this;
    }
    orderBy(field: string, ascending: boolean = true): QueryHelper {
        this.queryParams['order'] = `${field}.${ascending ? 'asc' : 'desc'}`;
        return this;
    }
    build(): string {
        return new URLSearchParams(this.queryParams).toString()
    }
}

export class DatabaseResponse<type> {
    data: type[] | null = null
    error: string | null = null
    status: number | null = null
    statusText: string | null = null
    constructor(data: type[] | null, init?: Partial<DatabaseResponse<type>>) {
        this.data = data;
        Object.assign(this, init);
    }
    get first(): type | null {
        return this.data ? this.data[0]! : null;
    }
    get all(): type[] | null {
        return this.data;
    }
    get isSuccess(): boolean {
        return this.status !== null && this.status >= 200 && this.status < 300 && this.error === null;
    }
    get isError(): boolean {
        return !this.isSuccess;
    }
}

export class Database {
    static reqInit(rtc: RTC): SQLRequest {
        return {
            baseURL: rtc.supabase.url,
            init: {
                headers: {
                    apikey: rtc.supabase.key,
                    'Accept-Profile': 'ben',
                }
            }
        }
    }

    static async query<type>(rtc: RTC, table: string, query: QueryHelper): Promise<DatabaseResponse<type>> {
        const init = this.reqInit(rtc);
        const url = new URL(`/rest/v1/${table}`, init.baseURL);
        url.search = query.build();
        const res = await fetch(url, init.init);

        return new DatabaseResponse<type>(await res.json(), {
            status: res.status,
            statusText: res.statusText,
            error: res.ok ? null : res.statusText
        });
    }
}