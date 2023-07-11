# MICROFRONTEND - SHARED ROUTER

## DEVELOPMENT

- go to the container folder and run `npm run dev`
- go to the react-app folder and run `npm run preview`

To see the changes made in "react-app" that is connected with a container or mfe, you need to rebuild it. To restart the app, you can stop it and then run the command `npm run restart`.

If you are working on a standalone application, it is recommended to run the command `npm run dev`.

## BUILD

- go to the container folder and run `npm run build`
- go to the react-app folder and run `npm run build`

## ABOUT THE PROJECT

The idea of ​​this project is to show a microfrontend with a container made in react using webpack module federation and an independent application made in react with Vite and the module federation plugin (https://github.com/originjs/vite-plugin-federation).

The container is responsible for rendering the "react-app" application at the root path "/" and the FAQ page at "/faq". The "react-app" application, in turn, is responsible for rendering the About page at "/about". Container is using browser history and react-app is using memory history. Both apps have to update the browser history when the route changes.

React-app in isolation mode is using browser history.

![history diagram](./history-diagram.png)



