<template>
    <div id="about">
        <v-row>
            <v-col cols="12" lg="8">
                <v-card flat>
                    <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h2">NICE TO MEET U
                        STORE</v-card-title>
                    <v-card-text class="text-subtitle-1 text-sm-h6 text-md-h6">
                        With NTMU Store, you’ll find maximum strength cannabis products. Stepping into our store feels
                        like entering a chill space, game zone. The clean, white interior is accented by vibrant,
                        colorful displays of products and artwork. The overall atmosphere is relaxed and inviting,
                        making it an ideal spot to explore the
                        world of cannabis in comfort and style. The staff are known to be friendly and helpful, and will
                        readily
                        assist in answering any questions.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12"" class=" px-6">
                <v-carousel :height="carouselHeight" class="rounded-lg" show-arrows="hover" cycle hide-delimiters>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs, smAndDown } = useDisplay()

const carouselHeight = computed(() => {
    if (xs.value) return 200
    if (smAndDown.value) return 400
    return 600
})

const slides = ref([
    { src: '/images/carousel-1.jpg' },
    { src: '/images/carousel-2.jpg' },
])
</script>

<style></style>