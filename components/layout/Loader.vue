<template>
  <div class="wrapper">
    <NuxtImg src="/loader.svg" alt="" width="220px"/>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
@reference "../../assets/css/tailwind.css";

.wrapper {
  @apply bg-sidebar flex items-center justify-center w-screen h-screen;
}
</style>