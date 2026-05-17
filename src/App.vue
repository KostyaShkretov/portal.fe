<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{ name: 'main' }" class="navbar-brand">
        Portal
      </router-link>
      <ul class="nav">
        <li class="nav-item" v-if="isAuth">
          <a class="nav-link" href="javascript:" @click="logout">
            Выход
          </a>
        </li>
        <template v-else>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">
              Вход
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">
              Регистрация
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authstore';
export default {
  computed: {
    authStore() {
      return useAuthStore();
    },
    isAuth() {
      return this.authStore.isAuth;
    }
  },
  methods: {
    logout(){
      this.authStore.logout();
      this.$router.push('/login');
    },
  },

}
</script>

<style scoped></style>
