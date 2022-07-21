import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/matterJs.vue';
import MenueView from '../views/MenueView.vue';
import MobileHome from '../views/MobileHome.component.vue';

const routes = [
  {
    path: '/',
    name: 'intro',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/main-menue',
    name: 'mainMenue',
    component: MenueView,
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: MobileHome,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
