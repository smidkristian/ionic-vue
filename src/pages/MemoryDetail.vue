<template>
    <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading'" pageDefaultBackLink="/memories">
        <h2 v-if="!loadedMemory">Could not find any memory.</h2>
        <h2 v-else>Loaded.</h2>
    </base-layout>
</template>
<script>
export default {
    data() {
        return {
            memoryId: this.$route.params.id
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.getMemoryById(this.memoryId);
        }
    }
}
</script>