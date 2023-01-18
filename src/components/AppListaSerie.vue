<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    components:{
        CountryFlag
    },
    props:{
        serie:Object
    },
    computed:{
        voto(){
            return this.serie.vote_average/2
        }
    },
}
</script>
<template lang="">
    <div>
        <ul>
            <li>
                <p>{{ serie.original_name}}</p> 
                <p>{{serie.name}} </p>
                <CountryFlag :country="serie.original_language === 'en' ? 'gb' : ''" size="normal"/>
                <p>{{voto}}</p>
                <img :src="`https://image.tmdb.org/t/p/w154/${serie.poster_path}`" :alt="serie.name">
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;
    
</style>