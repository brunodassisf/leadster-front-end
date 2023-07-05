import { ILead } from "./interface/lead";

export function compareDate(a: ILead, b: ILead) {
    const dataA = new Date(a.release);
    const dataB = new Date(b.release);

    return dataB.getTime() - dataA.getTime();
}

export function compareLike(a: ILead, b: ILead) {
    return b.like - a.like;
}

export function filterSwitch(type: string, arr: ILead[]) {
    switch (type) {
        case "order":
            return { leads: arr.sort(compareDate) };
        case "like":
            return { leads: arr.sort(compareLike) };
        default:
            return { leads: arr };
    }
}
