<template>
    <div style="padding:0px 50px 50px 50px; display: flex; flex-direction: column;gap: 50px; ">
        <v-card width="60%" style="box-shadow: none;">
            <v-card-text class="font-weight-bold" style="font-size: 64px;">
                Reviews
            </v-card-text>
        </v-card>
        <v-slide-group v-model="model" show-arrows>
            <v-slide-group-item v-for="n in reviews" :key="n.name">
                <v-card class="cardreview" width="405" height="198" elevation="0"
                    style="border-radius: 12px; border: 1px solid #e0e0e0;">
                    <div class="text-h6 font-italic text-center">“{{ n.review }}”</div>

                    <div class="d-flex  justify-center align-center">
                        <div>
                            <v-avatar color="secondary" class="mr-5" />
                        </div>
                        <div>
                            <div class="text-subtitle-2 font-weight-medium">{{ n.name }}</div>
                            <v-rating :model-value="n.rate" size="s" density="compact" color="orange"
                                empty-icon="mdi-star-outline" full-icon="mdi-star" half-icon="mdi-star-half-full"
                                readonly />
                        </div>
                    </div>

                </v-card>
                <!-- <v-card class="pa-6 d-flex flex-column gap-4" width="360" elevation="0"
                    style="border-radius: 12px; border: 1px solid #e0e0e0;">
                    <div class="text-h6 font-italic text-center">“ของเยอะ ราคาไม่แรง”</div>

                    <div class="d-flex align-center gap-4">
                        <v-avatar color="secondary" />

                        <div>
                            <div class="text-subtitle-2 font-weight-medium">supawit JANNGAM</div>
                            <v-rating model-value="3" density="compact" color="black" empty-icon="mdi-star-outline"
                                full-icon="mdi-star" half-icon="mdi-star-half-full" readonly />
                        </div>
                    </div>
                </v-card> -->
            </v-slide-group-item>
        </v-slide-group>


    </div>
</template>

<script lang="ts" setup>
const model = ref(null);
const reviews = ref([
    {
        name: 'supawit JANNGAM',
        review: 'ของเยอะ ราคาไม่แรง',
        rate: 5
    },
    {
        name: 'วชิรวิทย์ ทับเคลียว',
        review: 'ร้านสวยราคาเป็นกันเองดอกสวย',
        rate: 5
    },
    {
        name: 'Ta demick',
        review: 'ฟีลดีเป็นกันเองมากครับ ราคาสบายเป๋า',
        rate: 5
    },
    {
        name: 'ชนกันต์ รัตนปรีดาพันธ์ุ',
        review: 'ร้านดีครับมากันเยอะๆนะครับ',
        rate: 5
    },
    {
        name: 'Nattapan Vaiyananta',
        review: 'ร้านเข้าซอยมานิดนึง แต่ฟีลดี พ่อค้ากันเอง',
        rate: 5
    }
])
</script>

<style>
.cardreview {
    margin: 12px;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
</style>