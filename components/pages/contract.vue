<template>
    <div id="contact">
        <v-row class="py-16">
            <v-col cols="12" sm="6" md="6" lg="6" class="d-lg-flex justify-lg-center">
                <v-card flat>
                    <v-card-title class="font-weight-bold text-h5 text-sm-h4 text-md-h3 pt-0">Contact Us</v-card-title>
                    <v-card-text>
                        <div class="mt-4 mb-5">
                            <v-icon icon="mdi-map-marker" class="mr-5" />
                            <strong>Address</strong>
                            <div class="text-body-2 text-grey-darken-1 mt-4">
                                92/15, Om Kret, Pak Kret District, Nonthaburi 11120
                            </div>
                        </div>

                        <div class="mb-5">
                            <v-icon icon="mdi-phone" class="mr-5" />
                            <strong>Telephone</strong>
                            <div class="text-body-2 text-grey-darken-1 mt-4">+66 65 751 0978</div>
                        </div>

                        <div class="mb-5">
                            <v-icon icon="mdi-clock-time-four-outline" class="mr-5" />
                            <strong>Store Hours</strong>
                            <div class="text-body-2 text-grey-darken-1 mt-4">Mon–Sun: 12pm – 12am</div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="6" class="d-flex justify-center align-center">
                <v-img src="/images/ntmu-front.JPG" :height="imgSize" class="mt-2" />
            </v-col>
        </v-row>
    </div>

    <!-- <div
        style="padding:0px 50px 0px 50px; display: flex; flex-direction: row; justify-content: center; align-items: center;">
        <v-card width="60%" style="box-shadow: none;">
            <v-card-title class="font-weight-bold" style="font-size: 64px;">
                Contract
            </v-card-title>
            <v-card-text>
                <div class="mb-5">
                    <v-icon icon="mdi-map-marker" class="mr-5" />
                    <strong>Address</strong>
                    <div class="text-body-2 text-grey-darken-1 mt-5">
                        92/15, Om Kret, Pak Kret District, Nonthaburi 11120
                    </div>
                </div>

                <div class="mb-5">
                    <v-icon icon="mdi-phone" class="mr-5" />
                    <strong>Telephone</strong>
                    <div class="text-body-2 text-grey-darken-1 mt-5">+66 65 751 0978</div>
                </div>

                <div class="mb-5">
                    <v-icon icon="mdi-clock-time-four-outline" class="mr-5" />
                    <strong>Store Hours</strong>
                    <div class="text-body-2 text-grey-darken-1 mt-5">Mon–Sun: 12pm – 12am</div>
                </div>
            </v-card-text>
        </v-card>

        <v-img src="/images/ntmu-front.JPG" width="508" height="657" />
    </div> -->
</template>


<script lang="ts" setup>
import { useDisplay } from 'vuetify'

const { xs, sm, md, lgAndUp } = useDisplay()

const imgSize = ref(200) // default/fallback for SSR

const updateImgSize = () => {
    if (xs.value) imgSize.value = 400
    else if (sm.value) imgSize.value = 450
    else if (md.value) imgSize.value = 500
    else if (lgAndUp.value) imgSize.value = 600
    // else imgSize.value = 400
}

onMounted(() => {
    updateImgSize()
    // Optional: update on resize
    watch([xs, sm, md, lgAndUp], updateImgSize)
})
</script>

<style></style>