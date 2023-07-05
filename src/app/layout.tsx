import Head from "next/head";
import React from "react";

import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import AOSRegistry from "../lib/AOSRegistry";

import { FontsPlusJakartaSans } from "../helper/localFont";
import { openGraphImage } from "./shared-metadata";

export const metadata = {
    title: "Leadster",
    description: "Transformando visitantes em clientes",
    openGraph: {
        title: "Leadster",
        description: "Transformando visitantes em clientes",
        url: "",
        siteName: "Leadster",
        locale: "pt_BR",
        type: "website",
        ...openGraphImage,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <body className={FontsPlusJakartaSans.className}>
                <AOSRegistry>
                    <StyledComponentsRegistry>
                        {children}
                    </StyledComponentsRegistry>
                </AOSRegistry>
            </body>
        </html>
    );
}
