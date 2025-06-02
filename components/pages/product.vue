<template>
    <div style="padding:0px 50px 0px 50px; display: flex; flex-direction: column;gap: 50px; ">

        <v-card width="60%" style="box-shadow: none;">
            <v-card-text class="font-weight-bold" style="font-size: 64px;">
                Products
            </v-card-text>
        </v-card>
        <div style="display: flex; justify-content: center;">
            <v-slide-group v-model="model" show-arrows style="display: flex; justify-content: center;">
                <v-slide-group-item v-for="n in zone" :key="n.name">
                    <v-card class="cardzone" width="405" height="366" elevation="0">
                        <v-img height="272" width="404" :src="n.Image" cover style="border-radius: 8px;" />

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

    </div>
</template>

<script lang="ts" setup>

const model = ref(null);
const zone = ref([
    {
        name: 'HYBRID',
        Image: '/images/hybrid_resized.jpg',
        description: "A balanced blend of Sativa and Indica, perfect for those seeking both relaxation and focus."
    },
    {
        name: 'INDICA',
        Image: '/images/indica_resized.jpg',
        description: "Deeply relaxing and calming—best for unwinding, stress relief, and restful sleep."
    },
    {
        name: 'SATIVA',
        Image: '/images/sativa_resized.jpg',
        description: "Known for uplifting effects, ideal for daytime use and creative inspiration."
    }
])
</script>

<style></style>