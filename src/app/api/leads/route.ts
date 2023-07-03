import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get("page");
        const data = await fetch("http://localhost:3000/api/acessData").then(
            (res) => res.json()
        );

        const getPageItems = data.results[page ? Number(page) - 1 : 0];

        return NextResponse.json({
            ...getPageItems,
            totalPages: data.results.length,
        });
    } catch (error) {
        return NextResponse.json({
            error: true,
            msg: "Ocorreu um erro ao buscar os cursos",
        });
    }
}
