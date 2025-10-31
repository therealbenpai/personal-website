declare namespace Enums {
    enum ResponseFormat {
        ALL,
        ONE,
    }

    enum ProjectStatus {
        IN_PROGRESS = 'in progress',
        BETA = 'beta',
        RELEASED = 'released',
        ARCHIVED = 'archived',
        DROPPED = 'dropped',
    }

    enum PublicationStatus {
        OPEN = 'open',
        CLOSED = 'closed',
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