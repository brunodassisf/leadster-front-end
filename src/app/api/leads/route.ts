import { filterSwitch } from "@/src/helper/functionsCompare";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page");
        const type = searchParams.get("type");
        const filter = searchParams.get("filter");
        const data = await fetch("http://localhost:3000/api/acessData").then(
            (res) => res.json()
        );

        let getPageItems = {};
        let arrWithFilter = [];

        if (Number(type) === 0) {
            if (filter !== "") {
                for (let i = 0; data.results.length > i; i++) {
                    for (let l = 0; data.results[i].leads.length > l; l++) {
                        arrWithFilter.push(data.results[i].leads[l]);
                    }
                }
                getPageItems = filterSwitch(filter, arrWithFilter);
            } else {
                getPageItems = data.results[page ? Number(page) - 1 : 0];
            }
        } else {
            let arr: any[] = [];
            for (let i = 0; data.results.length > i; i++) {
                for (let l = 0; data.results[i].leads.length > l; l++) {
                    if (data.results[i].leads[l].type === Number(type)) {
                        arr.push(data.results[i].leads[l]);
                    }
                }
            }
            getPageItems = filterSwitch(filter, arr);
        }

        return NextResponse.json({
            ...getPageItems,
            totalPages:
                Number(type) === 0 && filter === "" ? data.results.length : 0,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: true,
            msg: "Ocorreu um erro ao buscar os cursos",
        });
    }
}
