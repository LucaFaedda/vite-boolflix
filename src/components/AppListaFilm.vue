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
    methods: {
        changeLanguage(){
            if(original_language == 'en'){
                this.original_language == 'gb'
            }
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
                <CountryFlag :country="film.original_language" size="normal"/>
                <p>{{film.vote_average}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variabiles' as *;
@use '../styles/partials/mixin' as *;

    
</style>