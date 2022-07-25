import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeComp/matterJs.vue';
import MenueView from '../views/MenueView.vue';
import MobileHome from '../views/MobileHome.component.vue';
import ToolsView from '../views/ToolView.vue';

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
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/main-menu',
    name: 'mainMenu',
    component: MenueView,
  },
  {
    path: '/mobile',
    name: 'mobile',
    component: MobileHome,
  },
  {
    path: '/tools',
    name: 'tools',
    component: ToolsView,
    children: [
      {
        path: 'threed-transform',
        name: '3d-transform',
        component: () =>
          // eslint-disable-next-line implicit-arrow-linebreak
          import('../components/tools/threedTransform.component.vue'),
      },
      {
        path: 'drop-shadow',
        name: 'drop-shadow',
        component: () => import('../components/tools/dropShadow.component.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
