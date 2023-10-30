<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>Frontend Reference</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Awesome](https://awesome.re/mentioned-badge.svg)](https://github.com/nanlabs/awesome-nan)
[![Continious Integration][cibadge]][ciurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different Frontend related resources like applications, examples, libraries, tools, etc.

## Contents

- [Apps and Boilerplates](#apps-and-boilerplates)
- [Node Packages](#node-packages)
- [Examples](#examples)

  - [Frontend](#frontend)
    - [Website Optimization and Performance](#website-optimization-and-performance)
    - [React State Management](#react-state-management)
    - [Microfrontend](#microfrontend)
    - [Styling and CSS](#styling-and-css)
    - [Virtual Dom](#virtual-dom)
    - [Security Best Practices](#security-best-practices)
    - [NextJs](#nextjs)

- [Contributing](#contributing)
- [Contributors](#contributors)

## Apps and Boilerplates

| Name                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               | Keywords                                                                                                                                            |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React Boilerplate](https://github.com/nanlabs/react-boilerplate)                      | A simple but powerful boilerplate to start a React project powered by Vite. Boilerplate generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app) contains full CI/CD setup with GitHub Actions and Docker. It also contains a full local development setup with hot reload and production ready setup with minification and optimization. It also contains a full test setup with Jest and React Testing Library. | _React_                                                                                                                                             |
| [Storybook Playground](https://github.com/nanlabs/nancy.js/tree/main/apps/playground/) | This app was created with the goal to have examples of ours React components, hooks and libraries that are created in different packages in the repository Nancy.js.                                                                                                                                                                                                                                                                                      | _React_, _Storybook_, _Nancy.js_                                                                                                                    |
| [TypeScript Monorepo Boilerplate](https://github.com/nanlabs/ts-monorepo-boilerplate)  | A simple but powerful boilerplate to start a TypeScript monorepo project powered Turborepo.                                                                                                                                                                                                                                                                                                                                                               | _TypeScript_, _Turborepo_, _Monorepo_, _Boilerplate_, _React_, _NPM Workspaces_, _Changesets_, _ESLint_, _Prettier_, _Jest_, _Nest.js_, _Storybook_ |

## Node Packages

| Name                                                                                       | Description                                                                                                                                                                    | Keywords                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [@nanlabs/eslint-config](https://www.npmjs.com/package/@nanlabs/eslint-config)             | This eslint config is used in our projects to enforce a consistent code style.                                                                                                 | _ESLint_                                                    |
| [@nanlabs/eslint-config-next](https://www.npmjs.com/package/@nanlabs/eslint-config-next)   | This eslint config is used in our projects to enforce a consistent code style for Next.js projects.                                                                            | _ESLint_, _Next.js_, _TypeScript_                           |
| [@nanlabs/eslint-config-react](https://www.npmjs.com/package/@nanlabs/eslint-config-react) | This eslint config is used in our projects to enforce a consistent code style for React projects.                                                                              | _ESLint_, _React_, _TypeScript_                             |
| [@nanlabs/eslint-config-ts](https://www.npmjs.com/package/@nanlabs/eslint-config-ts)       | This eslint config is used in our projects to enforce a consistent code style for TypeScript projects.                                                                         | _ESLint_, _TypeScript_                                      |
| [@nanlabs/fp](https://www.npmjs.com/package/@nanlabs/fp)                                   | This library provides a set of tools to help you write functional code in TypeScript. It includes tools for type guards, error handling, and more!                             | _Functional Programming_, _TypeScript_                      |
| [@nanlabs/react-hooks](https://www.npmjs.com/package/@nanlabs/react-hooks)                 | This package contains different React hooks that can be used in different projects.                                                                                            | _React_, _Hooks_, _Custom Hooks_                            |
| [@nanlabs/react-thirdparty](https://www.npmjs.com/package/@nanlabs/react-thirdparty)       | This library provides a set of React components that can be used in any React application. It provides integrations with third party libraries like Google ReCaptcha and more! | _React_, _Components_, _UI_, _Design System_, _Third Party_ |
| [@nanlabs/react-ui](https://www.npmjs.com/package/@nanlabs/react-ui)                       | This library provides a set of React components that can be used in any React application                                                                                      | _React_, _Components_, _UI_, _Design System_                |
| [@nanlabs/thirdparty](https://www.npmjs.com/package/@nanlabs/thirdparty)                   | This library provides a set of tools that can be used in any web application. It provides integrations with third party libraries like Google ReCaptcha and more!              | _Third Party_                                               |

## Examples

### Frontend

#### Website Optimization and Performance

| Name                                                                                                                                      | Description                                                                                                                                                                        | Keywords                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Supercharge Your Website with Core Web Vitals](https://github.com/nanlabs/frontend-reference/tree/main/examples/seo-and-core-web-vitals) | Learn how to optimize your website's performance and improve SEO using Core Web Vitals. Discover the key metrics, tools, and techniques to deliver an exceptional user experience. | _Core Web Vitals_, _SEO_, _Website Performance_, _User Experience_, _Google PageSpeed Insights_, _Lighthouse_, _Web Vitals Extension_ |

#### React State Management

| Name                                                                                                                                         | Description                                                                                   | Keywords                               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------- |
| [AgileTs](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-agilets/)                        | This example shows how to use AgileTs to manage state.                                        | _React_, _AgileTs_                     |
| [Akita](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-akita/)                          | This example shows how to use Akita to manage state.                                          | _React_, _Akita_                       |
| [Context](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-context/)                         | This example shows how to use React Context to share data between components.                 | _React_                                |
| [Effector](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-effector/)                    | This example shows how to use Effector to manage state.                                       | _React_, _Effector_                    |
| [Global State](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-global-state/)               | This example shows how to use a global state using React Hooks.                               | _React_                                |
| [Hookstate](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-hookstate/)                     | This example shows how to use Hookstate to manage state.                                      | _React_                                |
| [Jotai](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-jotai/)                            | This example shows how to use Jotai to manage state.                                          | _React_, _Jotai_                       |
| [MobX](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-mobx/)                       | This example shows how to use MobX to manage state.                                           | _React_, _MobX_                        |
| [MobX State Tree](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-mobx-state-tree/) | This example shows how to use MobX State Tree to manage state.                                | _React_, _MobX State Tree_             |
| [NextJS with SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/nextjs-with-swr-example)                                  | This example shows how to use SWR with NextJS for data fetch and mutate.                      | _NextJS_, _SWR_, _React_, _TypeScript_ |
| [Prop Drilling](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-prop-drilling/)             | This example shows how to pass data from a parent component to a child component using props. | _React_                                |
| [React Easy State](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-easy-state/)     | This example shows how to use React Easy State to manage state.                               | _React_, _React Easy State_            |
| [React Query](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/api-react-query/)                   | This example shows how to use React Query to fetch data from an API.                          | _React_, _React Query_                 |
| [Recoil](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-recoil/)                          | This example shows how to use Recoil to manage state.                                         | _React_, _Recoil_                      |
| [Redux Toolkit](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-redux-toolkit/)    | This example shows how to use Redux Toolkit to manage state.                                  | _React_, _Redux Toolkit_               |
| [Rematch](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-rematch/)                | This example shows how to use Rematch to manage state.                                        | _React_, _Rematch_                     |
| [Rxjs](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-rxjs/)                            | This example shows how to use Rxjs to manage state.                                           | _React_, _Rxjs_                        |
| [Storeon](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-storeon/)                      | This example shows how to use Storeon to manage state.                                        | _React_, _Storeon_                     |
| [SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/api-swr/)                                   | This example shows how to use SWR to fetch data from an API.                                  | _React_, _SWR_                         |
| [Teaful](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-teaful/)                           | This example shows how to use Teaful to manage state.                                         | _React_                                |
| [Unistore](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-unistore/)              | This example shows how to use Unistore to manage state.                                       | _React_, _Unistore_                    |
| [Valtio](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-valtio/)                   | This example shows how to use Valtio to manage state.                                         | _React_, _Valtio_                      |
| [XState](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/fsm-xstate/)                             | This example shows how to use XState to manage state.                                         | _React_, _XState_                      |
| [Zustand](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-zustand/)                | This example shows how to use Zustand to manage state.                                        | _React_, _Zustand_                     |

#### Microfrontend

| Name                                                                                                                                                                                 | Description                                                                                                                                                                              | Keywords                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Microfrontend with Shared React Router and React Application](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-shell-react-app-shared-routing/) | project that demonstrates the usage of a shared router in a container application made with React and an independent application made with React and Vite                                | _React_, _Vue_, _Module federation_, _Vite_, _Webpack_, _Shared router_, _Microfrontend_ |
| [Microfrontend with Shared React Router and React Components](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-app-react-components/)            | This example has a microfrontend project that demonstrates the usage of a shared router in a React application                                                                           | _React_, _Vue_, _Module federation_, _Vite_, _Webpack_, _Shared router_, _Microfrontend_ |
| [Microfrontend with Shared React Router and Vue Application](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-shell-react-vue-app/)              | This example has a microfrontend project that demonstrates the usage of a shared router in a container application made with React and an independent application made with Vue and Vite | _React_, _Vue_, _Module federation_, _Vite_, _Webpack_, _Shared router_, _Microfrontend_ |

#### Styling and CSS

| Name                                                                                                                                                                  | Description                                                                                                                                                       | Keywords                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [Comparative Analysis between styled-components and Tailwind CSS](https://github.com/nanlabs/frontend-reference/tree/main/examples/styled-components-vs-tailwindcss/) | Article that presents a comparative analysis of styled-components and Tailwind CSS, focusing on practical implementations of a UI Challenge using both libraries. | _styled-components_, _Tailwind CSS_, _CSS_, _CSS-in-JS_, _Analysis_ |

#### Virtual Dom

| Name                                                                                                                                                           | Description                                                                                                    | Keywords                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Proof of Concept: Million, The Virtual DOM Replacement for React.](https://github.com/nanlabs/frontend-reference/tree/main/examples/million-poc-performance/) | This is a POC that shows how to use Million and comparative analysis of Performance between Million and React. | _Performance_, _React_, _Virtual Dom_, _Rendering_, _Million_ |

#### Security Best Practices

| Name                                                                                                                                  | Description                                                                                                                                                                                                                                                                                                      | Keywords                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [React Security Best Practices Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-security-best-practices) | This checklist provides React security best practices to assist you and your team in identifying and addressing security issues within your React applications. Additionally, it includes guidance on how to automate security testing for your React code and automatically remedy any security-related issues. | _React_, _Security_, _Best Practices_, _Frontend_, _Automated Testing_, _Security Issues_ |

#### NextJs

| Name                                                                                                        | Description                                                              | Keywords                               |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------- |
| [NextJS with SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/nextjs-with-swr-example) | This example shows how to use SWR with NextJS for data fetch and mutate. | _NextJS_, _SWR_, _React_, _TypeScript_ |

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

## Contributors

<a href="https://github.com/nanlabs/frontend-reference/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/frontend-reference"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[cibadge]: https://github.com/nanlabs/frontend-reference/actions/workflows/ci.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/frontend-reference/actions/workflows/ci.yml
[licenseurl]: https://github.com/nanlabs/frontend-reference/blob/main/LICENSE
