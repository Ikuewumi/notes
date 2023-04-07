<template>
    <section id="hero" class="grid-flow">
        <h2>
            {{ heroData.before }}
            <figure class="words grid-flow">
                <span class="words-container grid-flow">
                <span v-for="term,i in heroData.terms" :key="i">{{ term }}</span>
                </span> 
            </figure>
            {{ heroData.after }}
        </h2>
    </section>
</template>

<script setup lang="ts">

const heroData = {
    before: "An app to quickly",
    terms: ["review", "relearn", "refresh"],
    after: "medical topics",
}


</script>

<style lang="scss">
#hero {
    min-height: min(500px, 70vh);
    place-content: center;
    place-items: center;
    text-align: center;
    line-height: 1;
    padding-block: var(--p-1) var(--p-4);
    isolation: isolate;

    --words-height: calc(var(--size-3) * 1.25);

    * {
        z-index: -1;
    }

    h2 {
        max-width: 700px;
        font-family: var(--heading-font);
        font-size: var(--words-height);
        color: var(--blue);
    }


    figure.words {
        --figure-words-height: calc(1.25 * var(--words-height));
        font-family: var(--stroke-font);
        font-size: var(--figure-words-height);
        height: var(--figure-words-height);
        overflow: hidden;
        // filter: blur(2px);

        padding: 0;

        margin-block: calc(var(--p) * 0.7) var(--p);
    }
    
    
    .words-container {
        gap: 0;
        transform: translateY(calc(0 * var(--figure-words-height)));
        animation: move 6s steps(2) infinite;
        
        
        
        
        @keyframes move {
            0%, 100% {transform: translateY(calc(0 * var(--figure-words-height)));}
            69% {transform: translateY(calc(-2 * var(--figure-words-height)));}
        }
    }

}
</style>

