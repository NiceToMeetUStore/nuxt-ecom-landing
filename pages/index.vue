<template>
  <v-container class="px-1 px-sm-8 px-md-10 px-lg-12" fluid>
    <pages-info />

    <pages-zone />

    <pages-product />

    <pages-review />

    <pages-contact />
  </v-container>
</template>

<script setup lang="ts">

definePageMeta({ layout: 'default' });

</script>

<style>
/* .cardzone {
  margin: 12px;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
} */
</style>