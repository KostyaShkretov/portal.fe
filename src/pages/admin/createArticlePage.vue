<template>
    <div class="row mt-4">
        <div class="col">
            <h1>Добавить статью</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="alert alert-danger mb-3" v-if="error">
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="title" class="form-label">Заголовок</label>
                <input v-model="title" type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label"> Текст статьи </label>
                <textarea v-model="content" class="form-control" id="content" rows="5"></textarea>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label"> Ссылка на картинку</label>
                <input v-model="image" type="text" class="form-control" id="image">
            </div>
            <button @click="createArticle" class="btn btn-success">Создать статью</button>
        </div>
    </div>
</template>

<script>
import api from "@/api";
export default {
    data() {
        return {
            title: '',
            content: '',
            image: '',
            error: '',
        }
    },
    methods: {
        async createArticle() {
            this.error = '';
            try {
                await api.post('/admin/articles', {
                    title: this.title,
                    content: this.content,
                    image: this.image,
                });
                this.$router.push({
                    name: 'admin_articles'
                })
            } catch (e) {
                if (e.status == '422') {
                    this.error = e.response.data.message;
                }
            }
        },
    },
}
</script>

<style scoped></style>