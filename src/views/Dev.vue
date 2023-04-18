<template>
    <div class="contents" data-page data-page-dev>
        <div data-card-list>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <!-- <Profile /> -->
    </div>
</template>

<script setup lang="ts">
import Card from "../components/utilities/Card_.vue";
</script>

<style lang="scss">
[data-page-dev].contents [data-card-list] {
    padding-block: var(--p-5);
    gap: var(--p-5);
}

</style>