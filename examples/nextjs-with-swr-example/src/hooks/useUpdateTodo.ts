import useSWRMutation from "swr/mutation";
import { mutator } from "./_mutator";
import { ExtraSWROptions, Todo } from "@/types";
import { Key } from "swr";

const useUpdateTodo = () => {
  const url = "/api/todos";

  const { trigger, data, isMutating, reset, error } = useSWRMutation<
    Todo,
    unknown,
    Key,
    ExtraSWROptions<Todo>
  >(
    url,
    mutator,
    /* options */
  );

  const updateTodo = async (data: Todo) => {
    const extraOptions: ExtraSWROptions<Todo> = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Custom-Header": "foobar",
      },
      body: data,
    };
    try {
      await trigger(extraOptions);
    } catch (error) {
      console.error(error);
      alert(error);      
    }
  };
  return { updateTodo, data, isMutating, reset, error };
};

export default useUpdateTodo;
