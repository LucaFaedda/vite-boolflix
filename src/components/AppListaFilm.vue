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
            store
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
                <p>{{film.vote_average}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variabiles' as *;
@use '../styles/partials/mixin' as *;

    
</style>