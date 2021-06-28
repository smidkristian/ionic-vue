<template>
    <base-layout :pageTitle="loadedMemory ? loadedMemory.title : 'Loading'" pageDefaultBackLink="/memories">
        <h2 v-if="!loadedMemory">Could not find any memory.</h2>
        <Memory-Overview :loadedMemory="loadedMemory" />
    </base-layout>
</template>
<script>
    import MemoryOverview from '@/components/memories/MemoryOverview'
export default {
    components: {
        MemoryOverview
    },
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