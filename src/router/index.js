import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages/authentication/login.vue'),
    meta: { title: 'Login  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management' }
  },
];

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CRMS - Advanced Bootstrap 5 Admin Template for Customer Management';
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Continue with the navigation
  next();
});
