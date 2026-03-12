declare namespace Enums {
    enum ResponseFormat {
        All,
        One,
    }

    enum ProjectStatus {
        In_Progress = 'in progress',
        Beta = 'beta',
        Released = 'released',
        Archived = 'archived',
        Dropped = 'dropped',
    }

    enum PublicationStatus {
        Open = 'open',
        Closed = 'closed',
    }

    enum HealthType {
        Mental = 'mental',
        Physical = 'physical',
        Other = 'other',
    }

    enum HealthProviders {
        MayoClinic = 'Mayo Clinic',
        Wikipedia = 'Wikipedia',
        CDC = 'CDC',
        NIH = 'NIH',
        ClevelandClinic = 'Cleveland Clinic',
        NHS = 'NHS',
    }
}

declare namespace Interfaces {
    interface Project {
        name: string;
        description: string;
        link: string;
        public: boolean;
        status: Enums.ProjectStatus;
        long: string;
    }

    interface SocialMediaAccount {
        username: string;
        identifier: string;
        link: string;
        platform: string;
        icon: string;
    }

    interface AboutSection {
        header: string;
        description: string;
    }

    interface CustomTag {
        text: string;
        color: string;
        icon: string;
    }

    interface Friend {
        id: number;
        name: string;
        description: string;
        active: boolean;
        start: string;
        end: string | null;
        aliases: string;
        image: string | 'none';
        custom_tags: CustomTag[];
    }

    interface ContactMethod {
        name: string;
        identifier: string;
        link: string;
        icon: string;
    }

    interface HealthLink {
        identifier: string;
        link: string;
        display: string;
        provider: Enums.HealthProviders;
    }

    interface Health {
        name: string;
        fullname: string;
        description: string;
        type: Enums.HealthType;
        aka: string;
        personal: string;
        links: HealthLink[];
    }

    interface SQLRequest {
        baseURL: string;
        init: RequestInit;
    }

    interface DeepDict<T> {
        [key: string]: T | DeepDict<T>;
    }

    interface JWKSList {
        keys: JWKS[];
    }

    interface JWKS {
        kty: string;
        d?: string;
        use: string;
        crv: string;
        kid: string;
        x: string;
        y: string;
        alg: string;
    }
}

declare namespace Types {
    type Primitive = string | number | boolean | null | undefined;
    type Nullable<T> = T | null | undefined;
}