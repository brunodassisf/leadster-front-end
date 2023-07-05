import Image from "next/image";

import { Content } from "@/src/components/Card/Card.style";
import { ILead } from "@/src/helper/interface/lead";
import { FaPlay } from "react-icons/fa";
import { Skeleton } from "@/src/style/globalStyle";
import imageLoader from "@/src/helper/imageLoader";

interface CardProps {
    data: ILead;
    onClick: (lead: ILead | null) => void;
}

export function Card({
    data: {
        id,
        name,
        thumbnail,
        release,
        description,
        docFile,
        excelFile,
        presensatioFile,
        videoUrl,
    },
    onClick,
}: CardProps) {
    return (
        <Content
            onClick={() =>
                onClick({
                    id,
                    name,
                    thumbnail,
                    release,
                    description,
                    docFile,
                    excelFile,
                    presensatioFile,
                    videoUrl,
                })
            }
        >
            <Image
                loader={({ src, width }) =>
                    imageLoader({ src, width, quality: 100 })
                }
                src={thumbnail}
                alt={name}
                width={362}
                height={204}
                priority={true}
            />
            <h6>{name}</h6>
            <div className="icon">
                <FaPlay size={60} />
            </div>
        </Content>
    );
}

export function SkeletonCard(count) {
    return Array.from({ length: count }, (_, index) => (
        <Skeleton key={index} width="350px" height="230px" />
    ));
}
