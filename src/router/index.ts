import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
//Routes
import login from '@/views/login/routes/index'; //Rota de login
import dashboard from '@/views/dashboard/routes/index'; //Rota do dashboard
import forgotPassword from '@/views/forgot_password/routes/index';
import recoveryPassword from '@/views/recovery_password/routes/index';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  ...login,
  ...dashboard,
  ...forgotPassword,
  ...recoveryPassword
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // page scroll to top for all route navigations
    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {

  const store = localStorage;
  const currentUrl = to.name;
  let tokenAuth;

  if (store.getItem('@beerVueAdmintoken') !== undefined && store.getItem('@beerVueAdmintoken') !== null) {
    tokenAuth = store.getItem('@beerVueAdmintoken')
  }

  const require = to.matched.some(record => record.meta.requiresAuth),
    requireNot = to.matched.some(record => record.meta.requiresAuthNot);

  if (require && !tokenAuth) next({ name: 'login' })
  else if (requireNot && tokenAuth) next({ name: 'dashboard' })

  else next()
})


export default router;
