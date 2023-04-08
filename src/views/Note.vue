<template>
    <div data-page-note class="contents" data-page>

        <section data-note-image class="grid-flow">
            <h1>The Anterolateral Abdominal Wall</h1>
            <img src="/dummy/002.png" alt="Cover Image">
        </section>

        <section data-note-info class="grid-flow heading-text">


            
            <div data-note-info-field class="flex-flow">
                <router-link data-note-info-image to="/"><img src="/dummy/001.png" alt="Jake Stokolvic" /></router-link>
                <strong class="heading-text"><router-link to="/">Jake Stokolvic</router-link> <span>on 12th February, 2023</span></strong> 
            </div>

            <div data-note-info-field class="flex-flow">
                <button>indie</button>
                <button>artistry</button>
                <button>increasing</button>
                <button>miniature</button>
            </div>

  

        </section>



        <section v-html="sampleText" data-note-content class="grid-flow">

        </section>



    </div>
</template>

<script setup lang="ts">
import { mdToHtml } from '../composables/md';
let sampleText = $ref('')

mdToHtml().then(str => sampleText = str)
</script>

<style lang="scss">
@use "../scss/base" as *;


[data-note-image] {

    grid-column: 1 / -1;
    isolation: isolate;

    & {
        height: min(400px, 70vh);
        overflow: hidden;
        position: relative;


        &::before {
            content: '';
            position: absolute;
            grid-column: 1/ -1;
            grid-row: 1/ -1;
            z-index: 2;
            inset: 0;
            background-color: hsla(var(--blackHsl), 0.4);
        }
    }


    & > img {
        width: 100%;
        height: inherit;
        object-fit: cover;
    }



    & > * {
        grid-column: 1/ -1;
        grid-row: 1/ -1;
    }


    h1 {
        align-self: center;
        max-width: min(700px, calc(100vw - (2 * 0.75rem)));
        margin-inline: auto;
        z-index: 3;
        text-align: center;
        color: var(--white);
        text-shadow: 2px 0 3px hsla(var(--blackHsl), 1);
        padding: var(--p-4);
        font-size: var(--size-3);
        transition: 300ms ease;


        @media (min-width: $mqSize) {
            font-size: clamp(var(--size-2), var(--size-3)* 1.5, var(--size-4));
        }


        &:hover {

        }
    }
}


[data-note-info] {
    margin-block: var(--p-2);
    gap: var(--p-1);


    [data-note-info-field].flex-flow {


        & + & {
        }


        gap: calc(var(--p) * 2.5);
        align-items: center;
        font-size: calc(var(--size-1)* 1.3);


        strong {
            letter-spacing: 1px;
            a {
                color: hsla(var(--blueHsl), 0.7);
                text-decoration: none;
                transition: 200ms ease;


                &:hover, &:focus {
                    color: var(--blue);
                }



                &:focus {
                    outline: none;
                    text-decoration: underline;
                }
            }
            // padding-block-end: 10px;
            
            span {
                font-family: var(--custom-font);
                letter-spacing: -1px;
                font-size: 80%;
            }
        }

        img {

            --_dimension: var(--dimension, 50px);
            width: var(--_dimension);
            object-fit: cover;
            object-position: top center;
            height: var(--_dimension);
            aspect-ratio: 1 / 1;
            border-radius: 50%;
            transition: 300ms ease-out;
            transform-origin: top-left;
            cursor: pointer;

            &:hover {
                transform: scale(1.5);
            }


        }


        svg {
            color: hsla(var(--blueHsl), 0.7)
        }


        button {
            line-height: 0.8;
            padding: calc(var(--p) * 1.5) calc(var(--p) * 1.25);
            font-family: var(--custom-font);
            
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
}



[data-note-content].grid-flow {
    background: var(--white);
    z-index: 3;
    box-shadow: 0 2px 3px -1px hsla(var(--blackHsl), 0.3);
    padding-inline: var(--p-3);
    padding-block: var(--p-1);
    border-radius: var(--p);
    grid-column: 1 / -1;
    ul, ol, dl {
        list-style: inside;
    }

    & > ul, & > ol, & > dl {
        ul, ol, dl {
            padding-inline-start: var(--p-3);
        }
    }

    ol {
        list-style:decimal inside;
    }



    @media(min-width: $mqSize) {
        grid-column: 2/ -2;
    }
}
</style>