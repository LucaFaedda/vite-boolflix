<script>
import { store } from '../store'

export default {

    props:{
        film:Object
    },
    data(){
        return{
            store,
        }
    },
    computed:{
        voto(){
            return Math.round(this.film.vote_average/2)
        }
    },
}
</script>
<template lang="">
    <div class="card">
        <img :src="`https://image.tmdb.org/t/p/w154/${film.poster_path}`" :alt="film.name" class="image-card">
        <div class="lista">
            <ul class="unstyled-list">
                <li>
                    <p>Titolo originale:{{ film.original_title}}</p> 
                    <p>Titolo{{film.title}} </p>
                    <img :alt="film.title" :src="`https://unpkg.com/language-icons/icons/${film.original_language}.svg`">
                    <p >Voto:<i v-for="item in voto" class="fa fa-2x fa-star">{{item.voto}}</i></p>
                    <p>Plot: {{film.overview}} </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variabiles' as *;
@use '../styles/partials/mixin' as *;
        .card{
            width: calc(100% / 5);
            &:hover{
                .lista{
                    display: block;
                }
                .image-card{
                    display: none;
                }
            }
        }
        .unstyled-list{
            list-style: none;
        }

        .lista{
            display:none;
            img{
                width: 20px;
            }
        }

    
</style>