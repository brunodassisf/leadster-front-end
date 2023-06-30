import React from "react";
import { FontsPlusJakartaSans } from "../helper/localFont";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={FontsPlusJakartaSans.className}>{children}</body>
        </html>
    );
}
