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
}

declare namespace Types {
    type Primitive = string | number | boolean | null | undefined;
    type Nullable<T> = T | null | undefined;
}

// -- Values that can't be parsed in a namespace --

/** Quickly calls the database for a single record */
declare function quickDBCall <T, F = Enums.ResponseFormat.ONE>(
    /** The response format (ONE | ALL) */
    form: F,
    /** The runtime config */
    rtc: RTC,
    /** The table to query */
    table: string,
    /** The data to filter by (only for ALL) */
    data: Partial<T>,
): Promise<Types.Nullable<T>>;

/** Quickly calls the database for all records */
declare function quickDBCall<T, F = Enums.ResponseFormat.ALL>(
    /** The response format (ONE | ALL) */
    form: F,
    /** The runtime config */
    rtc: RTC,
    /** The table to query */
    table: string,
): Promise<Types.Nullable<T[]>>;

declare function quickDBCall<T, F extends Enums.ResponseFormat>(
    /** The response format (ONE | ALL) */
    form: F,
    /** The runtime config */
    rtc: RTC,
    /** The table to query */
    table: string,
    /** The data to filter by (only for ALL) */
    data?: Partial<T>
): Promise<Types.Nullable<T | T[]>>;