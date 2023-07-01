import Image from "next/image";

import { Content } from "@/src/components/Card/Card.style";
import { ILead } from "@/src/helper/interface/lead";

interface CardProps {
    data: ILead;
}

const imageLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_URL}/${src}?w=${width}&q=${
        quality || 75
    }`;
};

export default function Card({
    data: { name, thumbnail, release },
}: CardProps) {
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
        </Content>
    );
}
