"use client";

import imageLoader from "@/src/helper/imageLoader";
import {
    Action,
    Background,
    DemonstrationButton,
    Title,
    FooterInfos,
    Section,
    SubTitle,
    Infos,
} from "./Demonstration.style";
import Image from "next/image";

export default function Demonstration() {
    return (
        <Background>
            <Section>
                <Image
                    loader={({ src, width }) =>
                        imageLoader({ src, width, quality: 100 })
                    }
                    src="/static/image/comparativo_img.png"
                    alt="comparativo_img"
                    width={739}
                    height={687}
                    className="comparativo_img"
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                />
                <Infos data-aos="zoom-in-up" data-aos-duration="1000">
                    <Title>
                        Pronto para triplicar suas
                        <strong>Geração de Leads?</strong>
                    </Title>
                    <SubTitle>
                        Criação e ativação em <strong>4 minutos.</strong>
                    </SubTitle>
                    <hr />
                    <Action>
                        <DemonstrationButton href="/">
                            VER DEMONSTRAÇÃO
                        </DemonstrationButton>
                        <Image
                            loader={({ src, width }) =>
                                imageLoader({ src, width, quality: 100 })
                            }
                            src="/static/image/selo_RD.png"
                            alt="selo_RD"
                            width={205}
                            height={73}
                        />
                    </Action>
                    <FooterInfos>
                        <div>
                            <Image
                                loader={({ src, width }) =>
                                    imageLoader({ src, width, quality: 100 })
                                }
                                src="/static/image/no-card-dark.webp"
                                alt="no-card-dark"
                                width={13}
                                height={13}
                            />
                            <span>Não é necessário Cartão de Crédito</span>
                        </div>
                        <div>
                            <Image
                                loader={({ src, width }) =>
                                    imageLoader({ src, width, quality: 100 })
                                }
                                src="/static/image/rating.webp"
                                alt="rating"
                                width={92}
                                height={16}
                            />
                            <span>4.9/5 média de satisfação</span>
                        </div>
                    </FooterInfos>
                </Infos>
            </Section>
        </Background>
    );
}
