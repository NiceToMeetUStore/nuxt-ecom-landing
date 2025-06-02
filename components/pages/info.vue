<template>
    <div style="padding:0px 50px 50px 50px; display: flex; flex-direction: column;gap: 50px; ">

        <v-card width="60%" style="box-shadow: none;">
            <v-card-text class="font-weight-bold" style="font-size: 64px;">
                NICE TO MEET U STORE
            </v-card-text>
            <v-card-text style="font-size: 20px;">
                With NTMU Store, you’ll find maximum strength cannabis products. Stepping into our store feels like
                entering a
                chill space, game zone. The clean, white interior is accented by vibrant, colorful displays of products
                and
                artwork. The overall atmosphere is relaxed and inviting, making it an ideal spot to explore the world of
                cannabis in comfort and style. The staff are known to be friendly and helpful, and will readily assist
                in
                answering any questions.
            </v-card-text>
        </v-card>
        <v-carousel height="600" show-arrows="hover" cycle hide-delimiters>
            <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" cover></v-carousel-item>
        </v-carousel>

    </div>
</template>

<script lang="ts" setup>
const slides = ref([
    { src: '/images/IMG_20250405_124916_edit_78422252671540.jpg' },
    { src: '/images/IMG_20250511_1707221.jpg' },
])
</script>

<style></style>