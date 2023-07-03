"use client";

import imageLoader from "@/src/helper/imageLoader";
import {
    Action,
    Background,
    FooterInfos,
    Section,
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
                />
                <Infos>
                    <h3>
                        Pronto para triplicar suas
                        <strong>Geração de Leads?</strong>
                    </h3>
                    <h4>
                        Criação e ativação em <strong>4 minutos.</strong>
                    </h4>
                    <hr />
                    <Action>
                        <button>VER DEMONSTRAÇÃO</button>
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
                        <Image
                            loader={({ src, width }) =>
                                imageLoader({ src, width, quality: 100 })
                            }
                            src="/static/image/no-card-dark.webp"
                            alt="no-card-dark"
                            width={20}
                            height={20}
                        />
                        <span>Não é necessário Cartão de Crédito</span>
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
                    </FooterInfos>
                </Infos>
            </Section>
        </Background>
    );
}
