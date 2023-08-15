const topics = [
  {
    name: 'React',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'Why React Hooks?',
        id: 'why-react-hooks',
        description:
          "In this post you'll learn why the React team dedicated so many resources to creating and releasing React Hooks. Along the way, you'll also get a soft introduction to the main aspects of the React Hooks API.",
      },
      {
        name: 'Introduction to props in React',
        id: 'react-props',
        description: "In this post you'll learn how to properly use props to pass data to components in React.",
      },
      {
        name: "Understanding React's useRef Hook",
        id: 'useref',
        description:
          "In this post you'll learn how and why you can use React's useRef Hook to persist values across renders without causing a re-render.",
      },
      {
        name: 'JSX Tips and Gotchas for Beginners',
        id: 'jsx',
        description: "In this post you'll learn all the tips and gotchas associated with JSX.",
      },
      {
        name: 'Guide to React Context',
        id: 'react-context',
        description: "In this post you'll learn why, how, when, and when not to utilize React's Context API.",
      },
    ],
  },
  {
    name: 'TypeScript',
    id: 'typescript',
    description: 'Typed JavaScript at Any Scale.',
    resources: [
      {
        name: 'Why TypeScript?',
        id: 'why-typescript',
        description:
          'TypeScript might be the hottest, most popular language on the web, but why might you want to use it?',
      },
      {
        name: 'Installing and Configuring TypeScript',
        id: 'typescript-advanced-configuration',
        description:
          'TypeScript comes with a lot of configuration options. This post explains how some of the more common options work.',
      },
      {
        name: 'Getting Started with TypeScript',
        id: 'typescript-getting-started',
        description:
          "In this up-to-date guide, we'll learn about all of the types you can use with TypeScript, as well as how to annotate values and variables.",
      },
      {
        name: 'Guide to Functions in TypeScript',
        id: 'typescript-functions',
        description: "In this up-to-date guide, we'll discuss all the ways you can write a function in TypeScript.",
      },
      {
        name: 'Guide to Classes in TypeScript',
        id: 'typescript-classes',
        description: 'TypeScript builds upon the class syntax defined by JavaScript, making it more powerful and safe.',
      },
    ],
  },
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for React',
    resources: [
      {
        name: 'Code Splitting with React, React.lazy, and React Router',
        id: 'react-router-code-splitting',
        description:
          "In this post you'll learn how to increase the performance of your React application by adding code splitting with React.lazy and React Router.",
      },
      {
        name: 'The Guide to Nested routes with React Router',
        id: 'react-router-nested-routes',
        description:
          "In this up-to-date guide, you'll learn two patterns for creating nested routes with React Router.",
      },
      {
        name: 'How to Programmatically Navigate with React Router',
        id: 'react-router-programmatically-navigate',
        description:
          "In this up-to-date guide, you'll learn the two ways to programmatically navigate with React Router - the Navigate component and the useNavigate Hook.",
      },
      {
        name: 'Protected Routes and Authentication with React Router',
        id: 'react-router-protected-routes-authentication',
        description:
          "In this up-to-date guide, you'll learn a pattern for adding protected routes to your React Router application.",
      },
      {
        name: 'Server Rendering with React Router',
        id: 'react-router-server-rendering',
        description:
          "In this comprehensive, up-to-date guide, you'll learn how, why, and when to add server rendering to a React and React Router application.",
      },
    ],
  },
];

export function getResource({ resourceId, topicId }) {
  return topics.find(({ id }) => id === topicId).resources.find(({ id }) => id === resourceId);
}

export function getTopic(topicId) {
  return topics.find(({ id }) => id === topicId);
}

export function getTopics() {
  return topics;
}
