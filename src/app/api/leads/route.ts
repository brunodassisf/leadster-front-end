import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const jsonDirectory = path.join(process.cwd(), "src/data");

    const fileContents = await fs.readFile(
        jsonDirectory + "/lead.json",
        "utf8"
    );

    return NextResponse.json(JSON.parse(fileContents));
}
