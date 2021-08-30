import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'
import NotFound from '@/views/404.vue'
import { RouterProps } from '@/router/type'
import { Auth0 } from '@/auth'
import Users from '@/views/Users.vue'

const routes: Array<RouterProps> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    exact: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    exact: true,
    beforeEnter: Auth0.routeGuard,
  },
  {
    name: 'Users',
    path: '/users',
    component: Users,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
    show: false,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export { router, routes }
