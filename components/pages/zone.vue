<template>
    <div style="padding:0px 50px 0px 50px; display: flex; flex-direction: column;gap: 50px; ">

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

    </div>
</template>

<script lang="ts" setup>

const model = ref(null);
const zone = ref([
    {
        name: 'Chill Space',
        Image: '/images/DSC09480.jpg',
        description: "Environment designed for comfort and vibrant displays create the perfect vibe for relaxation."
    },
    {
        name: 'Board Games',
        Image: '/images/DSC09332_1.jpg',
        description: "Connect with friends over classic and modern board games. It’s more than a store—it’s your new favorite hangout."
    },
    {
        name: 'Live Music',
        Image: '/images/DSC09683.jpg',
        description: "Enjoy live music. From acoustic sets to energetic local acts, there's always a rhythm in the air."
    },
    {
        name: 'Game Console',
        Image: '/images/DSC09480.jpg',
        description: "Jump into the fun with our gaming consoles. Play solo or challenge a friend—it’s all about good vibes and great times."
    }
])
</script>
