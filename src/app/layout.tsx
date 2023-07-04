import React from "react";
import { FontsPlusJakartaSans } from "../helper/localFont";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import AOSRegistry from "../lib/AOSRegistry";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
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
