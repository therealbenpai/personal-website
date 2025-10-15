// this file is used to create the enums that are used in the project. definitions are in ../types/defs.d.ts

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

export class Enums {
    static ResponseFormat = ResponseFormat;
    static ProjectStatus = ProjectStatus;
    static PublicationStatus = PublicationStatus;
}