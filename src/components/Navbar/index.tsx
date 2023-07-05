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

interface NavbarProps {
    type: number;
    selectedType: (lead: number) => void;
}

export default function Navbar({ type, selectedType }: NavbarProps) {
    return (
        <Nav>
            {menuLead.map((item) => (
                <Button
                    key={item.id}
                    active={type === item.id}
                    onClick={() => {
                        if (type === item.id) selectedType(0);
                        else selectedType(item.id);
                    }}
                >
                    {item.name}
                </Button>
            ))}
        </Nav>
    );
}
