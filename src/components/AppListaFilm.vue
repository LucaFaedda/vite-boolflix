<script>
import { store } from '../store'
import CountryFlag from 'vue-country-flag-next'


export default {
    components:{
        CountryFlag,

    },
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
        <img :src="`https://image.tmdb.org/t/p/w154/${film.poster_path}`" :alt="film.name">
        <div class="lista">
            <ul class="unstyled-list">
                <li>
                    <p>{{ film.original_title}}</p> 
                    <p>{{film.title}} </p>
                    <img alt="" :src="`https://unpkg.com/language-icons/icons/${film.original_language}.svg`">
                    <!-- <CountryFlag :country="film.original_language === 'en' ? 'gb' : ''" size="normal"/> -->
                    <p ><i v-for="item in voto" class="fa fa-2x fa-star">{{item.voto}}</i></p>
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
                img{
                    display: none;
                }
            }
        }
        .unstyled-list{
            list-style: none;
        }

        .lista{
            display:none;
        }

    
</style>