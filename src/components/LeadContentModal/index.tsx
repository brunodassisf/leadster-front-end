"use client";

import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

import { ILeadContentModel } from "@/src/helper/interface/lead";
import {
    ActionsFile,
    Discription,
    Extensions,
    LeadDetail,
    LeadDetailTitle,
} from "./LeadContentModal.style";

function LeadContentModal({
    data: { name, description, videoUrl, docFile, excelFile, presensatioFile },
}: ILeadContentModel) {
    return (
        <LeadDetail>
            <LeadDetailTitle>
                <span>Webinar:</span> {name}
            </LeadDetailTitle>
            <div>
                <iframe
                    width="0"
                    height="0"
                    src={videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <Discription>
                <h6>Descrição</h6>
                <p>{description}</p>
            </Discription>
            <ActionsFile>
                <h6>Downloads</h6>
                <Extensions>
                    <Link
                        href={`/static/files/${excelFile}`}
                        download={excelFile}
                        target="_blank"
                    >
                        <span>
                            <FaCloudDownloadAlt />
                        </span>
                        {excelFile}
                    </Link>
                    <Link
                        href={`/static/files/${docFile}`}
                        download={docFile}
                        target="_blank"
                    >
                        <span>
                            <FaCloudDownloadAlt />
                        </span>
                        {docFile}
                    </Link>
                    <Link
                        href={`/static/files/${presensatioFile}`}
                        download={presensatioFile}
                        target="_blank"
                    >
                        <span>
                            <FaCloudDownloadAlt />
                        </span>
                        {presensatioFile}
                    </Link>
                </Extensions>
            </ActionsFile>
        </LeadDetail>
    );
}

export default LeadContentModal;
