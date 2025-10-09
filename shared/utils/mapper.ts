export class Mapper {
    static PSIM = {
        'in progress': 'clock',
        beta: 'sparkles',
        released: 'check-circle',
        archived: 'archive',
        dropped: 'x-circle',
    } as Record<string, string>;
    static PSC = {
        released: 'green',
        beta: 'yellow',
        'in progress': 'orange',
        archived: 'red',
        dropped: 'gray',
    } as Record<string, string>;
    static PPI = {
        open: 'book',
        closed: 'lock',
    } as Record<string, string>;
    static PPC = {
        open: 'blue',
        closed: 'gray',
    } as Record<string, string>;
    static getProjectStatusIcon(status: string): string {
        return `heroicons-solid:${Mapper.PSIM[status] || 'question-mark-circle'}`;
    }
    static getProjectStatusColor(status: string): string {
        return `bg-${Mapper.PSC[status] || 'gray'}-500`;
    }
    static processProjectStatus(status: boolean): PublicationStatus {
        return status ? 'open' : 'closed';
    }
    static getProjectPublicationIcon(publication: boolean): string {
        return `material-symbols:${Mapper.PPI[this.processProjectStatus(publication) || 'help']}-outline`;
    }
    static getProjectPublicationColor(publication: boolean): string {
        return `bg-${Mapper.PPC[this.processProjectStatus(publication) || 'help']}-500`;
    }
}
