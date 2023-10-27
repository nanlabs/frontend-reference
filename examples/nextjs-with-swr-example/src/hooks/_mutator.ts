// Fetcher implementation.
// The extra argument will be passed via the `arg` property of the 2nd parameter.

import { SWRArgOptions } from "@/types";

export const mutator = async <TData>(url: string, { arg }: SWRArgOptions<TData>) => {
  try {
    const response = await fetch(url, {
      method: arg.method,
      headers: {
        ...arg.headers,
        "Common-header": "This is a mutation common header"
      },
      body: JSON.stringify(arg.body)
    })
    if (!response.ok) throw new Error(response.statusText);
    return response.json() as Promise<TData>;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
