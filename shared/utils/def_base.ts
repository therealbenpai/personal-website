// this file is used to create the enums that are used in the project. definitions are in ../types/defs.d.ts

enum ResponseFormat {
    One,
    All,
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
}

export class Enums {
    static ResponseFormat = ResponseFormat;
    static ProjectStatus = ProjectStatus;
    static PublicationStatus = PublicationStatus;
    static HealthType = HealthType;
    static HealthProviders = HealthProviders;
}