import useSWR from "swr";
import { fetcher } from "./_fetcher";
import { Todo } from "@/types";

const useGetTodos = () => {
  const url = "/api/todos";

  const { data, error, isLoading, isValidating, mutate } = useSWR<Array<Todo>>(url, fetcher, /* config */);

  const refetch = () => mutate();

  return { todos: data, error, isLoading, isValidating, refetch };
};

export default useGetTodos;
