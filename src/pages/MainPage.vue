<template>
    <div class="row py-3">
        <div class="col">
            <h1 class="text-danger">Новости</h1>
        </div>
    </div>
    <div class="row">
        <div
            class="col-lg-3 col-md-4 col-sm-6 col-12 mb-2"
            v-for="article in articles"
            :key="article.id"
        >
            <ArticleCard :article="article" />
        </div>
    </div>
</template>

<script>
import api from '@/api';
import ArticleCard from '@/components/ArticleCard.vue';
export default {
    components: {
        ArticleCard
    },
    data() {
        return {
            articles: []
        }
    },
    mounted() {
        this.loadArticles();
    },
    methods: {
        async loadArticles() {
            const response = await api.get('/articles');
            this.articles = response.data;
        },
    }
}
</script>

<style scoped>
    
</style>