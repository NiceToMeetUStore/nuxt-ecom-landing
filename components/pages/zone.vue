<template>
    <v-row>
        <v-col cols="12">
            <v-card flat>
                <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h3">Why Choose NTMU?</v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="d-flex justify-center">
            <v-slide-group v-model="model" show-arrows>
                <v-slide-group-item v-for="n in zone" :key="n.name">
                    <v-card flat class="mx-4" :style="{ width: imgSize + 'px', minWidth: imgSize + 'px' }">
                        <v-img class="rounded-lg" :height="imgSize" :src="n.Image" cover />

                        <v-card-title class="pl-0 text-h5 font-weight-bold">
                            {{ n.name }}
                        </v-card-title>

                        <v-card-text class="pl-0 text-body-2 text-grey-darken-1">
                            {{ n.description }}
                        </v-card-text>

                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
        </v-col>
    </v-row>

    <!-- <div style="padding:0px 50px 0px 50px; display: flex; flex-direction: column;gap: 50px; ">
        <v-card width="60%" style="box-shadow: none;">
            <v-card-text class="font-weight-bold" style="font-size: 64px;">
                Why Choose NTMU?
            </v-card-text>
        </v-card>

        <v-slide-group v-model="model" show-arrows>
            <v-slide-group-item v-for="n in zone" :key="n.name">
                <v-card class="cardzone" width="405" height="540" elevation="0">
                    <v-img height="405" width="405" :src="n.Image" cover style="border-radius: 8px;" />

                    <v-card-title class="pl-0 text-h5 font-weight-bold">
                        {{ n.name }}
                    </v-card-title>

                    <v-card-text class="pl-0 text-body-2 text-grey-darken-1">
                        {{ n.description }}
                    </v-card-text>

                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </div> -->
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs, sm, md, lgAndUp } = useDisplay()

const imgSize = ref(200) // default/fallback for SSR

const updateImgSize = () => {
    if (xs.value) imgSize.value = 200
    else if (sm.value) imgSize.value = 250
    else if (md.value) imgSize.value = 300
    else if (lgAndUp.value) imgSize.value = 350
    // else imgSize.value = 400
}

onMounted(() => {
    updateImgSize()
    // Optional: update on resize
    watch([xs, sm, md, lgAndUp], updateImgSize)
})

const model = ref(null);
const zone = ref([
    {
        name: 'Chill Space',
        Image: '/images/slide-1-1.jpg',
        description: "Environment designed for comfort and vibrant displays create the perfect vibe for relaxation."
    },
    {
        name: 'Board Games',
        Image: '/images/slide-1-2.jpg',
        description: "Connect with friends over classic and modern board games. It’s more than a store—it’s your new favorite hangout."
    },
    {
        name: 'Live Music',
        Image: '/images/slide-1-3.jpg',
        description: "Enjoy live music. From acoustic sets to energetic local acts, there's always a rhythm in the air."
    },
    {
        name: 'Game Console',
        Image: '/images/slide-1-4.jpg',
        description: "Jump into the fun with our gaming consoles. Play solo or challenge a friend—it’s all about good vibes and great times."
    }
])
</script>

<style></style>