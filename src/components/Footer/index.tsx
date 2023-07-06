import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
    Adress,
    Contact,
    ContentCopyright,
    ContactSocialMedia,
    Copyright,
    FooterContent,
    ManagerLinks,
    Item,
    SocialMedia,
    Section,
    Tag,
} from "./Footer.style";
import { Divider } from "@/src/style/globalStyle";

const footerLinks = [
    {
        title: "Link Principais",
        links: [
            {
                name: "Home",
                path: "/",
            },
            {
                name: "Ferramenta",
                path: "/",
            },
            {
                name: "Preços",
                path: "/",
            },
            {
                name: "Contato",
                path: "/",
            },
        ],
    },
    {
        title: "Cases",
        links: [
            {
                name: "Geração de Leads B2B",
                path: "/",
            },
            {
                name: "Geração de LKeads em Software",
                path: "/",
            },
            {
                name: "Geração de Leads em Imobiliária",
                path: "/",
            },
            {
                name: "Cases de sucesso",
                path: "/",
            },
        ],
    },
    {
        title: "Materiais",
        links: [
            {
                name: "Blog",
                path: "/",
            },
            {
                name: "Parceria com Agências",
                path: "/",
            },
            {
                name: "Guia Definitivo do Marketing",
                path: "/",
            },
            {
                name: "Materiais Gratuitos",
                path: "/",
            },
        ],
    },
];

function Footer() {
    return (
        <FooterContent>
            <Section>
                <Image
                    src="/static/image/logo.png"
                    alt="leadster.png"
                    width={194}
                    height={42}
                />
                <Tag>Transformando visitantes em clientes.</Tag>
                <ManagerLinks>
                    {footerLinks.map((item, index) => (
                        <Item key={index}>
                            <h6>{item.title}</h6>
                            {item.links.map((link, indexLink) => (
                                <Link key={indexLink} href={link.path}>
                                    {link.name}
                                </Link>
                            ))}
                        </Item>
                    ))}
                    <ContactSocialMedia>
                        <h6>Siga a Leadster</h6>
                        <SocialMedia>
                            <Link
                                href="https://www.linkedin.com/company/getleadster/?originalSubdomain=br"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </Link>
                            <Link
                                href="https://www.facebook.com/leadsterplatform/?locale=pt_BR"
                                target="_blank"
                            >
                                <FaFacebookF />
                            </Link>
                            <Link
                                href="https://www.instagram.com/leadster.com.br/"
                                target="_blank"
                            >
                                <FaInstagram />
                            </Link>
                        </SocialMedia>
                        <Contact>
                            <span>
                                <strong>E-mail:</strong>contato@leadster.com.br
                            </span>
                            <span>
                                <strong>Telefone:</strong>(42) 98828-9851
                            </span>
                        </Contact>
                    </ContactSocialMedia>
                </ManagerLinks>
            </Section>
            <Divider />
            <ContentCopyright>
                <Copyright>
                    Copyright @ 2015 -2023 Todos os direitos reservados |
                    <Link href="/">Leadster</Link>
                </Copyright>
                <Adress>
                    Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:
                    80010-000 |<Link href="/">Termo de uso</Link>
                </Adress>
            </ContentCopyright>
        </FooterContent>
    );
}

export default Footer;
