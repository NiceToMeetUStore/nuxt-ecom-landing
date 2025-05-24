<template>
    <client-only>
        <v-app class="form-app">
            <!-- Content -->
            <slot />
            <!-- Language -->
            <v-container class="pl-5 pt-0 d-flex justify-center">
                <v-col cols="auto">
                    <!-- <v-select v-model="currentLocale" :variant="'plain'" :items="languages" item-title="title" item-value="value" -->
                    <v-select :variant="'plain'" :items="languages" item-title="title" item-value="value" return-value
                        class="select-lang" @update:model-value="setLocale($event)" />
                </v-col>
            </v-container>
        </v-app>

        <!-- Toast -->
        <!-- <ubh-toast
      v-model="toast.open"
      :message="toast.message"
      :type="toast.type"
      :open="toast.open"
      @close="toast.reset"
    /> -->

    </client-only>
</template>

<script setup lang="ts">
/* #### Composables #### */
// const { locale } = useI18n();
const { $service } = useNuxtApp();
// const toast = useToastStore();
// const globalStore = useGlobalStore();
// const service = $service as IService;
const route = useRoute();

// /* #### State #### */
// const currentLocale = ref(locale.value);
const languages = reactive([
    { title: 'ภาษาไทย', value: 'th' },
    { title: 'English (US)', value: 'en' },
]);

/* #### Methods #### */
const setLocale = (value: string): void => {
    //   locale.value = value as 'en' | 'th';
    //   globalStore.setLocale(locale.value);
};
</script>


<style>
.form-app {
    background: url("/public/bgpic.png") no-repeat center center;
    background-size: cover;
}
</style>