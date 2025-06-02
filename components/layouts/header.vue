<template>
    <div style="background-color: white; padding: 10px; position: fixed; top: 0; width: 100%; z-index: 1;"
        class="pl-10 pr-10 d-flex align-center justify-center">
        <!-- <img src="/images/logo2.png" style="width: 80px; height: 80px;" class="mx-auto" /> -->
        <img src="/images/nice_logo.png" style="width: 100px; height: 100px;" class="mx-auto" />


        <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%);display: flex; gap: 20px;">

            <!-- <a href="#">About</a>
            <a href="#">Contract</a> -->
            <!-- <v-menu offset-y>
                <template v-slot:activator="{ props }">
                    <v-btn :text="currentLang" append-icon="mdi-chevron-down" v-bind="props" variant="outlined"
                        class="lang-btn" />
                </template>

                <v-list>
                    <v-list-item v-for="lang in langs" :key="lang" @click="currentLang = lang">
                        <v-list-item-title>{{ lang }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        </div>
    </div>
</template>

<script setup lang="ts">
/* #### Composables #### */

/* #### State #### */
const currentLang = ref('EN');
const langs = ['EN', 'TH'];
const languages = reactive([
    { title: 'ภาษาไทย', value: 'th' },
    { title: 'English (US)', value: 'en' },
]);

/* #### Methods #### */

/* #### Life Cycle Hooks #### */

</script>

<style scoped>
.lang-btn {
    box-shadow:
        4px 4px 0px #006838,
        /* เงาชั้นแรก สีเขียวเข้ม */
        8px 8px 0px #00FF88;
    /* เงาชั้นที่สอง สีเขียวนีออน */
    /* border-radius: 20px; */
    /* ปรับตามดีไซน์ */
    font-weight: bold;
}

a {
    box-shadow: inset 0 0 0 0 #006838;
    color: #006838;
    padding: 0 .25rem;
    margin: 0 -.25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
}

a:hover {
    color: #fff;
    box-shadow: inset 200px 0 0 0 #006838;
    ;
}

/* Presentational styles */
a {
    color: #006838;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
}

body {
    display: grid;
    height: 100vh;
    place-items: center;
}
</style>