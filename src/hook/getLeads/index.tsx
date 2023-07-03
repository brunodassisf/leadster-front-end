import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

interface IuseGetLeadsProps {
    page: number;
}

export default function useGetLeads<T>({ page }: IuseGetLeadsProps) {
    const { data, error, isLoading, mutate } = useSWR<T>(
        `/api/leads?page=${page}`,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    return { data, error, mutate, isLoadingLeads: isLoading };
}
