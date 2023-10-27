This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1) First run `fnm use` to be sure that the proper Node version is set.
2) Then install dependencies with `npm i` or `npm install`
3) Now, run the development server:

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
- Simple endpoints implementation [here](./pages/api/todos.ts)

### Walkthrough

#### Data Fetching with `useSWR`

1) A custom hook for fetching todos from the backend has been created. Here we start by importing the `useSWR` hook from the library and the `fetcher` function from the `utils` folder. [Code](./src/hooks/useGetTodos.ts#L1-L2)
2) When `useSWR` is [instantiated](./src/hooks/useGetTodos.ts#L8) the generic type of the expected response is passed, in this case `useSWR<Array<Todo>>`, and as parameters the [url](./src/hooks/useGetTodos.ts#L6), fetcher function and [options](https://swr.vercel.app/docs/api#options). This hook instance returns the following properties:
   1) `data`: data for the given key resolved by fetcher (or undefined if not loaded)
   2) `error`: error thrown by fetcher (or undefined)
   3) `isLoading`: if there's an ongoing request and no "loaded data". Fallback data and previous data are not considered "loaded data"
   4) `isValidating`: if there's a request or revalidation loading
   5) `mutate(data?, options?)`: function to mutate the cached data [Details](https://swr.vercel.app/docs/mutation) in this implementation is being used to revalidate the data.
3) The [fetcher](./src/hooks/_fetcher.ts#L6) function is the responsible of making the request to the server, in this way it's agnostic to the library that will make the request, it was made using `fetch` but we could use others without any problem. Furthermore it allows us to add headers, cookies and other properties to initialize the request. [Code](./src/hooks/_fetcher.ts#L9)
4) The implementation of the custom hook can be observed over [here](./src/app/page.tsx#L11)

#### Data Mutating with `useSWRMutation`

This was chosen because it gives more control over the mutations considering that is most common to trigger a mutation manually by listening an event that automatically when the involved component is mounted. There are other ways to perform the mutation strategy [here](https://swr.vercel.app/docs/mutation).

1) A custom hook to update the data via API was created [`useUpdateTodo`](./src/hooks/useUpdateTodo.ts). Here we start by importing `useSWRMutation` and the fetcher function, in this case was made under the name of [`mutator`](./src/hooks/_mutator.ts#L6) in order to be consistent with its functionality.
2) The instantiation of the `useSWRMutation` hook returns [docs](https://swr.vercel.app/docs/mutation#useswrmutation):
   1) `data`: data for the given key returned from fetcher
   2) `error`: error thrown by fetcher (or undefined)
   3) `trigger(arg, options)`: a function to trigger a remote mutation
   4) `reset`: a function to reset the state (data, error, isMutating)
   5) `isMutating`: if there's an ongoing remote mutation
3) The params of the instantiation are:
   1) The [url](./src/hooks/useUpdateTodo.ts#L7) to make the request
   2) The fetcher function, that must be an async function for remote mutation.
   3) `options`:
      1) `optimisticData`: same as mutate's optimisticData
      2) `revalidate = true`: same as mutate's revalidate
      3) `populateCache = false`: same as mutate's populateCache, but the default is false
      4) `rollbackOnError` = true: same as mutate's rollbackOnError
      5) `throwOnError` = true: same as mutate's throwOnError
      6) `onSuccess(data, key, config)`:　 callback function when a remote mutation has been finished successfully
      7) `onError(err, key, config)`: callback function when a remote mutation has returned an error
4) Regarding the fetcher function [`mutator`](./src/hooks/_mutator.ts#L6) here are some **considerations**:
   1) Take into account that it is defined using generics for more type flexibility.
   2) Expects two parameters that are required for the library:
      1) `url`: of type string
      2) `{ arg }`: arguments that needs to cross the bridge between the mutator function and the custom hook implementation, this will be internally passed to the function when the trigger function is [executed](./src/hooks/useUpdateTodo.ts#L21) under the name of `extraOptions` and allows to pass request methods, headers and body if necessary. Please note that here common headers like tokens can be defined [`Code`](./src/hooks/_mutator.ts#L12). Custom types can be checked right here:
         1) [SWRArgOptions](./src/types/index.ts#L14) for mutator function
         2) [ExtraSWROptions](./src/types/index.ts#L8) for trigger function param
   3) Has generic type for type flexibility.
   4) If the request fails it should throw an error as this is expected for the library.
5) Going back to the custom [hook](./src/hooks/useUpdateTodo.ts#L6), when it's instantiated some generics types are being passed instead of using the default ones. This is necessary as by default the `trigger` extraOptions are of type `never`.
   1) By default: `Data = any` overwritten by: `Todo`
   2) By default: `Error = any` overwritten by: `unknown`
   3) By default: `SWRMutationKey extends Key = Key`
   4) By default: `ExtraArg = never` overwritten by: `ExtraSWROptions<Todo>`
   5) By default: `SWRData = Data`
6) Last but not least, the implementation of the custom hook can be found [here](./src/app/page.tsx#L12-L15)
