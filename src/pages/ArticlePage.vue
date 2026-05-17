<template>
    <h2>
        {{ article.title }}
    </h2>
    <p>
       {{ article.content }} 
    </p>
    <img :src="article.image" alt="" v-if="article.image">
</template>

<script>
import api from "@/api";
export default {
    data() {
        return {
            articleId: this.$route.params.id,
            article: {}
        }
    },
    mounted() {
        this.loadArticle();
    },
    methods: {
        async loadArticle() {
            const response = await api.get("/articles/" + this.articleId);
            this.article = response.data;
        }
    },
    watch: {
        "$route.params.id": function (newId) {
            this.articleId = newId;
            this.loadArticle();
        }
    }
}
</script>