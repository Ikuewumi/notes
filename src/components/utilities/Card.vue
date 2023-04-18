<template>
    <section class="grid-flow" data-card>

        <div class="image">
            <img :src="cardData.imageUrl" :alt="cardData.title">
        </div>
        <div class="content grid-flow">
            <RouterLink :to="cardData.link">{{ cardData.title }}</RouterLink>
            <p>{{ cardData.excerpt }}</p>
            <div data-categories class="flex-flow">
                <button v-for="category, i in cardData.categories" :key="i">{{ category }}</button>
            </div>


        </div>

    </section>
</template>

<script setup lang="ts">
const cardData = {
    imageUrl: "/dummy/001.png",
    title: "A Card Title Of Unknown Length",
    excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque...",
    categories: ["medicine", "GIT", "physiology"],
    link: "/",
}
</script>

<style lang="scss">
[data-card].grid-flow {
    // margin: 1rem auto;
    
    background: var(--white);
    box-shadow: 0 0 3px -1px hsla(var(--blackHsl), 0.6);

    transition: 200ms ease;
    z-index: 3;

    
    border-radius: var(--p);
    overflow: hidden;
    
    // max-width: 400px;
    gap: 0;

    position: relative;

    * {
        font-size: calc(var(--size-1) * 0.85);
        line-height: 1;
    }

    img {
        object-position: center;
        object-fit: cover;
        transition: transform 200ms ease-in;
    }

    .image, img {

        height: 150px;
        width: 100%;

    }

    .image {
        overflow: hidden;
        position: relative;
        isolation: isolate;



        &:before {
            content: '';
            position: absolute;
            inset: 0;
            background: hsla(var(--blackHsl), 0.2);
            z-index: 4;
            transition: 200ms ease;
        }
    }    


    &:hover {
        box-shadow: 0 3px 20px -1px hsla(var(--blackHsl), 0.4);
        transform: translateY(-3px);
    }

    
    &:hover, &:focus-within {



        .image {
            &:before {
                background: hsla(var(--blackHsl), 0.1);
            }
            // background-blend-mode: exclusion;
        }

        img {
            transform: scale(1.2);
        }
    }

    .content {
        gap: calc(var(--p) * 1.25);
        padding-inline: calc(var(--p-1) * 1.5);
        padding-block: calc(var(--p-1) * 1.75) calc(var(--p-1) * 1.85)
    }


    .content > a {
        font-family: var(--heading-font);
        font-size: calc(var(--size-2) * 0.85);
        line-height: 0.9;
        margin-block-end: calc(var(--p) * 1.5);
        text-decoration: none;
        color: hsla(var(--blueHsl), 0.8);
        transition: color 200ms ease-out;
        //letter-spacing: -3px;

        
        &:hover {
            color: var(--blue);
        }
    
    
        &:focus-visible {
            color: var(--blue);
            outline: 2px dotted currentColor;

        }
    }
    

    p {
        line-height: 1.4;
        // font-size: calc(var(--size-1) * 0.85);
    }

    [data-categories] {
        gap: calc(var(--p) * 1.2);
        margin-block-start: calc(var(--p) *  2);
    }


    [data-categories] button {
        line-height: 0.8;
        padding: calc(var(--p) * 1.5) calc(var(--p) * 1.25);
        
        outline: 1px solid hsl(var(--blackHsl), 0.3);
        border: none;
        cursor: pointer;
        
        font-size: calc(var(--size-1) * 0.65);
        border-radius: var(--p);
        
        transition: background 200ms ease-out;

    
        &:hover {
            background: hsla(var(--blackHsl), 0.2);
            // outline: 1px solid hsl(var(--blackHsl), 0.3);

        }


        &:focus-visible {
            outline: 2px solid var(--black);
            outline-offset: 0px;
        }
    
    }
}
</style>