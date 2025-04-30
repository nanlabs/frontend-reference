export const APP_ROUTES = {
	HOME: {
		path: "/",
		name: "Home",
		isNavbarItem: false,
		isProtected: false,
	},
	MOVIES: {
		path: "/movies",
		name: "Movies",
		isNavbarItem: true,
		isProtected: false,
	},
	MOVIE_DETAILS: {
		path: "/movies",
		name: "Movie Details",
		isNavbarItem: false,
		isProtected: false,
	},
	SCENES: {
		path: "/scenes",
		isNavbarItem: true,
		name: "Scenes",
		isProtected: true,
	},
	SCENE_DETAILS: {
		path: "/scenes",
		isNavbarItem: false,
		name: "Scenes Details",
		isProtected: true,
	},
	LOGIN: {
		path: "/login",
		name: "Login",
		isNavbarItem: false,
		isProtected: false,
	},
	SIGNUP: {
		path: "/signup",
		name: "Sign Up",
		isNavbarItem: true,
		isProtected: false,
	},
};
