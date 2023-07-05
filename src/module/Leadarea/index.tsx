"use client";

import { useEffect, useState } from "react";

import Navbar from "@/src/components/Navbar";
import Select, { IOption } from "@/src/components/Select";
import { Card, SkeletonCard } from "@/src/components/Card";
import Pagination from "@/src/components/Pagination";
import Modal from "@/src/components/Modal";

import useGetLeads from "@/src/hook/getLeads";
import { ILeads, ILead } from "@/src/helper/interface/lead";
import { Section, Controls, Leads } from "./Leadarea.style";
import { Divider } from "@/src/style/globalStyle";
import LeadContentModal from "@/src/components/LeadContentModal";

const options = [
    { label: "Data de publicação", value: "date" },
    { label: "Curtidas", value: "like" },
];

function Leadarea() {
    const [navFilter, setNavFilter] = useState<number>(0);
    const [selectedLead, setSelectedLead] = useState<ILead | null>(null);
    const [page, setPage] = useState<number>(1);
    const [filter, setFilter] = useState<IOption | null>(null);

    const handleLeadModal = (lead: ILead | null) => {
        setSelectedLead(lead);
    };

    const { data, error, isLoadingLeads, mutate } = useGetLeads<ILeads>({
        page,
        type: navFilter,
    });

    useEffect(() => {
        mutate();
    }, [page, navFilter, mutate]);

    return (
        <>
            <Section id="lead">
                <Controls data-aos="fade-up">
                    <Navbar type={navFilter} selectedType={setNavFilter} />
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
                <Leads data-aos="fade-up">
                    {data && !isLoadingLeads ? (
                        <>
                            {data?.leads.map((item) => (
                                <Card
                                    key={item.id}
                                    data={item}
                                    onClick={handleLeadModal}
                                />
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
            <Modal
                isOpen={selectedLead !== null}
                onClose={() => handleLeadModal(null)}
            >
                <LeadContentModal data={selectedLead} />
            </Modal>
        </>
    );
}

export default Leadarea;
