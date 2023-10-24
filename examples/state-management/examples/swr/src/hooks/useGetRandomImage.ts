import useSWR from "swr";
import { fetcher } from "./fetcher";
import { RandomImgResponse } from "@/types";

const useGetRandomImage = () => {
  const url = "https://dog.ceo/api/breeds/image/random";

  const { data, error, isLoading, isValidating, mutate } = useSWR<RandomImgResponse>(url, fetcher);

  const refetch = () => mutate();

  return { imgData: data, error, isLoading, isValidating, refetch };
};

export default useGetRandomImage;
