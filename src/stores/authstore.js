import { defineStore } from 'pinia';
import api from '@/api';

export const useAuthStore = defineStore('auth',{
    state(){
        return{
            token: localStorage.getItem('token') || null,
        };
    },
    getters:{
        isAuth: (state) => !!state.token,
    },
    actions:{
       async login(data) {
            const response = await api.post('/login', {
                email: data.email,
                password: data.password
            });
            localStorage.setItem('token', response.data.token);
            this.token = response.data.token;

        },
        async register(data) {
             const response = await api.post('/register', {
                 name: data.name,
                 email: data.email,
                 password: data.password,
                 "password_confirmation": data.confirmationPassword2,
                });
                localStorage.setItem('token', response.data.token);
                this.token = response.data.token;
        },
        logout() {
            this.token = null;
            localStorage.removeItem('token');
        },
    }
});
