"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/Navbar";
import Select, { IOption } from "@/src/components/Select";
import { Card, SkeletonCard } from "@/src/components/Card";
import Pagination from "@/src/components/Pagination";

import useGetLeads from "@/src/hook/getLeads";
import { ILeads } from "@/src/helper/interface/lead";
import { Section, Controls, Leads, Divider } from "./Leadarea.style";

const options = [
    { label: "Data de publicação", value: "date" },
    { label: "Curtidas", value: "like" },
];

function Leadarea() {
    const [page, setPage] = useState<number>(1);
    const { data, error, isLoadingLeads, mutate } = useGetLeads<ILeads>({
        page,
    });
    const [filter, setFilter] = useState<IOption | null>(null);

    useEffect(() => {
        mutate();
    }, [page, mutate]);

    return (
        <Section id="lead">
            <Controls>
                <Navbar />
                <Select
                    id="order_lead"
                    label="Ordenar por"
                    value={filter}
                    getOptionLabel={(op) => op.label}
                    onChange={(newValue) => setFilter(newValue)}
                    options={options}
                    placeholder="Filtrar"
                />
                <Divider />
            </Controls>
            <Leads>
                {data && !isLoadingLeads ? (
                    <>
                        {data?.leads.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </>
                ) : (
                    SkeletonCard(9)
                )}
            </Leads>
            <Divider />
            <Pagination
                isLoading={isLoadingLeads}
                totalPages={data?.totalPages}
                currentPage={page}
                onChange={setPage}
            />
        </Section>
    );
}

export default Leadarea;
