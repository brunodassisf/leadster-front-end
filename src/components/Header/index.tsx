"use client";

import Image from "next/image";
import { Container } from "./Header.style";

export default function Header() {
    return (
        <Container>
            <Image
                src="/static/image/logo.png"
                alt="leadster.png"
                width={194}
                height={42}
                property="true"
            />
        </Container>
    );
}
