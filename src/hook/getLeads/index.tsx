import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

interface IuseGetLeadsProps {
    page: number;
    type: number;
}

export default function useGetLeads<T>({ page, type }: IuseGetLeadsProps) {
    const { data, error, isLoading, mutate } = useSWR<T>(
        `/api/leads?page=${page}&type=${type}`,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    return { data, error, mutate, isLoadingLeads: isLoading };
}
