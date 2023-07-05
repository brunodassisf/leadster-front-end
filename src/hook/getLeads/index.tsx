import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

interface IuseGetLeadsProps {
    page: number;
    type: number;
    filter: string;
}

export default function useGetLeads<T>({
    page,
    type,
    filter,
}: IuseGetLeadsProps) {
    const { data, error, isLoading, mutate } = useSWR<T>(
        `/api/leads?page=${page}&type=${type}&filter=${filter}`,
        fetcher,
        {
            revalidateOnFocus: false,
        }
    );

    return { data, error, mutate, isLoadingLeads: isLoading };
}
