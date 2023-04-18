<script lang="ts" setup></script>


<template>

<section data-profile class="flex-flow">
    
    <div class="image">
        <img src="/dummy/003.png" alt="Alt Text">
        <span data-badge title="Author">A</span>
    </div>

    <div class="grid-flow" data-profile-content>
        <strong class="heading-text" data-profile-name>
            Eren Yaeger
        </strong>

        <span class="flex-flow" data-email>
            <Icon icon="fa-solid fa-envelope" />
            eren@aot.com
        </span>

        <p data-profile-bio>
            I'm a mysterious individual yet to fill my bio, but one thing'd for certain; I love reading 
        </p>


        <button class="flex-flow heading-text">
            <Icon icon="fa-solid fa-pencil" />
            Edit Profile
        
        </button>



    </div>
</section>
</template>


<style lang="scss">

@use "../../scss/base" as *;

section[data-profile].flex-flow {
    grid-column: 1 / -1;

    padding-block: var(--size-2);
    flex-direction: column;







    & > .image, .image img {
        --_dimension: 200px;
        width: var(--_dimension); 
        height: var(--_dimension);
        
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 auto;
        outline: 5px solid hsla(var(--blueHsl), 0.5);
        outline-offset: -5px;
    }


    @media (min-width: $mqSize) {
        grid-column: 2 / -2;
        flex-direction: row;
        align-items: flex-start;
        // align-items: center;


        & > .image, .image img { 
            --_dimension: min(20vw, 50vh);
            border-radius: var(--size-3);
        }
    }

    & > .image {
        position: relative;


        span[data-badge] {
            position: absolute;
            inset: auto auto calc(var(--_dimension) * 0.1) calc(var(--_dimension) * 0.05);
            padding: var(--p) var(--p-3);
            background: hsla(var(--blueHsl), 0.9);
            border-radius: var(--size-4);
            font-family: var(--heading-font);
            color: var(--white);
            cursor: pointer;
            transition: 200ms cubic-bezier(0.58,-0.02, 0, 1.49);
            // transition: 





            &:hover {
                box-shadow: 0 0 3px -1px hsla(var(--blackHsl), 0.2);
                transform: translateY(-2px)

            }

            @media (min-width: $mqSize) {
                inset: auto auto calc(var(--_dimension) * -0.04) 50%;
                transform: translateX(-50%);


                &:hover {
                    transform: translateX(-50%) translateY(-2px);
                    
                }
            }

        }
    }




    [data-profile-content].grid-flow {
        
        gap: calc(var(--p) * 3.5);
        padding: var(--p) var(--p-2);
        text-align: center;
        justify-items: center;
        flex-grow: 1;


        @media (min-width: $mqSize) {
            gap: calc(var(--p) * 2.5);
            justify-items: start;
            padding: none;
            text-align: left;
        }




        strong {
            // font-family: var(--);
            font-size: var(--size-2);
        }



        [data-email].flex-flow {
            font-weight: bold;
            color: hsla(var(--blackHsl), 0.7);
            align-items: center;
            gap: calc(var(--p) * 1)
        }

        [data-profile-bio] {
            color: hsla(var(--blackHsl), 0.7);
            font-style: italic;
            font-size: calc(var(--size-1) * 0.75);
            margin-block-start: calc(var(--p-1) * 0.5);
        }




        button {
            margin-block-start: calc(var(--p-2) * 0.75);
            align-items: center;
            background: hsla(var(--blueHsl), 0.7);
            // border: 0;
            padding: var(--p-1) var(--p-4);
            color: var(--white);
            border-radius: var(--size-1);

            @media (min-width: $mqSize) {
                padding: calc(var(--p-1) * 0.5) var(--p-4);

            }


            &:hover, &:focus {
                background: hsla(var(--blueHsl), 1);
                
            }
            // justify-content: center;
        }

    }
}


</style>
