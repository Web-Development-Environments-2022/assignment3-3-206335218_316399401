import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId", 
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  //
  {
    path: "/user/favorites",
    name: "favorites",
    component: () => import("./pages/MyFavoriteRecipes"),
  },
  {
    path: "/user/family",
    name: "family",
    component: () => import("./pages/MyFamilyRecipes"),
  },
  {
    path: "/user/created",
    name: "recipe",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About"),
  },
  //
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
