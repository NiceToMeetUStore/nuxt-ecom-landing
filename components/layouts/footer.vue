<template>
    <v-footer class="text-center d-flex flex-column ga-2 pt-8 pb-10 border-t">
        <div class="d-flex ga-3">
            <v-btn v-for="icon in icons" :key="icon.name" density="comfortable" variant="text" :href="icon.href" icon>
                <v-icon v-if="icon.type === 'mdi'">{{ icon.name }}</v-icon>
                <img v-else :src="icon.name" width="22" height="22" />
            </v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="50"></v-divider>

        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong>NICE TO MEET U</strong>
        </div>
    </v-footer>
</template>

<script setup lang="ts">
/* #### Composables #### */

/* #### State #### */
const icons = ref([
    { name: 'mdi-facebook', type: 'mdi', href: 'https://facebook.com/nicetomeetustore' },
    { name: 'mdi-instagram', type: 'mdi', href: 'https://instagram.com/nicetomeetustore' },
    { name: '/images/line-oa-icon.png', type: 'img', href: 'https://page.line.me/292iivag' },
    { name: '/images/gmap-icon.png', type: 'img', href: 'http://maps.app.goo.gl/yXtEHZxxD8xsJotB7' },
])

/* #### Methods #### */

/* #### Life Cycle Hooks #### */

</script>