<template>
    <div class="row py-3">
        <div class="col">
            <h1 class="text-center text-primary">Вход</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-4 offset-4">
            <div class="alert alert-danger mb-3" v-if="error">
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" placeholder="******" v-model="password">
            </div>
            <button class="btn btn-primary" @click="onSubmit">Войти</button>
        </div>
    </div>
</template>

<script> 
import { useAuthStore } from '@/stores/authstore';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async onSubmit() {
            this.error = '';
            try {
                await useAuthStore().login({
                    email: this.email,
                    password: this.password
                });

                this.email = '';
                this.password = '';
                this.$router.push('/');
            } catch (e) {
                if (e.status == '422') {
                    this.error = e.response.data.message;
                }
            }
        }
    }
}
</script>