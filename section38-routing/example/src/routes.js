import User from "./components/user/User.vue"
import Home from "./components/home.vue"

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/user",
    component: User,
  },
]
