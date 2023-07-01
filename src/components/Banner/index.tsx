"use client";

import {
    Section,
    TitleOne,
    TitleTwo,
    TitleThree,
    Text,
    AssetHeader,
    Paragraph,
} from "./Banner.style";

export default function Banner() {
    return (
        <Section>
            <TitleOne>WEBINARS EXCLUSIVOS</TitleOne>
            <TitleTwo>Menos Conversinha,</TitleTwo>
            <TitleThree>
                <Text>Mais Conversão</Text>
                <AssetHeader
                    src="/static/image/asset-header.png"
                    width={49}
                    height={32}
                    alt="asset-header.png"
                />
            </TitleThree>

            <Paragraph>
                Conheça as estratégias que <strong>mudaram o jogo</strong> e
                como aplicá-las no seu negócio
            </Paragraph>
        </Section>
    );
}
