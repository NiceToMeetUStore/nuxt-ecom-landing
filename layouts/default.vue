<template>
    <div style="background-color: white; padding: 10px; position: fixed; top: 0; width: 100%; z-index: 1;"
        class="pl-10 pr-10 d-flex align-center justify-center">
        <!-- Logo ตรงกลาง -->
        <!-- <img src="/images/logo2.png" style="width: 80px; height: 80px;" class="mx-auto" /> -->
        <img src="/images/nice_logo.png" style="width: 100px; height: 100px;" class="mx-auto" />

        <!-- v-menu ด้านขวา (ใช้ absolute) -->
        <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%);">
            <v-menu offset-y>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" variant="outlined" class="lang-btn">
                        {{ currentLang }}
                        <v-icon size="18" class="ml-1">mdi-chevron-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="lang in langs" :key="lang" @click="currentLang = lang">
                        <v-list-item-title>{{ lang }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
    <template>
        <div class="text-center pa-10">
            <v-dialog v-model="dialog" max-width="400" persistent>

                <v-card style="border-radius: 15px;">
                    <template v-slot:title>
                        <div class="d-flex justify-center">
                            <img src="/images/nice_logo.png" style="width:90px;height:93px;" />
                        </div>
                    </template>
                    <template v-slot:text>
                        <v-card-text class="text-center font-weight-bold" style="color: #305E3F; font-size: larger;">
                            Are You Over 21?
                        </v-card-text>
                        <v-card-text class="text-center">
                            The products available on Nice To Meet U Store are intended for adults of 21+ only.
                        </v-card-text>
                        <v-card-text class="text-center">
                            By entering our website, you affirm that you are of legal smoking age in your jurisdiction
                            and you agree to be Age Verified.
                        </v-card-text>
                    </template>
                    <template v-slot:actions>
                        <div
                            style="display: flex; flex-direction: column; width: 100%; gap: 10px; margin: -20px 10px 20px 10px;">
                            <v-btn @click="dialog = false" base-color="white"
                                style="background-color: #305E3F; border-radius: 8px;" class="font-weight-bold">
                                YES, I AM 21+
                            </v-btn>

                            <v-btn @click="dialog = false" base-color="#305E3F"
                                style="background-color: #F5F5F5; border-radius: 8px;border-width: 1px;border-color: #305E3F;"
                                class="font-weight-bold">
                                NO, I'M UNDER 21
                            </v-btn>
                        </div>

                    </template>
                </v-card>
            </v-dialog>
        </div>
    </template>

</template>



<script setup lang="ts">
/* #### Composables #### */
const { $service } = useNuxtApp();
const route = useRoute();

// /* #### State #### */
const currentLang = ref('EN');
const dialog = ref<boolean>(true)
const langs = ['EN', 'TH'];
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
