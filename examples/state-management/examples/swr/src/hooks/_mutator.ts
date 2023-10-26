// Fetcher implementation.
// The extra argument will be passed via the `arg` property of the 2nd parameter.

import { SWRArgOptions, Todo } from "@/types";

export async function updateMutator(url: string, { arg }: SWRArgOptions<Todo>) {
  try {
    const response = await fetch(url, {
      method: arg.method,
      headers: arg.headers,
      body: JSON.stringify(arg.body)
    })
    if (!response.ok) throw new Error(response.statusText);
    return response.json() as Promise<Todo>;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
