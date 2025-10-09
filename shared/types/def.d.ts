declare type PublicationStatus = 'open' | 'closed';

declare interface Project {
    name: string;
    description: string;
    link: string;
    public: boolean;
    status: 'in progress' | 'beta' | 'released' | 'archived' | 'dropped';
    long: string;
}

declare interface SocialMediaAccount {
    username: string;
    identifier: string;
    link: string;
    platform: string;
    icon: string;
}

declare interface AboutSection {
    header: string;
    description: string;
}

declare interface CustomTag {
    text: string;
    color: string;
    icon: string;
}

declare interface Friend {
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

declare interface ContactMethod {
    name: string;
    identifier: string;
    link: string;
    icon: string;
}

declare interface SQLRequest {
    baseURL: string;
    init: RequestInit;
}