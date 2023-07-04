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
            <TitleOne data-aos="fade-down">WEBINARS EXCLUSIVOS</TitleOne>
            <TitleTwo data-aos="fade-down">Menos Conversinha,</TitleTwo>
            <TitleThree data-aos="fade-down">
                <Text>Mais Conversão</Text>
                <AssetHeader
                    src="/static/image/asset-header.png"
                    width={49}
                    height={32}
                    alt="asset-header.png"
                />
            </TitleThree>

            <Paragraph data-aos="fade-up">
                Conheça as estratégias que <strong>mudaram o jogo</strong> e
                como aplicá-las no seu negócio
            </Paragraph>
        </Section>
    );
}
