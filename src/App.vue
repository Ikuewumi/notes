<template>
  <TheHeader />
  <main class="sg">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/misc/TheHeader.vue';
</script>

<style lang="scss"></style>