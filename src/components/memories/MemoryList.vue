<template>
    <ion-list>
        <Memory-List-Item
            v-for="memory in memories" :key="memory.id" 
            :memory="memory" />
    </ion-list>
</template>

<script>
    import { IonList } from '@ionic/vue';
    import MemoryListItem from '@/components/memories/MemoryListItem';
    export default {
        components: {
            IonList,
            MemoryListItem
        },
        props: {
            memories: Array
            }
        }
</script>

<style scoped>

</style>