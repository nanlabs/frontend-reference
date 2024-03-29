# The Ultimate React State Management Framework 🚀

<picture>
  <source media="(prefers-color-scheme: dark)" alt="React State Management" align="right" width="165px" srcset="./images/logo.webp"/>
  <img alt="React State Management" align="left" width="165px" src="./images/logo.webp"/>
</picture>

Dive into the definitive guide for selecting technologies for your React apps. This step-by-step framework will lead you to make informed decisions, ensuring your app is both robust and maintainable. Let's enhance your tech stack! ✨🛠️

Most of the time you don't need a state management library. React's built-in state management and context API are powerful enough for most use cases. However, as your app grows, you might need a more sophisticated solution. This guide will help you make the right choice!

## Step 1: Solidify Your Fundamentals 🌟

Before you jump into the deep end, make sure you have a strong grasp of React's core concepts.

- **Basic Hooks**: Begin with `useState` and `useEffect` to handle state and lifecycle features.
- **Advanced Common Hooks**: As complexity increases, `useContext`, `useReducer`, and `useMemo` become your best friends for optimized performance.
- **Complex Logic Management**: For those intricate logic flows, consider using [XState](https://xstate.js.org/) to manage statecharts and state machines without the overhead of larger state management libraries.

## Step 2: Navigate Your Routing 🧭

A solid routing foundation is essential for a seamless user experience.

- **Frameworks with Built-in Routing**: If you're using Next.js or Remix, you're already set with their out-of-the-box routing solutions.
- **Standalone Routing**: Not using a framework with built-in routing? No worries! Give [React Router](https://reactrouter.com/) or [Tan Stack Router](https://tanstack.com/router) a go, and find out which one sails smoothly with your project.

## Step 3: Streamline API and Server State Interaction 📡

Efficient data management is key for responsive applications.

- **Fetch API**: Embrace the modern Fetch API for your HTTP requests. It's widely supported and doesn't require an additional package like Axios.
- **Full-Stack TypeScript Projects**: If you're working with a TypeScript back end or using Next.js, [tRPC](https://trpc.io/) allows you to create end-to-end typesafe APIs without the need to define schemas or generate types.
- **GraphQL**: Consider Apollo Client for a powerful and comprehensive approach to manage data with GraphQL.
- **Data Fetching & Server Sync**: For advanced data fetching and server state synchronization, [Tan Stack Query](https://tanstack.com/query/latest) provides a robust solution that handles caching, background updates, and more, outperforming traditional REST API patterns.

## Step 4: Component State - Keep It Local 🎛️

Local state management should be straightforward and component-focused. As mentioned earlier, React's built-in state management is often sufficient. However, if you need more, consider these options:

- **Simple State**: For simple state management, React's built-in `useState` and `useReducer` are your best bet.
- **FSM with XState**: For complex local states, especially those with multiple states or transitions, XState is your go-to for finite state machines.

## Step 5: Global State - The Big Picture 🌐

When local state management isn't enough, it's time to consider global state management. Here are some popular options:

- **Context API**: For simple global state management, the Context API is a great choice. It's built into React and doesn't require any additional libraries.
- **@hookstate**: For a simple, yet powerful, global state management solution, consider using [hookstate](https://hookstate.netlify.app/).
- **Alternatives**: You can also consider libraries like [react-hook-global-state](https://www.npmjs.com/package/react-hooks-global-state) and [teaful](https://www.npmjs.com/package/teaful)
- **FSM with XState**: You can also use [xstate](https://xstate.js.org/) for global state management. It's a great choice if you need to manage complex state machines globally in your app.

If you're building a large-scale application, you might need a more robust solution. In that case, consider to follow the recommendations in the next step to choose the right state management library for your project!

## Step 6: Application State - Choose Wisely 🗳️

Understanding the different paradigms of state management can empower you to pick the most suitable one for your project's needs.

### Reactive State Management

- **What is it?** Updates UI in real-time as the state changes.
- **Use Case Example**: A chat application that displays messages as they arrive.
- **Recommended Library**: [Akita](https://opensource.salesforce.com/akita/), for its excellent support for reactive patterns.
- **Alternatives**: [RxJS](https://rxjs.dev/).

### Atomic State Management

- **What is it?** Manages state as individual, independent units.
- **Use Case Example**: A to-do app where each task's state is managed separately.
- **Recommended Library**: [Jotai](https://github.com/pmndrs/jotai), for its minimalistic approach and excellent React integration.
- **Alternatives**: [Recoil](https://recoiljs.org/).

### Uni-directional State Management

- **What is it?** Enforces a single flow of data throughout the application.
- **Use Case Example**: A project management tool with complex data flow and strict state requirements.
- **Recommended Library**: [Zustand](https://github.com/pmndrs/zustand), for its simplicity and unopinionated approach to state management.
- **Alternatives**: [Redux Toolkit](https://redux-toolkit.js.org/).

### Bi-directional State Management

- **What is it?** Allows state to be updated from multiple places with changes reflected everywhere.
- **Use Case Example**: An art application where adjusting one tool's settings updates multiple features across the UI.
- **Recommended Library**: [MobX](https://mobx.js.org/README.html), for its automatic tracking of changes and updates.
- **Alternatives**: [Valtio](https://valtio.pmnd.rs/).

With this comprehensive understanding, you're now equipped to make informed decisions that will shape the robustness and reactivity of your application's state. Remember, the best choice is context-dependent; weigh your app's specific requirements against the strengths of each state management style.

## Final Thoughts: Stay Agile and Informed 🔄

As you build and scale your React applications, keep these guidelines close. The React ecosystem is dynamic, so be ready to adopt new tools, assess their fit for your project, and evolve your stack as needed. Most importantly, the right choice is the one that works for your unique scenario.

## Explore Our State Management Examples

Dive deeper into the React ecosystem with our comprehensive examples directory. We've meticulously curated a collection of practical examples showcasing the implementation and usage of all the libraries mentioned above—and more! Whether you're looking to understand the nuances of state management with Redux, explore the reactivity of MobX, or master the atomic updates of Jotai, our examples will provide you with the hands-on experience you need.

Browse through the directory to find the example that aligns with your learning path or project requirements. It's an invaluable resource for developers seeking to expand their skill set and apply best practices in real-world scenarios.

🔗 [Visit the Examples Directory](https://github.com/nanlabs/frontend-reference/tree/main/examples/state-management)

Happy building! 🏗️
