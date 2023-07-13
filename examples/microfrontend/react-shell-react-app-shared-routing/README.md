# Microfrontend - Shared Router

## Introduction

This repository contains a microfrontend project that demonstrates the usage of a shared router in a container application made with React and an independent application made with React and Vite. The container application utilizes webpack module federation, while the individual application is built with Vite and the module federation plugin ([vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)).

The container is responsible for rendering the "react-app" application at the root path "/" and the FAQ page at "/faq". The "react-app" application, in turn, is responsible for rendering the About page at "/about". The container uses browser history, whereas the "react-app" uses memory history. Both applications need to update the browser history when the route changes.

React-app, in isolation mode, uses browser history.

![History Diagram](./history-diagram.png)

## Development

To start the development environment, follow these steps:

1. Navigate to the "container" folder and run the command `npm run dev`.
2. Navigate to the "react-app" folder and run the command `npm run preview`.

To see the changes made in "react-app" that is connected with a container or microfrontend, you need to rebuild it. To restart the app, stop it and then run the command `npm run restart`.

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
```

## About the Project

The main purpose of this project is to showcase the concept of microfrontends with a shared router. The container application, built with React and webpack module federation, serves as the entry point for the microfrontend architecture. It is responsible for rendering the "react-app" application at the root path and the FAQ page at "/faq".

The "react-app" application, built with React and Vite, renders the About page at "/about". The container and "react-app" use different history mechanisms: the container uses browser history, while "react-app" uses memory history. Both applications need to update the browser history when the route changes.

Feel free to explore the code and make any necessary modifications to suit your requirements.

Please note that this project may require additional setup and configuration steps depending on your development environment.
