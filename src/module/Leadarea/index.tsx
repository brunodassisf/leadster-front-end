"use client";

import Navbar from "@/src/components/Navbar";
import { Container, Controls } from "./Leadarea.style";
import Select from "@/src/components/Select";

const options = [
    { label: "Data de publicação", value: "date" },
    { label: "Curtidas", value: "like" },
];

function Leadarea() {
    return (
        <Container id="lead">
            <Controls>
                <Navbar />
                <Select
                    id="order_lead"
                    label="Ordenar por"
                    options={options}
                    placeholder="Filtrar"
                />
            </Controls>
        </Container>
    );
}

export default Leadarea;
