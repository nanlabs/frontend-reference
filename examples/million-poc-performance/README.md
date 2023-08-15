# Million React PoC about performance

This project was generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Proposal

We've created some examples to show how Million JS can improve the performance of your React application. You can find the examples in the `src` folder. Each example has a comments with the explanation of the example. We implemented the same examples in React to compare the performance.

We recommend you to use Chrome devtools to check the performance of the examples, the easy way to see different metrics is using Chrome FPS meter. You can enable it in the Performance tab of Chrome devtools.

> Open the Chrome DevTools and then open the Command Menu by using Control+Shift+P in Windows or <Alt or Command>+Shift+P depends of your computer. In the Command Menu, type ‘Show frames’ and pick the first option (should be “Show frames per second (FPS) meter”). The FPS meter appears in the top left corner of the page.

We recommend you to use the [React DevTools Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) to check the performance of the examples.

## Findings

- We've used [Million](https://million.dev/) in [automatic mode](https://million.dev/docs/install)
- We recommend check the comments in each example to understand the differences in implementations
- We define 3 main use cases to implement the examples:
  - List of items where keys are numbers
  - List of items where keys are strings
  - Tree of items where keys are strings
- In each case, we implement the example using Million and React and we compare the performance of both implementations using Chrome FPS meter as a reference. So for each example, we compare the performance taking the means of fps in 10 seconds.
- we saw, in general, Million is faster than React, the improvement in the case of the list starting with 18.84%.
- the improvement is more noticeable in the tree of items, where the improvement is 157.58% 🔥.
- Something important to note is Million and React Router are not 100% compatible, we found some issues when we try to use nested routes, in this scenario, the route doesn't work as expected. We found a workaround to fix this issue adding `// million-ignore` in the definition of the Route element component.

## Quickstart

```sh
fnm use
npm install
npm run dev
```

## Development

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

| `npm run <script>` | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`              | Serves your app at for local development                                                                                |
| `format`           | Formats the project using [Prettier](https://prettier.io/)                                                              |
| `lint`             | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`         | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Production

Available scripts:

| `npm run <script>` | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `preview`          | Serves your app using your production ready setup (`.env.production`) |
| `build`            | Builds the application to `dist/`                                     |
