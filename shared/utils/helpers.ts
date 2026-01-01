export class DictionaryHelper<T extends Interfaces.DeepDict<T>> {
    constructor(private dictionary: T) {}
    public mergeDeep(...objects: any[]): T {
        const isObject = (obj: any) => obj && typeof obj === 'object';

        if (!objects.every(isObject)) return objects[0];

        this.dictionary = objects.reduce((acc, curr) => {
            Object.keys(curr).forEach((key) => {
                const targetValue = acc[key],
                    sourceValue = curr[key];

                if ([targetValue, sourceValue].every(Array.isArray))
                    return void (acc[key] = targetValue.concat(sourceValue));

                if ([targetValue, sourceValue].every(isObject))
                    return void (acc[key] = this.mergeDeep(
                        targetValue,
                        sourceValue
                    ));

                return void (acc[key] = sourceValue);
            });
            return acc;
        }, this.dictionary);
        return this.dictionary;
    }
    public deepClone(): T {
        return JSON.parse(JSON.stringify(this.dictionary));
    }
    public deepGet<KT>(path: string, defaultValue?: KT): any | KT | undefined {
        const keys = path.split('.');
        let result: any = this.dictionary;
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result)
                result = result[key];
            else return defaultValue;
        }
        return result as T;
    }
    public deepSet(path: string, value: any): ThisType<T> {
        const keys = path.split('.') as (keyof Interfaces.DeepDict<T>)[];
        if (keys.some((key) => key === undefined || typeof key !== 'string'))
            return this;
        let current: any = this.dictionary;
        for (const key of keys) {
            if (key === keys[keys.length - 1]) {
                current[key] = value;
            } else {
                if (!current[key] || typeof current[key] !== 'object') {
                    current[key] = {};
                }
                current = current[key];
            }
        }
        return this;
    }
    public deepFlatten(parentKey = ''): ThisType<T> {
        const result: Interfaces.DeepDict<T> = {};
        for (const key in this.dictionary) {
            if (this.dictionary.hasOwnProperty(key)) {
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                if (
                    typeof this.dictionary[key] === 'object' &&
                    this.dictionary[key] !== null
                ) {
                    this.deepFlatten(key);
                } else {
                    result[newKey] = this.dictionary[key]!;
                }
            }
        }
        this.dictionary = result as T;
        return this;
    }
    public deepUnflatten(): ThisType<T> {
        const result: Interfaces.DeepDict<T> = {};
        for (const flatKey in this.dictionary) {
            if (this.dictionary.hasOwnProperty(flatKey)) {
                const keys = flatKey.split('.');
                let current: any = result;
                keys.forEach((key, index) => {
                    if (index === keys.length - 1) {
                        current[key] = this.dictionary[flatKey];
                    } else {
                        if (!current[key] || typeof current[key] !== 'object') {
                            current[key] = {};
                        }
                        current = current[key];
                    }
                });
            }
        }
        this.dictionary = result as T;
        return this;
    }
    public pick<K extends keyof T>(keys: K[]): Pick<T, K> {
        const result = {} as Pick<T, K>;
        keys.forEach((key) => {
            if (key in this.dictionary) {
                result[key] = this.dictionary[key];
            }
        });
        return result;
    }
    public omit<K extends keyof T>(keys: K[]): Omit<T, K> {
        const result = { ...this.dictionary };
        keys.forEach((key) => {
            if (key in result) delete result[key];
        });
        return result as Omit<T, K>;
    }
}

export class ArrayHelper {
    public static unique<T>(arr: T[]): T[] {
        return Array.from(new Set(arr));
    }
    public static chunk<T>(arr: T[], size: number): T[][] {
        const chunks: T[][] = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    }
    public static flatten<T>(arr: T[][]): T[] {
        return arr.reduce((acc, val) => acc.concat(val), []);
    }
    public static intersection<T>(arr1: T[], arr2: T[]): T[] {
        const set2 = new Set(arr2);
        return arr1.filter((item) => set2.has(item));
    }
    public static difference<T>(arr1: T[], arr2: T[]): T[] {
        const set2 = new Set(arr2);
        return arr1.filter((item) => !set2.has(item));
    }
    public static union<T>(arr1: T[], arr2: T[]): T[] {
        return this.unique([...arr1, ...arr2]);
    }
}

export class StringHelper {
    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    public static camelCase(str: string): string {
        return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
    }
    public static kebabCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    public static snakeCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }
    public static truncate(
        str: string,
        length: number,
        ending = '...'
    ): string {
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
    public static padStart(
        str: string,
        targetLength: number,
        padString = ' '
    ): string {
        return str.padStart(targetLength, padString);
    }
    public static padEnd(
        str: string,
        targetLength: number,
        padString = ' '
    ): string {
        return str.padEnd(targetLength, padString);
    }
    public static titleCase(str: string): string {
        return str.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        );
    }
}

export class NumberHelper {
    public static clamp(num: number, min: number, max: number): number {
        return Math.min(Math.max(num, min), max);
    }
    public static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    public static round(num: number, decimals: number = 0): number {
        const factor = Math.pow(10, decimals);
        return Math.round(num * factor) / factor;
    }
    public static floor(num: number, decimals: number = 0): number {
        const factor = Math.pow(10, decimals);
        return Math.floor(num * factor) / factor;
    }
    public static ceil(num: number, decimals: number = 0): number {
        const factor = Math.pow(10, decimals);
        return Math.ceil(num * factor) / factor;
    }
    public static toPercentage(
        num: number,
        total: number,
        decimals: number = 2
    ): string {
        if (total === 0) return '0%';
        const percentage = (num / total) * 100;
        return `${this.round(percentage, decimals)}%`;
    }
}

