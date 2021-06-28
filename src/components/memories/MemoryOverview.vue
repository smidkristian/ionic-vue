<template>
    <div class="ion-text-center">
        <img :src="loadedMemory.image" alt="img.png">
        <h1>{{ loadedMemory.title }}</h1>
        <p>{{ loadedMemory.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            loadedMemory: Object
        }
    }
</script>

<style scoped>

</style>