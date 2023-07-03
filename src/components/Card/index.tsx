import Image from "next/image";

import { Content } from "@/src/components/Card/Card.style";
import { ILead } from "@/src/helper/interface/lead";
import { FaPlay } from "react-icons/fa";
import { Skeleton } from "@/src/style/globalStyle";

interface CardProps {
    data: ILead;
}

const imageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_URL}/${src}?w=${width}&q=${
        quality || 75
    }`;
};

export function Card({ data: { name, thumbnail, release } }: CardProps) {
    return (
        <Content>
            <Image
                loader={({ src, width }) =>
                    imageLoader({ src, width, quality: 100 })
                }
                src={thumbnail}
                alt={name}
                width={362}
                height={204}
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
