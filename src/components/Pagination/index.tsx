"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Title, WarpperPagination, Page } from "./Pagination.style";

type Props = {
    isLoading: boolean;
    totalPages: number;
    currentPage: number;
    onChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({
    isLoading,
    totalPages,
    currentPage,
    onChange,
}) => {
    const router = useRouter();
    const handlePageChange = (pageNumber: number) => {
        onChange(pageNumber);
        router.push("/#lead", { shallow: true, scroll: true });
    };

    const renderPagination = () => {
        const pages = [];

        if (totalPages <= 1) {
            return null;
        }

        const maxVisiblePages = 5;
        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
        );
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            const isActive = i === currentPage;
            pages.push(
                <Page
                    key={i}
                    active={isActive}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Page>
            );
        }

        return pages;
    };

    return (
        <WarpperPagination>
            {!isLoading ? (
                <>
                    <Title>Página</Title>
                    {renderPagination()}
                </>
            ) : null}
        </WarpperPagination>
    );
};

export default Pagination;
