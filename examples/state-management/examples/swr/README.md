This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

- In this example there are not data validations before sending a request nor in the backend when the request is received.
- The implementation of the library is as much as complete possible without crossing the line of the scope of the example.
- The implementation of other functionalities was kept to a minimum to focus on the use of the library.
- In order to keep it simple a mock in-memory [DB](./src/lib/db.ts) was made to ensure data persistence for demonstration proposes.
- Simple endpoint implementation [here](./pages/api/todos.ts)

### Walkthrough

#### Data Fetching with `useSWR`

1) We start creating a custom hook to get the todos from the backed. Here we start by importing the `useSWR` hook from the library and the `fetcher` function from the `utils` folder. [Code](./src/hooks/useGetTodos.ts#L1-L2)
2) When `useSWR` is [instantiated](./src/hooks/useGetTodos.ts#L8) the generic type of the expected response is passed, in this case `useSWR<Array<Todo>>`, and as parameters the [url](./src/hooks/useGetTodos.ts#L6), fetcher function and [options](https://swr.vercel.app/docs/api#options). This hook instance returns the following properties:
   1) `data`: data for the given key resolved by fetcher (or undefined if not loaded)
   2) `error`: error thrown by fetcher (or undefined)
   3) `isLoading`: if there's an ongoing request and no "loaded data". Fallback data and previous data are not considered "loaded data"
   4) `isValidating`: if there's a request or revalidation loading
   5) `mutate(data?, options?)`: function to mutate the cached data [Details](https://swr.vercel.app/docs/mutation) in this implementation is being used to revalidate the data.
3) The [fetcher](./src/hooks/_fetcher.ts#L6) function is the responsible of making the request to the server, in this way it's agnostic to the library that will make the request, it was made using `fetch` but we could use others without any problem. Furthermore it allows us to add headers, cookies and other properties to initialize the request. [Code](./src/hooks/_fetcher.ts#L9)
4) The implementation of the custom hook can be observed over [here](./src/app/page.tsx#L11)

#### Data Mutating with `useSWRMutation`
