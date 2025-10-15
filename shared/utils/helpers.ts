export class DictionaryHelper {
    public static isEmpty(obj: object): boolean {
        return Object.keys(obj).length === 0;
    }
    public static mergeDeep<T>(target: any, source: any): T {
        const isObject = (obj: any) => obj && typeof obj === 'object';
        if (!isObject(target) || !isObject(source)) {
            return source;
        }
        Object.keys(source).forEach(key => {
            const targetValue = target[key];
            const sourceValue = source[key];
            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = targetValue.concat(sourceValue);
            } else if (isObject(targetValue) && isObject(sourceValue)) {
                target[key] = this.mergeDeep(targetValue, sourceValue);
            } else {
                target[key] = sourceValue;
            }
        });
        return target;
    }
    public static deepClone<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }
    public static deepGet<T>(obj: Interfaces.DeepDict<T>, path: string, defaultValue?: T): T | undefined {
        const keys = path.split('.');
        let result: any = obj;
        for (const key of keys) {
            if (result && typeof result === 'object' && key in result) {
                result = result[key];
            } else {
                return defaultValue;
            }
        }
        return result as T;
    }
    public static deepSet<T>(obj: Interfaces.DeepDict<T>, path: string, value: T): void {
        const keys = path.split('.') as (keyof Interfaces.DeepDict<T>)[];
        if (keys.some(key => key === undefined || typeof key !== 'string')) return;
        let current: any = obj;
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
    }
    public static deepFlatten<T>(obj: Interfaces.DeepDict<T>, parentKey = '', result: Interfaces.DeepDict<T> = {}): Interfaces.DeepDict<T> {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = parentKey ? `${parentKey}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    this.deepFlatten(obj[key] as Interfaces.DeepDict<T>, newKey, result);
                } else {
                    result[newKey] = obj[key]!;
                }
            }
        }
        return result;
    }
    public static deepUnflatten<T>(obj: Interfaces.DeepDict<T>): Interfaces.DeepDict<T> {
        const result: Interfaces.DeepDict<T> = {};
        for (const flatKey in obj) {
            if (obj.hasOwnProperty(flatKey)) {
                const keys = flatKey.split('.');
                let current: any = result;
                keys.forEach((key, index) => {
                    if (index === keys.length - 1) {
                        current[key] = obj[flatKey];
                    } else {
                        if (!current[key] || typeof current[key] !== 'object') {
                            current[key] = {};
                        }
                        current = current[key];
                    }
                });
            }
        }
        return result;
    }
    public static pick<T extends Interfaces.DeepDict<T>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
        const result = {} as Pick<T, K>;
        keys.forEach(key => {
            if (key in obj) {
                result[key] = obj[key];
            }
        });
        return result;
    }
    public static omit<T extends Interfaces.DeepDict<T>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
        const result = { ...obj } as Omit<T, K>;
        keys.forEach(key => {
            if (key in result) {
                // @ts-expect-error TS doesn't understand this :shrug:
                delete result[key];
            }
        });
        return result;
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
        return arr1.filter(item => set2.has(item));
    }
    public static difference<T>(arr1: T[], arr2: T[]): T[] {
        const set2 = new Set(arr2);
        return arr1.filter(item => !set2.has(item));
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
        return str.replace(/-./g, match => match.charAt(1).toUpperCase());
    }
    public static kebabCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }
    public static snakeCase(str: string): string {
        return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
    }
    public static truncate(str: string, length: number, ending = '...'): string {
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
    public static padStart(str: string, targetLength: number, padString = ' '): string {
        return str.padStart(targetLength, padString);
    }
    public static padEnd(str: string, targetLength: number, padString = ' '): string {
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
    public static isEven(num: number): boolean {
        return num % 2 === 0;
    }
    public static isOdd(num: number): boolean {
        return num % 2 !== 0;
    }
    public static toOrdinal(num: number): string {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const v = num % 100;
        return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]!);
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
    public static toPercentage(num: number, total: number, decimals: number = 2): string {
        if (total === 0) return '0%';
        const percentage = (num / total) * 100;
        return `${this.round(percentage, decimals)}%`;
    }
}