<script lang="ts" setup></script>

<template>
    <article data-card class="grid-flow">
        <span data-card-id class="flex-flow heading-text">
            <Icon icon="fa-solid fa-book" />
            blog
            <!-- <Icon icon="fa-solid fa-book" /> -->
        </span>


        <strong data-card-title class="heading-text">Some Obsure Title</strong>


        <p data-card-about>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus excepturi veritatis repellendus expedita porro quisquam esse labore dolore ipsum velit.
        </p>


        <strong data-card-author>
            By <span>Adrian Chase</span> on 16/10/2024
        </strong>



    </article>
</template>



<style lang="scss">
article[data-card].grid-flow {
    --_p: calc(var(--p-2) * 1.25);
    // font-size: calc(var(--size) * 0.95);
    
    gap: calc(var(--p) * 2) 0;
    grid-template-columns: var(--_p) 1fr var(--_p);
    background: var(--white);
    box-shadow: 0 0 4px -1px hsla(var(--blackHsl), 0.4);
    border-radius: calc(var(--size-1) * 0.5);

    padding-block: var(--p-2) calc(var(--p-2) * 1.5);




    & > * {
        grid-column: 2 / -2;
        width: fit-content;
    }



    [data-card-id] {
        align-items: center;
        gap: calc(var(--p) * 1.25);
        padding: calc(var(--p) * 1) calc(var(--p-2) * 1);
        background: hsla(var(--blueHsl), 0.15);
        font-size: calc(var(--size-1) * 0.8);
        border-radius: 100vmax;
    }

    [data-card-title] {
        font-size: calc(var(--size-2) * 0.75) ;
        // opacity: 0.8;
        color: hsla(var(--blueHsl), 0.89);
        transition: 200ms ease;



        &:hover {
            color: hsla(var(--blueHsl), 1);
        }


        &:focus-visible {
            outline: 2px dotted currentColor;
        }


    }



    [data-card-about] {


        font-size: calc(var(--size-1) * 0.9);
        line-height: 1.6;




    }



    [data-card-author] {
        margin-block-start: calc(var(--p) * 1.5);
        font-size: calc(var(--size-1) * 0.8);
        font-weight: 500;
        color: var(--blue);

        span {
            font-family: var(--heading-font);
            letter-spacing: 1px;
            font-weight: 400;
        }
    }
}

</style>