import { createRouter, createWebHistory } from 'vue-router';
import Home from '~/routes/Home';
import Detail from '~/routes/Detail';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Detail,
    },
  ],
});
