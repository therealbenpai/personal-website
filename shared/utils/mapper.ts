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
    static getProjectStatusIcon(status: Enums.ProjectStatus): string {
        return `heroicons-solid:${Mapper.PSIM[status] || 'question-mark-circle'}`;
    }
    static getProjectStatusColor(status: Enums.ProjectStatus): string {
        return `bg-${Mapper.PSC[status] || 'gray'}-500`;
    }
    static processProjectStatus(status: boolean): Enums.PublicationStatus {
        return status ? Enums.PublicationStatus.OPEN : Enums.PublicationStatus.CLOSED;
    }
    static getProjectPublicationIcon(publication: boolean): string {
        return `material-symbols:${Mapper.PPI[this.processProjectStatus(publication) || 'help']}-outline`;
    }
    static getProjectPublicationColor(publication: boolean): string {
        return `bg-${Mapper.PPC[this.processProjectStatus(publication) || 'help']}-500`;
    }
}
