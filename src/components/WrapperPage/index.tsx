"use client";

import Footer from "../Footer";
import Header from "../Header";

export default function WrapperPage({ children }) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
