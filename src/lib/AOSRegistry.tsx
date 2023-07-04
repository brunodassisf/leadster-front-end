"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        AOS.init();
    }, []);

    return <>{children}</>;
}
