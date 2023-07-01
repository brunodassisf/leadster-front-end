"use client";

import Navbar from "@/src/components/Navbar";
import { Section, Controls, Leads } from "./Leadarea.style";
import Select from "@/src/components/Select";
import useGetLeads from "@/src/hook/getLeads";
import { ILeads } from "@/src/helper/interface/lead";
import Card from "@/src/components/Card";

const options = [
    { label: "Data de publicação", value: "date" },
    { label: "Curtidas", value: "like" },
];

function Leadarea() {
    const { data, error, isLoadingLeads } = useGetLeads<ILeads>();

    return (
        <Section id="lead">
            <Controls>
                <Navbar />
                <Select
                    id="order_lead"
                    label="Ordenar por"
                    options={options}
                    placeholder="Filtrar"
                />
                <hr />
            </Controls>
            <Leads>
                {data?.results.map((item) => (
                    <Card key={item.id} data={item} />
                ))}
            </Leads>
        </Section>
    );
}

export default Leadarea;
