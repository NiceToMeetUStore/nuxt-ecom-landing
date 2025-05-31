<template>
  <div style="padding:0px 50px 50px 50px; display: flex; flex-direction: column;gap: 50px; ">

    <v-card width="60%" style="box-shadow: none;">
      <v-card-text class="font-weight-bold" style="font-size: 64px;">
        NICE TO MEET U STORE
      </v-card-text>
      <v-card-text style="font-size: 20px;">
        With NTMU Store, you’ll find maximum strength cannabis products. Stepping into our store feels like entering a
        chill space, game zone. The clean, white interior is accented by vibrant, colorful displays of products and
        artwork. The overall atmosphere is relaxed and inviting, making it an ideal spot to explore the world of
        cannabis in comfort and style. The staff are known to be friendly and helpful, and will readily assist in
        answering any questions.
      </v-card-text>
    </v-card>
    <v-carousel height="600" show-arrows="hover" cycle hide-delimiters>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </div>

</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });
// const breadcrumbsStore = useBreadcrumbStore();

// const { t, setLocale } = useI18n();
// const globalStore = useGlobalStore();
// const theme = useTheme()
const breadcrumbs = ref([
  { name: 'index', path: '/', label: 'mainPage' },
]);
const colors = ref<string[]>([
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
])
const slides = ref<string[]>([
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
])


// const setLocale2 = (value: 'en' | 'th'): void => {
//   setLocale(value)
//   globalStore.setLocale(value);
// };
// const setTheme = (themeName: string): void => {
//   theme.global.name.value = themeName;
//   localStorage.setItem('theme', themeName);
// };
// const swithTheme = (): void => {
//   const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
//   setTheme(newTheme);
// };

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    // setTheme(savedTheme);
  }
  //   breadcrumbsStore.setBreadcrumbs(breadcrumbs.value);
});
</script>
