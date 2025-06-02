<template>
    <div class="layout-container">
        <!-- Navbar -->
        <layouts-header />
        <!-- Main content (page content will be injected here) -->
        <main class="main-content">
            <slot />
        </main>
        <!-- Footer -->
        <layouts-footer />
    </div>
</template>



<script setup lang="ts">

/* #### Composables #### */


// /* #### State #### */


/* #### Methods #### */


</script>


<style scoped>
.main-content {
    padding-top: 120px;
    flex: 1;
}
</style>
