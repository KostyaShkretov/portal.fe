import ArticlePage from '@/pages/ArticlePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import MainPage from '@/pages/MainPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ArticlesPage from '@/pages/admin/ArticlesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authstore';
import CreateArticlePage from '@/pages/admin/createArticlePage.vue'
import EditArticlePage from '@/pages/admin/editArticlePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/articles/:id',
      name: 'article',
      component: ArticlePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/admin/articles',
      name: 'admin_articles',
      component: ArticlesPage,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/admin/articles/create',
      name: 'admin_articles_create',
      component: CreateArticlePage,
      meta: {
        authOnly: true
      }
    },
    {
      path: '/admin/articles/:id',
      name: 'admin_articles_edit',
      component: EditArticlePage,
      meta: {
        authOnly: true
      }
    }
  ],
});

router.beforeEach(function (to) {

  const authstore = useAuthStore();
  if (to.meta.guestOnly) {
    if (authstore.isAuth) {
      return {
        name: 'main'
      }
    }
  }

  if (to.meta.authOnly) {
    if (!authstore.isAuth) {
      return {
        name: 'login'
      }
    }
  }
});

export default router
