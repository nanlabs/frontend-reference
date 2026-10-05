This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. First run `fnm use` to be sure that the proper Node version is set.
2. Then install dependencies with `npm i` or `npm install`
3. Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## About SWR Example

This example shows how to use [SWR](https://swr.vercel.app/) to fetch and mutate data from an API and display it on the page.

### Considerations

- In this example there are no data validations before sending a request nor in the backend when the request is received.
- The implementation of the library is as much as complete possible without crossing the line of the scope of the example.
- The implementation of other functionalities was kept to a minimum to focus on the use of the library.
- In order to keep it simple a mock in-memory [DB](./src/lib/db.ts) was made to ensure data persistence for demonstration proposes.
- Simple endpoints implementation [here](./src/pages/api/todos.ts)

### Walkthrough

#### Data Fetching with `useSWR`

The `useGetTodos` hook imports `useSWR` and a shared fetcher to load todos
from the API ([hook](./src/hooks/useGetTodos.ts#L1-L2)). It passes the response
type, request URL, fetcher, and options when it creates the SWR instance
([implementation](./src/hooks/useGetTodos.ts#L8)).

The SWR instance exposes `data`, `error`, `isLoading`, `isValidating`, and
`mutate(data?, options?)`. The `mutate` function is used here to revalidate the
cached data after a change. See the [SWR mutation docs](https://swr.vercel.app/docs/mutation).

The shared [fetcher](./src/hooks/_fetcher.ts#L6) uses `fetch` to make requests
and can add headers, cookies, or other request options
([implementation](./src/hooks/_fetcher.ts#L9)). The page uses the hook in
[`src/app/page.tsx`](./src/app/page.tsx#L11).

#### Data Mutating with `useSWRMutation`

`useSWRMutation` lets the example trigger updates in response to user actions.
The `useUpdateTodo` hook uses a `mutator` to send the request
([hook](./src/hooks/useUpdateTodo.ts), [mutator](./src/hooks/_mutator.ts#L6)).
See the [SWR mutation docs](https://swr.vercel.app/docs/mutation#useswrmutation).

The mutation instance exposes `data`, `error`, `trigger(arg, options)`, `reset`,
and `isMutating`. Its options include `optimisticData`, `revalidate`,
`populateCache`, `rollbackOnError`, `throwOnError`, `onSuccess`, and `onError`.
The hook sets the request URL and passes mutation arguments to the `mutator` as
`extraOptions` when it calls `trigger` ([trigger call](./src/hooks/useUpdateTodo.ts#L21)).

The `mutator` accepts a URL and an `{ arg }` object, which can carry request
methods, headers, and a body. Shared headers such as tokens can be added there
([implementation](./src/hooks/_mutator.ts#L12)). Its argument types are
[`SWRArgOptions`](./src/types/index.ts#L14) and
[`ExtraSWROptions`](./src/types/index.ts#L8). The hook specializes SWR's generic
types for `Todo`, `unknown` errors, and `ExtraSWROptions<Todo>` rather than using
the defaults. The page uses it in
[`src/app/page.tsx`](./src/app/page.tsx#L12-L15).
