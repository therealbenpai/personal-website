export const CD = (domain: string) => Array.of(domain, `*.${domain} `);

interface CSPDirective {
    none: boolean;
    directives: string[];
    self: boolean;
    wildcard: boolean;
    domains: string[];
}

interface PermissionPolicyInterface {
    none: boolean;
    self: boolean;
    wildcard: boolean;
    src: boolean;
    domains: string[];
}

export class CSPObj implements CSPDirective {
    none: boolean;
    directives: string[];
    self: boolean;
    wildcard: boolean;
    domains: string[];
    constructor(init: Partial<CSPDirective> = CSPObj.defaults) {
        const fData = Object.assign({}, CSPObj.defaults, init);
        this.none = fData.none;
        this.directives = fData.directives;
        this.self = fData.self;
        this.wildcard = fData.wildcard;
        this.domains = fData.domains;
    }
    static defaults: CSPDirective = {
        none: false,
        directives: [],
        self: false,
        wildcard: false,
        domains: []
    }
    parse() {
        if (this.none) return `'none'`;
        return [
            Array.isArray(this.directives) && this.directives ? this.directives.map(v => `'${v}'`) : [],
            this.wildcard ? '*' : '',
            this.self ? "'self'" : '',
            Array.isArray(this.domains) && this.domains ? this.domains : [],
        ].flat(2);
    }
}

export class PermissionPolicy implements PermissionPolicyInterface {
    none: boolean;
    self: boolean;
    wildcard: boolean;
    src: boolean;
    domains: string[];
    constructor(data: Partial<PermissionPolicyInterface>) {
        const fData = Object.assign({}, PermissionPolicy.defaults, data);
        this.none = fData.none;
        this.self = fData.self;
        this.wildcard = fData.wildcard;
        this.src = fData.src;
        this.domains = fData.domains;
    }
    static defaults: PermissionPolicyInterface = {
        none: false,
        self: false,
        wildcard: false,
        src: false,
        domains: []
    }
    parse() {
        if (this.none) return '()';
        if (this.wildcard) return '*';
        return [
            this.src ? 'src' : '',
            this.self ? 'self' : '',
            Array.isArray(this.domains) && this.domains ? this.domains : [],
        ].flat(2);
    }
}

export const BaseValues = {
    permissions: {
        none: new PermissionPolicy({ none: true }).parse(),
        self: new PermissionPolicy({ self: true }).parse(),
        wildcard: new PermissionPolicy({ wildcard: true }).parse(),
    },
    csp: {
        none: new CSPObj({ none: true }).parse(),
        self: new CSPObj({ self: true }).parse(),
        wildcard: new CSPObj({ wildcard: true }).parse(),
        blob: new CSPObj({ wildcard: true, domains: ['blob:'] }).parse(),
        selfAndWildcard: new CSPObj({ self: true, wildcard: true }).parse(),
        unsafeInline: new CSPObj({ directives: ['unsafe-inline'] }).parse(),
        unsafeEval: new CSPObj({ directives: ['unsafe-eval'] }).parse(),
    }
}