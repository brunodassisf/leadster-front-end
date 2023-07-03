export interface ILead {
    id: number;
    name: string;
    release: string;
    thumbnail: string;
}
export interface ILeads {
    leads: ILead[];
    totalPages: number;
}
