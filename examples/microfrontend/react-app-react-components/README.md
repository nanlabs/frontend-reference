# Microfrontend - Shared Router

## Introduction

This repository contains a microfrontend project that demonstrates the usage of a shared router in a React application. The project consists of two main parts: "react-app" and "react-components". The "react-app" is a standalone React application that consumes components from the "react-components" library.

The project utilizes various technologies such as Zustand for state management in the main app, Storybook for component previewing in "react-components", and Vite Plugin Federation for component sharing between the container and the main app.

## Development

To start the development environment, follow these steps:

1. Navigate to the "react-app" folder and run the command `npm run dev`.
2. Navigate to the "react-components" folder and run the command `npm run preview`.

When working with microfrontends, it is necessary to rebuild the app to see the changes you have made. To restart the app, stop it and then execute the command `npm run restart`.

If you are working on a standalone application, it is recommended to use the command `npm run dev`.

## Build

To build the project, follow these steps:

1. Navigate to the "container" folder and run the command `npm run build`.
2. Navigate to the "react-app" folder and run the command `npm run build`.

## Project Structure

The project follows the following structure:

```txt
- container
  - ... (container-specific files)

- react-app
  - ... (React app-specific files)

- react-components
  - ... (React components-specific files)
```

## About the Project

The main purpose of this project is to showcase the concept of microfrontends using a shared router. The "react-app" is a standalone React application that leverages the components provided by the "react-components" library.

The "react-components" library uses Storybook to preview the individual components and exports them as a library using Vite Plugin Federation ([vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)). On the other hand, the container uses the same plugin to consume the components from "react-components" and render them within the main app.

For a visual representation of the microfrontend architecture, refer to the diagram below:

![Microfrontend Diagram](./mfe-diagram.png)

Feel free to explore the code and make any necessary modifications to suit your requirements.

Please note that this project may require additional setup and configuration steps depending on your development environment.
