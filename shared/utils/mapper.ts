export class Mapper {
    static PSIM = {
        'in progress': 'clock',
        beta: 'sparkles',
        released: 'check-circle',
        archived: 'archive',
        dropped: 'x-circle',
    } as Record<Enums.ProjectStatus, string>;
    static PSC = {
        released: 'green',
        beta: 'yellow',
        'in progress': 'orange',
        archived: 'red',
        dropped: 'gray',
    } as Record<Enums.ProjectStatus, string>;
    static PPI = {
        open: 'book',
        closed: 'lock',
    } as Record<Enums.PublicationStatus, string>;
    static PPC = {
        open: 'blue',
        closed: 'gray',
    } as Record<Enums.PublicationStatus, string>;
    static HI = {
        mental: 'mental-health-outline',
        physical: 'body-outline',
        other: 'health-outline',
    } as Record<Enums.HealthType, string>;
    static HC = {
        mental: 'purple',
        physical: 'red',
        other: 'gray',
    } as Record<Enums.HealthType, string>;
    static HPI = {
        'Mayo Clinic': 'custom:mayo-clinic',
        'Wikipedia': 'mdi:wikipedia',
        'CDC': 'custom:cdc',
        'NIH': 'custom:nih',
        'Cleveland Clinic': 'custom:cleveland-clinic',
    } as Record<Enums.HealthProviders, string>;
    static getProjectStatusIcon(status: Enums.ProjectStatus): string {
        return `heroicons-solid:${Mapper.PSIM[status] || 'question-mark-circle'}`;
    }
    static getProjectStatusColor(status: Enums.ProjectStatus): string {
        return `bg-${Mapper.PSC[status] || 'gray'}-500`;
    }
    static processProjectStatus(status: boolean): Enums.PublicationStatus {
        return status ? Enums.PublicationStatus.Open : Enums.PublicationStatus.Closed;
    }
    static getProjectPublicationIcon(publication: boolean): string {
        return `material-symbols:${Mapper.PPI[this.processProjectStatus(publication) || 'help']}-outline`;
    }
    static getProjectPublicationColor(publication: boolean): string {
        return `bg-${Mapper.PPC[this.processProjectStatus(publication) || 'help']}-500`;
    }
    static getHealthIcon(type: Enums.HealthType): string {
        return `healthicons:${Mapper.HI[type] || 'question-mark'}`;
    }
    static getHealthColor(type: Enums.HealthType): string {
        return `bg-${Mapper.HC[type] || 'gray'}-500`;
    }
    static getHealthProviderIcon(provider: Enums.HealthProviders): string {
        return Mapper.HPI[provider] || 'question-mark';
    }
}
