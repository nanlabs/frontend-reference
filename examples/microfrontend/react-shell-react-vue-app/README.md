# MICROFRONTEND - SHARED ROUTER

## DEVELOPMENT

- go to the container folder and run `npm run dev`
- go to the react-app folder and run `npm run preview`
- go to the vue-app folder and run `npm run preview`

To view the changes you made while working as a microfrontend, you will need to rebuild "react-app" (or "vue-app"). To restart the app, you can stop it and then run the command `npm run restart`. Container app will be restarted just using `npm run dev` command.

If you are working on a standalone application, it is recommended to run the command `npm run dev` for all applications.

## BUILD

- go to the container folder and run `npm run build`
- go to the react-app folder and run `npm run build`
- go to the vue-app folder and run `npm run build`

## ABOUT THE PROJECT

The idea of ​​this project is to show a microfrontend with a container made in react using webpack module federation and two independent applications made in react & vue with Vite and the module federation plugin (https://github.com/originjs/vite-plugin-federation).

The container manages the routing of the application using react-router-dom and zustand to handle the global store's state. The container renders the React-app at "/react" and the Vue-app at "/vue". The React app receives the state from the container and updates it, while the Vue app only receives the state from the container to display the results.

![microfrontend diagram](./mfe-diagram.png)
