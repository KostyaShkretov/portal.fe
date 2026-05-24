<template>
    <div class="row mt-4">
        <div class="col">
            <h1>Добавить статью</h1>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label for="title" class="form-label">Заголовок</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label"> Текст статьи </label>
                <textarea class="form-control" id="content" rows="5"></textarea>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label"> Ссылка на картинку</label>
                <input type="text" class="form-control" id="image">
            </div>
            <button @click="" class="btn btn-success">Создать статью</button>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            content: '',
            image: '',
        }
    },
    methods: {
        
    },
}
</script>

<style scoped></style>