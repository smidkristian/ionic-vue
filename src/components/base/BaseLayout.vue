<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <!-- <ion-icon name="chevron-back-outline"></ion-icon> -->
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end">
                    <slot name="actions-end" />
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot></slot>
        </ion-content>
    </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, 
            IonContent, IonButtons, IonBackButton } 
from '@ionic/vue';

export default {
    props: [
        'pageTitle',
        'pageDefaultBackLink'
    ],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButtons,
        IonBackButton
    }
}
</script>