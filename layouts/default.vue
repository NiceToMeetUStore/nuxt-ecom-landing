<template>
    <div class="layout-container">
        <!-- Navbar -->
        <layouts-header />
        <!-- Main content -->
        <main class="main-content">
            <slot />
        </main>
        <!-- Footer -->
        <layouts-footer />
    </div>

    <template>
        <div>
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

                            <v-btn @click="" base-color="#305E3F"
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

/* #### State #### */
const dialog = ref<boolean>(true);

/* #### Methods #### */

</script>


<style scoped>
.main-content {
    flex: 1;
    padding-top: 80px;
    /* default for mobile */
}

@media (min-width: 600px) {
    .main-content {
        padding-top: 80px;
        /* tablet */
    }
}

@media (min-width: 960px) {
    .main-content {
        padding-top: 100px;
        /* desktop */
    }
}
</style>
