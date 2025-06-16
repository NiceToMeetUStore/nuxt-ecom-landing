<template>
    <div>
        <v-layout>
            <v-app-bar :height="appBarHeight" app>
                <div class="logo-container">
                    <img src="/images/nice_logo.png" alt="Logo" :style="{ height: logoHeight + 'px' }" />
                </div>

                <div class="d-flex align-center ml-auto">
                    <!-- Desktop Menu -->
                    <div class="d-none d-md-flex align-center gap-2">
                        <v-btn text @click="goTo('about')">About</v-btn>
                        <v-btn text @click="goTo('contact')">Contact Us</v-btn>

                        <v-menu offset-y open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn :text="currentLang" append-icon="mdi-chevron-down" v-bind="props"
                                    variant="outlined" class="lang-btn mr-8" />
                            </template>
                            <v-list>
                                <v-list-item v-for="lang in langs" :key="lang" @click="currentLang = lang">
                                    <v-list-item-title>{{ lang }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>

                    <!-- Mobile: Hamburger Menu -->
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn class="d-md-none mr-2" icon="mdi-menu" variant="text" v-bind="props"></v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="goTo('about')">About</v-list-item>
                            <v-list-item @click="goTo('contact')">Contact</v-list-item>
                            <v-list-item @click="toggleLang">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ props }">
                                        <v-btn :text="currentLang" append-icon="mdi-chevron-down" v-bind="props"
                                            variant="outlined" class="lang-btn" />
                                    </template>

                                    <v-list>
                                        <v-list-item v-for="lang in langs" :key="lang" @click="currentLang = lang">
                                            <v-list-item-title>{{ lang }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>

                <!-- Mobile Drawer -->
                <!-- <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" /> -->
            </v-app-bar>

            <!-- Mobile Drawer -->
            <!-- <v-navigation-drawer v-model="drawer" temporary location="right">
                <v-list>
                    <v-list-item @click="goTo('about')">About</v-list-item>
                    <v-list-item @click="goTo('contact')">Contact</v-list-item>
                </v-list>
            </v-navigation-drawer> -->
        </v-layout>
    </div>
</template>

<script setup lang="ts">

/* #### Composables #### */
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

// const drawer = ref(false)

const display = useDisplay()
const logoHeight = computed(() => (display.smAndDown.value ? 60 : 80))
const appBarHeight = computed(() => (display.smAndDown.value ? 80 : 100))

/* #### State #### */
const currentLang = ref('EN');
const langs = ['EN', 'TH'];
const languages = reactive([
    { title: 'ภาษาไทย', value: 'th' },
    { title: 'English (US)', value: 'en' },
]);

/* #### Methods #### */
const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const toggleLang = () => {
    console.log('Switch language')
}

/* #### Life Cycle Hooks #### */

</script>

<style scoped>
.gap-2 {
    gap: 0.5rem;
}

.logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.lang-btn {
    font-weight: bold;
    box-shadow:
        4px 4px 0px #006838,
        8px 8px 0px #00FF88;
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

/* .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: white;
    padding: 10px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
}

.navbar img {
    width: 80px;
    height: 80px;
} */

/* body {
    display: grid;
    height: 100vh;
    place-items: center;
} */
</style>