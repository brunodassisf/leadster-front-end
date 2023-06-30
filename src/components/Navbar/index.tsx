"use client";

import { useSearchParams } from "next/navigation";

import { Nav, Button } from "./Navbar.style";

const menuLead = [
    { id: 1, name: "Agências" },
    { id: 2, name: "Chatbot" },
    { id: 3, name: "Marketing Digital" },
    { id: 4, name: "Geração de Leads" },
    { id: 5, name: "Mídia Paga" },
];

export default function Navbar() {
    const searchParams = useSearchParams();
    const selectedLead = searchParams.get("lead");

    return (
        <Nav>
            {menuLead.map((item) => (
                <Button
                    key={item.id}
                    href={`/?lead=${item.name}#lead`}
                    active={selectedLead === item.name}
                >
                    {item.name}
                </Button>
            ))}
        </Nav>
    );
}
