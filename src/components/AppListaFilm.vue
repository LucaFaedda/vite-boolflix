<script>
import { store } from '../store'
import CountryFlag from 'vue-country-flag-next'
import StarRating from 'vue-star-rating'


export default {
    components:{
        CountryFlag,
        StarRating
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
            return this.film.vote_average/2
        }
    },
}
</script>
<template lang="">
    <div>
        <ul>
            <li>
                <p>{{ film.original_title}}</p> 
                <p>{{film.title}} </p>
                <CountryFlag :country="film.original_language === 'en' ? 'gb' : ''" size="normal"/>
                <img :src="`https://image.tmdb.org/t/p/w154/${film.poster_path}`" :alt="film.name">
               <p>{{voto}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variabiles' as *;
@use '../styles/partials/mixin' as *;

    
</style>