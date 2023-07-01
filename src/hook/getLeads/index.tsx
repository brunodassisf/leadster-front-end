import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useGetLeads<T>() {
    const { data, error, isLoading } = useSWR<T>("/api/leads", fetcher, {
        revalidateOnFocus: false,
    });

    return { data, error, isLoadingLeads: isLoading };
}
