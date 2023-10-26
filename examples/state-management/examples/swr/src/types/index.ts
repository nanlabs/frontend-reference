export type Todo = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type ExtraSWROptions<TData> = {
  method: "POST" | "PUT";
  headers?: Record<string, string>;
  body?: TData;
}

export type SWRArgOptions<TBody> = {
  arg: ExtraSWROptions<TBody>;
}
