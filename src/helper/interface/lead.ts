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
    like: number;
}
export interface ILeads {
    leads: ILead[];
    totalPages: number;
}

export type ModalContentLead = Pick<
    ILead,
    | "name"
    | "description"
    | "thumbnail"
    | "excelFile"
    | "docFile"
    | "presensatioFile"
    | "videoUrl"
>;

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
