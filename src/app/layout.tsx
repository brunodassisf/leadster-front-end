import React from "react";
import { FontsPlusJakartaSans } from "../helper/localFont";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={FontsPlusJakartaSans.className}>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
