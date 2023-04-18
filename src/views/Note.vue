<template>
    <div data-page-note class="contents" data-page>

        <section data-note-image class="grid-flow">
            <h1>The Anterolateral Abdominal Wall</h1>
            <img src="/dummy/002.png" alt="Cover Image">
        </section>

        <section data-note-info class="grid-flow heading-text">


            
            <div data-note-info-field class="flex-flow">
                <router-link data-note-info-image to="/"><img src="/dummy/001.png" alt="Jake Stokolvic" /></router-link>
                <strong class="heading-text"><router-link to="/">Jake Stokolvic</router-link> <span>on 12/02/2023</span></strong> 
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
        max-width: min(700px, calc(100vw - (2 * 0.15rem)));
        margin-inline: auto;
        z-index: 3;
        text-wrap: balance;
        text-align: center;
        color: var(--white);
        text-shadow: 2px 0 3px hsla(var(--blackHsl), 1);
        padding: var(--p-4);
        font-size: var(--size-3);
        transition: 300ms ease;


        @media (min-width: $mqSize) {
            font-size: clamp(var(--size-1), var(--size-3)* 1.2, var(--size-4));
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
            //letter-spacing: -2px;
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
                //letter-spacing: -1px;
                font-size: 80%;
            }
        }
        [data-note-info-image] {
            --_dimension: var(--dimension, 50px);
            overflow: hidden;
            isolation: isolate;


            position: relative;


            &:before {
                position: absolute;
                content: '';
                inset: 0;
                border-radius: inherit;
                z-index: 2;
                background: #00000020;
                pointer-events: none;
                transform-origin: top-left;
                transition: 300ms ease;

            }



            &, img {
                width: var(--_dimension);
                height: var(--_dimension);
                aspect-ratio: 1 / 1;
                border-radius: 50%;
            }
            
            
            img {
                object-fit: cover;
                object-position: top center;
                border-radius: 50%;
                transition: 300ms ease-out;
                cursor: pointer;
            }




            &:hover, &:focus{
                &::before {
                    transform: scaleY(0);
                    background: transparent;
                }

                img {
                    transform: scale(1.25);
                }
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

    @media (max-width: $mqSize) {
        overflow: hidden;
    }


    * {
        line-height: 1.6;

        @media(min-width: $mqSize) {
            line-height: 1.45;

        }
    }
    
    // Lists
    ul, ol, dl {
        list-style: inside;
        display: grid;
        gap: calc(var(--size-1) * 0.25);


        li {

        }
    }

    & > ul, & > ol, & > dl {
        ul, ol, dl {
            padding-inline-start: var(--p-3);
        }
    }

    ol {
        list-style: decimal inside;
    }





    // Headings
    h1, h2, h3, h4, h5, h6 {
        font-family: var(--heading-font);
        color: var(--_clr, hsla(var(--blueHsl), 0.9));
        line-height: 0.95;
        //letter-spacing: -4px;
        //background-color: var(--blue);
        //color: var(--white);
        //position: sticky;
        //inset: 0 auto auto auto;
        //height: 50px;
    }

    h1 {font-size: clamp(var(--size-1), var(--size-2)* 1.25, calc(var(--size-2) * 1.5));}
    h2 {font-size: clamp(var(--size-1), var(--size-2)* 1, calc(var(--size-2) * 1.25));}
    h3 {font-size: clamp(var(--size-1), var(--size-2)* 1, calc(var(--size-2) * 1));}
    h4 {font-size: clamp(var(--size-1), var(--size-2)* 1, calc(var(--size-2) * 0.75));}
    h5 {font-size: clamp(var(--size-1), var(--size-2)* 1, calc(var(--size-2) * 0.5));}
    h6 {font-size: clamp(var(--size-1), var(--size-2)* 1, calc(var(--size-2) * 0.25));}

    @media (max-width: $mqSize) {
        h1 {font-size:calc(var(--size-2) * 1.25);}
        h2 {font-size:calc(var(--size-2) * 1);}
        h3 {font-size:calc(var(--size-2) * 0.95);}
        h4 {font-size:calc(var(--size-2) * 0.75);}
        h5 {font-size:calc(var(--size-2) * 0.5);}
        h6 {font-size:calc(var(--size-2) * 0.45);}        
    }



    //Blockquote 
    blockquote {
        padding: var(--p-1) var(--p-2);
        border-left: 4px solid var(--blue);
        background: hsla(var(--blueHsl), 0.1);
        border-radius: calc(var(--size-1) * 0.25);
    }


    * + h1 {
        margin-block-start: var(--p-4);
    }

    h1 {
        text-decoration: underline;
        color: hsla(var(--blueHsl), 0.8);
        transition: 250ms ease;
        &:hover {
            color: hsla(var(--blueHsl), 1);
        }
    }


    @media(min-width: $mqSize) {
        grid-column: 2/ -2;
    }
}
</style>