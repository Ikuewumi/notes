<template>
<div class="contents" data-page-home>

    <TheHero />
    <div class="sg">
        <div data-card-list>
            <Card />
            <Card />
            <Card />
        </div>
    </div>


</div>
</template>

<script setup lang="ts">
import TheHero from "../components/misc/TheHero.vue";
import Card from "../components/utilities/Card.vue";




</script>

<style lang="scss">


[data-page-home].contents {
    & > * {
        grid-column: 1 / -1;
    }
}



</style>