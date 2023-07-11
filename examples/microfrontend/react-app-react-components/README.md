# MICROFRONTEND - SHARED ROUTER

## DEVELOPMENT

- go to the react-app folder and run `npm run dev`
- go to the react-components folder and run `npm run preview`

Working as a microfrontend you'll need to rebuild the app To see the changes you made. To restart the app, you can stop it and then run the command `npm run restart`.

If you are working on a standalone application, it is recommended to run the command `npm run dev`.

## BUILD

- go to the container folder and run `npm run build`
- go to the react-app folder and run `npm run build`

## ABOUT THE PROJECT

The idea of ​​this project is to show a microfrontend which has a react application ("react-app") that is consuming components from "react-components".
the main app is using zustand to manage the global state. React-components is using storybook to preview the components and then export them as a library through vite-plugin-federation ([vite-plugin-federation](https://github.com/originjs/vite-plugin-federation)). The container is using the same plugin to consume the components from react-components and then render them in the main app.

![microfrontend diagram](./mfe-diagram.png)
