<template>
        <header id="header" class="sg" :class="showMenu ? 'open' : ''">
            <div data-header-container>
                <button data-hamburger title="Toggle Menu!" @click="showMenu = !showMenu">
                    <FontAwesome icon="bars" />
                </button>


                <div data-logo class="flex-flow">
                    <FontAwesome icon="notes-medical"/>
                    <strong class="heading-text">medlite</strong>
                </div>
            
            
            
                <nav class="flex-flow" data-header-desktop-nav>
                    <ul class="contents">
                        <li>home</li>
                        <li>notes</li>
                        <li>quizzes</li>
                        <li>resources</li>
                    </ul>
                </nav>


                <nav class="flex-flow" data-header-mobile-nav aria-hidden>
                    <ul class="contents">
                        <li>home</li>
                        <li>notes</li>
                        <li>quizzes</li>
                        <li>resources</li>
                    </ul>
                    <button data-header-mobile-login>Login</button>
                </nav>

                


                <div data-search class="flex-flow">
                    <button title="search" data-header-search><FontAwesome icon="search" /></button>
                    <button data-header-login>Login</button>
                </div>
            </div>
        </header>
</template>

<script setup lang="ts">
const showMenu = $ref(false)
</script>

<style lang="scss">
    @use "../../scss/base" as *;



header#header {
    grid-column: 1 / -1;
    background: var(--white);
    color: hsla(var(--blueHsl), 0.8);
    padding-block: var(--p-2);
    box-shadow: 0 2px 3px -1px hsla(var(--blackHsl), 0.07);
    position: sticky;
    inset: 0 auto auto auto;

    font-family: var(--heading-font);

    z-index: 2;


    --mobile-icon-size: calc(var(--size-1) * 1.25);


    button[data-hamburger] {
        font-size: var(--mobile-icon-size);
        color: hsla(var(--blueHsl), 0.8);
        background: transparent;
        @media(min-width: $mqSize) {
            display: none;
        }
    }

    [data-header-container] {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
        
        @media(min-width: $mqSize) {
            display: grid;
            grid-template-columns:250px auto 250px;
            
        }


    }




    [data-logo] {
        font-size: calc(var(--size-2) * 1.35);
        color: var(--blue);
        gap: calc(var(--p) * 1.5);
        align-items: center; 
        
        strong {
            line-height: 0.6;
            display: none;
        }

        
        @media (min-width: $mqSize) {
            font-size: calc(var(--size-2) * 1.15);
            strong {
                display: block;
            }
        }

    }

    nav {
        text-transform: uppercase;
        color: hsla(var(---blueHsl), 0.3);

    }





    nav[data-header-mobile-nav] {
        display: none;
        position: absolute;
        inset: auto 0 0 0;
        transform: translate(0, 100%);
        background: hsla(var(--blueHsl), 0.2);
        flex-direction: column;
        gap: calc(var(--p-2) * 1) var(--p-2);
        gap: 0;
        padding: var(--p-3) 0.75rem;
        padding-block-start: var(--p-2);
        justify-content: center;
        background: var(--white);
        box-shadow: 0 2px 3px -1px hsla(var(--blackHsl), 0.07);


        li {
            padding: calc(var(--p) * 2) var(--p-2);
            transition: 200ms;


            &:hover {
                background: hsla(var(--blueHsl), 0.8);
                color: var(--white);
                border-radius: var(--p);
            }
        }



        li + li {
            border-top: 1px solid hsla(var(--blueHsl), 0.3);
        }
        


        @media (min-width: $mqSize) {
            display: none;
        }
    }

    &.open {
        @media (max-width: $mqSize) {
            nav[data-header-mobile-nav] {
                display: flex;
            }
        }
    }

    nav[data-header-desktop-nav] {
        gap: var(--p-3);

        display: none;

        

        @media (min-width: $mqSize) {
            display: flex;
        }
    }

    
    ul {
        list-style: none;
    }

    [data-search] {
        width: fit-content;
        gap: var(--p-2);
        align-items: center;

        @media (min-width: $mqSize) {
            margin-inline-start: auto;
        }
    }


    button {
        border: none;
        cursor: pointer;
        


    }

    button[data-header-search] {
        background: transparent;
        color: var(--blue);
        font-size: var(--mobile-icon-size);
        
        
        @media (min-width: $mqSize) {
            font-size: var(--size-1);
        }


        &:hover {

            svg {
                animation-name: fa-bounce;
                animation-delay: var(--fa-animation-delay, 0s);
                animation-direction: var(--fa-animation-direction, normal);
                animation-duration: var(--fa-animation-duration, 1s);
                animation-iteration-count: var(--fa-animation-iteration-count, infinite);
                animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
            }

        }
    }



    button[data-header-login], button[data-header-mobile-login] {
        background: hsla(var(--blueHsl), 0.8);
        color: var(--white);
        border-radius: var(--p);
        box-shadow: 0px 2px 10px -1px hsla(var(--blackHsl), 0.2);
        transition: 200ms ease;
        
        &:focus, &:hover {
            background: hsla(var(--blueHsl), 1);
        }
        
        
        &:hover {
            box-shadow: 0px 2px 10px 0px hsla(var(--blackHsl), 0.3);
        }


        
        
    }
    
    
    button[data-header-mobile-login] {
        flex-grow: 1;
        flex-basis: 100%;
        padding: calc(var(--p) * 3) var(--p-4);
        text-transform: uppercase;
        margin-block-start: var(--p-2);

        
        @media (min-width: $mqSize) {
            display: none;
        }

    }
    


    button[data-header-login] {
        padding: calc(var(--p) * 1.5) var(--p-4);
        display: none;
        @media (min-width: $mqSize) {
            display: flex;
        }
    }




}
</style>