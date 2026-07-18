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
- [Guides, Tutorials and Best Practices](#guides-tutorials-and-best-practices)
- [Examples](#examples)
  - [Frontend](#frontend)
    - [Website Optimization and Performance](#website-optimization-and-performance)
    - [React State Management](#react-state-management)
    - [React Router](#react-router)
    - [Microfrontend](#microfrontend)
    - [Styling and CSS](#styling-and-css)
    - [Virtual Dom](#virtual-dom)
    - [Security Best Practices](#security-best-practices)
    - [NextJs](#nextjs)
    - [React Native](#react-native)
      - [Expo](#expo)
    - [Clipboard Integration](#clipboard-integration)

- [Contributing](#contributing)
- [Contributors](#contributors)

## Apps and Boilerplates

| Name                                                                                   | Description                                                                                                                                                                                                | Keywords                                                                                                                                            |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React Boilerplate](https://github.com/nanlabs/react-boilerplate)                      | A robust boilerplate for starting React projects with Vite, featuring CI/CD setup, Docker integration, hot reload for development, and production-ready optimizations.                                     | _React_, _Boilerplate_, _Vite_, _CI/CD_, _Docker_                                                                                                   |
| [Storybook Playground](https://github.com/nanlabs/nancy.js/tree/main/apps/playground/) | An application showcasing examples of React components, hooks, and libraries developed in the Nancy.js repository. It serves as a playground for testing and demonstrating these features using Storybook. | _React_, _Storybook_, _Nancy.js_, _Component Library_                                                                                               |
| [TypeScript Monorepo Boilerplate](https://github.com/nanlabs/ts-monorepo-boilerplate)  | A boilerplate for creating TypeScript monorepo projects using Turborepo, with support for NPM workspaces, Changesets, and a complete development setup.                                                    | _TypeScript_, _Turborepo_, _Monorepo_, _Boilerplate_, _React_, _NPM Workspaces_, _Changesets_, _ESLint_, _Prettier_, _Jest_, _Nest.js_, _Storybook_ |

## Node Packages

| Name                                                                                       | Description                                                                                                                                                      | Keywords                                                              |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [@nanlabs/eslint-config](https://www.npmjs.com/package/@nanlabs/eslint-config)             | A shared ESLint configuration to enforce consistent coding standards across JavaScript projects.                                                                 | _ESLint_, _Code Style_, _JavaScript_                                  |
| [@nanlabs/eslint-config-next](https://www.npmjs.com/package/@nanlabs/eslint-config-next)   | An ESLint configuration designed for Next.js projects, ensuring adherence to best practices and consistent coding standards.                                     | _ESLint_, _Next.js_, _TypeScript_, _Code Style_                       |
| [@nanlabs/eslint-config-react](https://www.npmjs.com/package/@nanlabs/eslint-config-react) | An ESLint configuration optimized for React projects, promoting best practices and consistent code style.                                                        | _ESLint_, _React_, _TypeScript_, _Code Style_                         |
| [@nanlabs/eslint-config-ts](https://www.npmjs.com/package/@nanlabs/eslint-config-ts)       | An ESLint configuration tailored for TypeScript projects, ensuring consistent and error-free TypeScript code.                                                    | _ESLint_, _TypeScript_, _Code Style_                                  |
| [@nanlabs/fp](https://www.npmjs.com/package/@nanlabs/fp)                                   | A TypeScript library offering functional programming utilities, including type guards, error handling, and other tools to write cleaner, more maintainable code. | _Functional Programming_, _TypeScript_, _Utilities_, _Error Handling_ |
| [@nanlabs/react-hooks](https://www.npmjs.com/package/@nanlabs/react-hooks)                 | A collection of reusable React hooks designed to simplify state management, side effects, and other common patterns in React applications.                       | _React_, _Hooks_, _Custom Hooks_, _State Management_                  |
| [@nanlabs/react-thirdparty](https://www.npmjs.com/package/@nanlabs/react-thirdparty)       | A React library offering components that integrate with third-party services like Google ReCaptcha, enabling seamless external integrations.                     | _React_, _Components_, _Third-Party Integrations_, _Google ReCaptcha_ |
| [@nanlabs/react-ui](https://www.npmjs.com/package/@nanlabs/react-ui)                       | A comprehensive library of React components designed to accelerate UI development with a consistent design system.                                               | _React_, _Components_, _UI_, _Design System_, _Reusable_              |
| [@nanlabs/thirdparty](https://www.npmjs.com/package/@nanlabs/thirdparty)                   | A utility library providing tools for integrating third-party services into web applications, including support for APIs like Google ReCaptcha.                  | _Third-Party Tools_, _Integrations_, _Web Development_                |

## Guides, Tutorials and Best Practices

| Name                                                                                                                                                                  | Description                                                                                                                                                       | Keywords                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Comparative Analysis between styled-components and Tailwind CSS](https://github.com/nanlabs/frontend-reference/tree/main/examples/styled-components-vs-tailwindcss/) | An article presenting a comparative analysis of styled-components and Tailwind CSS, focusing on practical implementations of a UI challenge using both libraries. | _CSS_, _styled-components_, _Tailwind CSS_, _UI Challenge_ |
| [Navigator Clipboard API Integration Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/navigator-clipboard-api-integration)                     | A detailed guide to integrating the Navigator Clipboard API into web applications for seamless content sharing and enhanced user experience.                      | _Clipboard API_, _Integration_, _User Experience_          |
| [React Router Types Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-router-router-types)                                                | A guide comparing BrowserRouter, HashRouter, and MemoryRouter with practical React Router usage snippets and deployment/testing caveats.                          | _React_, _React Router_, _Routing_                         |
| [React Security Best Practices Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-security-best-practices)                                 | A checklist providing React security best practices to identify and address security issues, with guidance on automating security testing.                        | _React_, _Security_, _Best Practices_, _Automated Testing_ |
| [Supercharge Your Website with Core Web Vitals](https://github.com/nanlabs/frontend-reference/tree/main/examples/seo-and-core-web-vitals)                             | A guide to optimizing website performance and SEO using Core Web Vitals, with practical tips and tools for delivering exceptional user experiences.               | _Core Web Vitals_, _SEO_, _Performance_, _User Experience_ |
| [The Ultimate React State Management Framework](https://github.com/nanlabs/frontend-reference/tree/main/examples/the-ultimate-react-state-management-framework)       | An article presenting a step-by-step framework for making informed decisions in React state management, ensuring robust and maintainable applications.            | _React_, _State Management_, _Framework_, _Best Practices_ |

## Examples

### Frontend

#### Website Optimization and Performance

| Name                                                                                                                                      | Description                                                                                                                                         | Keywords                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Supercharge Your Website with Core Web Vitals](https://github.com/nanlabs/frontend-reference/tree/main/examples/seo-and-core-web-vitals) | A guide to optimizing website performance and SEO using Core Web Vitals, with practical tips and tools for delivering exceptional user experiences. | _Core Web Vitals_, _SEO_, _Performance_, _User Experience_ |

#### React State Management

| Name                                                                                                                                                            | Description                                                                                                                                            | Keywords                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [AgileTs](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-agilets/)                                           | An example showcasing the use of AgileTs for scalable and maintainable state management in React applications.                                         | _React_, _AgileTs_, _State Management_                     |
| [Akita](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-akita/)                                             | An example illustrating the use of Akita for state management in React applications.                                                                   | _React_, _Akita_, _State Management_                       |
| [Context](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-context/)                                            | An example showcasing the use of React Context to share data between components efficiently.                                                           | _React_, _Context API_, _State Management_                 |
| [Effector](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-effector/)                                       | An example showcasing the use of Effector for reactive state management in React applications.                                                         | _React_, _Effector_, _State Management_                    |
| [Global State](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-global-state/)                                  | An example illustrating how to implement a global state using React Hooks for centralized state management.                                            | _React_, _Global State_, _State Management_                |
| [Hookstate](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-hookstate/)                                        | An example demonstrating the use of Hookstate for efficient and scalable state management in React applications.                                       | _React_, _Hookstate_, _State Management_                   |
| [Jotai](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-jotai/)                                               | An example illustrating the use of Jotai for atomic state management in React applications.                                                            | _React_, _Jotai_, _State Management_                       |
| [MobX](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-mobx/)                                          | An example demonstrating the use of MobX for bidirectional state management in React applications.                                                     | _React_, _MobX_, _State Management_                        |
| [MobX State Tree](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-mobx-state-tree/)                    | An example illustrating the use of MobX State Tree for bidirectional state management in React applications.                                           | _React_, _MobX State Tree_, _State Management_             |
| [NextJS with SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/nextjs-with-swr-example)                                                     | An example demonstrating the use of SWR with NextJS for efficient data fetching and mutation.                                                          | _NextJS_, _SWR_, _React_, _Data Fetching_                  |
| [Prop Drilling](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-prop-drilling/)                                | An example demonstrating how to pass data from a parent component to a child component using props in React.                                           | _React_, _Props_, _State Management_                       |
| [React Easy State](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-easy-state/)                        | An example demonstrating the use of React Easy State for bidirectional state management in React applications.                                         | _React_, _React Easy State_, _State Management_            |
| [React Query](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/api-react-query/)                                      | An example demonstrating the use of React Query for efficient data fetching and caching in React applications.                                         | _React_, _React Query_, _Data Fetching_                    |
| [Recoil](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/atomic-recoil/)                                             | An example demonstrating the use of Recoil for efficient state management in React applications.                                                       | _React_, _Recoil_, _State Management_                      |
| [Redux Toolkit](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-redux-toolkit/)                       | An example demonstrating the use of Redux Toolkit for unidirectional state management in React applications.                                           | _React_, _Redux Toolkit_, _State Management_               |
| [Rematch](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-rematch/)                                   | An example showcasing the use of Rematch for unidirectional state management in React applications.                                                    | _React_, _Rematch_, _State Management_                     |
| [Rxjs](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-rxjs/)                                               | An example demonstrating the use of Rxjs for reactive programming and state management in React applications.                                          | _React_, _Rxjs_, _Reactive Programming_                    |
| [Storeon](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/reactive-storeon/)                                         | An example showcasing the use of Storeon for lightweight state management in React applications.                                                       | _React_, _Storeon_, _State Management_                     |
| [SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/api-swr/)                                                      | An example showcasing the use of SWR for efficient data fetching and caching in React applications.                                                    | _React_, _SWR_, _Data Fetching_                            |
| [Teaful](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/hooks-teaful/)                                              | An example showcasing the use of Teaful for lightweight and simple state management in React applications.                                             | _React_, _Teaful_, _State Management_                      |
| [The Ultimate React State Management Framework](https://github.com/nanlabs/frontend-reference/tree/main/examples/the-ultimate-react-state-management-framework) | An article presenting a step-by-step framework for making informed decisions in React state management, ensuring robust and maintainable applications. | _React_, _State Management_, _Framework_, _Best Practices_ |
| [Unistore](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-unistore/)                                 | An example illustrating the use of Unistore for unidirectional state management in React applications.                                                 | _React_, _Unistore_, _State Management_                    |
| [Valtio](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/bidirectional-valtio/)                                      | An example showcasing the use of Valtio for bidirectional state management in React applications.                                                      | _React_, _Valtio_, _State Management_                      |
| [XState](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/fsm-xstate/)                                                | An example illustrating the use of XState for managing state with finite state machines in React applications.                                         | _React_, _XState_, _State Management_                      |
| [Zustand](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management/examples/unidirectional-zustand/)                                   | An example illustrating the use of Zustand for unidirectional state management in React applications.                                                  | _React_, _Zustand_, _State Management_                     |

#### React Router

| Name                                                                                                                   | Description                                                                                                                              | Keywords                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [React Router Types Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-router-router-types) | A guide comparing BrowserRouter, HashRouter, and MemoryRouter with practical React Router usage snippets and deployment/testing caveats. | _React_, _React Router_, _Routing_       |

#### Microfrontend

| Name                                                                                                                                                                                 | Description                                                                                                                             | Keywords                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [Microfrontend with Shared React Router and React Application](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-shell-react-app-shared-routing/) | An example demonstrating a microfrontend project with shared React Router in a container application and independent React application. | _React_, _Microfrontend_, _Shared Router_, _Integration_        |
| [Microfrontend with Shared React Router and React Components](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-app-react-components/)            | An example showcasing a microfrontend project with shared React Router and React components for seamless integration.                   | _React_, _Microfrontend_, _Shared Router_, _Integration_        |
| [Microfrontend with Shared React Router and Vue Application](https://github.com/nanlabs/frontend-reference/tree/main/examples/microfrontend-react-shell-react-vue-app/)              | An example showcasing a microfrontend project with shared React Router in a container application and independent Vue application.      | _React_, _Vue_, _Microfrontend_, _Shared Router_, _Integration_ |

#### Styling and CSS

| Name                                                                                                                                                                  | Description                                                                                                                                                       | Keywords                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [Comparative Analysis between styled-components and Tailwind CSS](https://github.com/nanlabs/frontend-reference/tree/main/examples/styled-components-vs-tailwindcss/) | An article presenting a comparative analysis of styled-components and Tailwind CSS, focusing on practical implementations of a UI challenge using both libraries. | _CSS_, _styled-components_, _Tailwind CSS_, _UI Challenge_ |

#### Virtual Dom

| Name                                                                                                                                                           | Description                                                                                                          | Keywords                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [Proof of Concept: Million, The Virtual DOM Replacement for React.](https://github.com/nanlabs/frontend-reference/tree/main/examples/million-poc-performance/) | A proof of concept showcasing Million as a virtual DOM replacement for React, with comparative performance analysis. | _React_, _Million_, _Virtual DOM_, _Performance_ |

#### Security Best Practices

| Name                                                                                                                                  | Description                                                                                                                                | Keywords                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [React Security Best Practices Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-security-best-practices) | A checklist providing React security best practices to identify and address security issues, with guidance on automating security testing. | _React_, _Security_, _Best Practices_, _Automated Testing_ |

#### NextJs

| Name                                                                                                        | Description                                                                                   | Keywords                                  |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [NextJS with SWR](https://github.com/nanlabs/frontend-reference/tree/main/examples/nextjs-with-swr-example) | An example demonstrating the use of SWR with NextJS for efficient data fetching and mutation. | _NextJS_, _SWR_, _React_, _Data Fetching_ |

#### React Native

##### Expo

| Name                                                                                                                                                             | Description                                                                                                           | Keywords                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [React Native with expo router](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-native-expo-router/)                                      | An example demonstrating the use of expo router for efficient navigation in React Native applications.                | _React Native_, _Expo_, _Navigation_    |
| [React Native with expo router and shared routes](https://github.com/nanlabs/frontend-reference/tree/main/examples/react-native-expo-router-with-shared-routes/) | An example showcasing the use of expo router with shared routes for seamless navigation in React Native applications. | _React Native_, _Expo_, _Shared Routes_ |

#### Clipboard Integration

| Name                                                                                                                                              | Description                                                                                                                                  | Keywords                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Navigator Clipboard API Integration Guide](https://github.com/nanlabs/frontend-reference/tree/main/examples/navigator-clipboard-api-integration) | A detailed guide to integrating the Navigator Clipboard API into web applications for seamless content sharing and enhanced user experience. | _Clipboard API_, _Integration_, _User Experience_ |

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
