<template>
    <div class="contents" data-page-notes data-page>
        <section data-w-subgrid class="grid-flow">
            <h1>Archive</h1>
            <p>Here, you'll find a collection of informative, quick notes on various medical topics</p>
        </section>

        <div data-w-subgrid data-filters class="flex-flow">
            <div data-nav-categories class="flex-flow">
                <button class="active">All</button>
                <button>Physiology</button>
                <button>Anatomy</button>
                <button>Biochemistry</button>
            </div>



            <form @submit.prevent class="contents">
                <label for="time" class="hidden">Sort: </label>
                <select name="time" id="time" title="sort by date!">
                    <option value="newest first" default>newest first</option>
                    <option value="oldest first">oldest first</option>
                </select>

            </form>

        </div>


        <div data-w-subgrid data-card-list>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '../components/utilities/Card.vue';
</script>

<style lang="scss">
@use "../scss/base" as *;
[data-page-notes].contents {
    & > section:first-of-type {
        // grid-column: 2 / -2;
        gap: var(--p);

        @media (max-width: $mqSize) {
            * {

                text-align: center;
            }
        }
    }

    

    [data-filters] {
        margin-block-start: var(--p-1);
        align-items: center;
        justify-content: center;

        @media (min-width: $mqSize) {
            justify-content: space-between;

        }
    }


    div[data-nav-categories] {
        gap: calc(3 * var(--p));


        button {
            padding: calc(var(--p) * 1.25) calc(var(--p) * 2);
            background: hsla(var(--blackHsl), 0.02);
            border: none;
            box-shadow: -2px 2px 1px -1px hsla(var(--blueHsl), 0.2);
            transition: 200ms ease;
            border-radius: var(--p);
            cursor: pointer;
            
            
            
            &:hover {
                box-shadow: -4px 4px 1px -1px hsla(var(--blueHsl), 0.2);
                transform: translateY(-3px);
                background: hsla(var(--blueHsl), 0.02);
            }
            
            
            &.active {
                background: hsla(var(--blueHsl), 0.9);
                color: var(--white);
            }
            
            
            &.active:hover {
                background: hsla(var(--blueHsl), 0.9);

            }



        }
    }



    [data-card-list] {
        margin-block-start: var(--p-5);
    }
}
</style>