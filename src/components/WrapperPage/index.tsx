"use client";

import Header from "../Header";

export default function WrapperPage({ children }) {
    return (
        <main>
            <Header />
            {children}
        </main>
    );
}
