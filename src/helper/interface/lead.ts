export interface ILead {
    id: number;
    name: string;
    release: string;
    thumbnail: string;
    description: string;
    excelFile: string;
    docFile: string;
    presensatioFile: string;
    videoUrl: string;
}
export interface ILeads {
    leads: ILead[];
    totalPages: number;
}

type LeadContentModelProps = Pick<
    ILead,
    | "name"
    | "description"
    | "docFile"
    | "excelFile"
    | "presensatioFile"
    | "videoUrl"
>;

export interface ILeadContentModel {
    data: LeadContentModelProps;
}
