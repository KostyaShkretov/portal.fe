<template>
    <div class="row py-3">
        <div class="col">
            <h1 class="text-center text-success">Регистрация</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-4 offset-4">
            <div class="alert alert-danger mb-3" v-if="error">
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Иван" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" placeholder="******" v-model="password">
            </div>
            <div class="mb-3">
                <label for="password_confirm" class="form-label">Повторите пароль</label>
                <input type="password" class="form-control" id="password_confirm" placeholder="******"
                    v-model="confirmationPassword2">
            </div>
            <button class="btn btn-primary" @click="onSubmit">Зарегистрироваться</button>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/authstore';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmationPassword2: '',
            error: ''
        }
    },
    methods: {
        async onSubmit() {
            this.error = '';
            try {
                await useAuthStore().register({
                    name: this.name,
                    email: this.email,
                    password: this.password, 
                    confirmationPassword2: this.confirmationPassword2,
                });

                this.name = '';
                this.email = '';
                this.password = '';
                this.confirmationPassword2 = '';
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