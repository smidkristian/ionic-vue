<template>
  <base-layout pageTitle='All my memories'>
    <template v-slot:actions-end>
        <ion-button router-link="/memory/add">
            <ion-icon slot="icon-only" :icon="add"></ion-icon>
        </ion-button>
    </template>
    <Memory-List :memories="memories" />
  </base-layout>
</template>

<script>
    import { IonButton, IonIcon } from '@ionic/vue'
    import { add } from 'ionicons/icons';
    import MemoryList from '@/components/memories/MemoryList';
export default {
    components: {
        IonButton,
        IonIcon,
        MemoryList
    },
    data() {
        return {
            add
        }
    },
    computed: {
        memories() {
            return this.$store.getters.memories;
        }
    }
}
</script>
