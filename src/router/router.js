import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home";

const routes = [
  {
    path: '/',
    component: Home
  },
]

const router = createRouter({
  mode: 'history',
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
export default router;