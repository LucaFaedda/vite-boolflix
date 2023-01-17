<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    components:{
        CountryFlag
    },
    props:{
        serie:Object
    }
}
</script>
<template lang="">
    <div>
        <ul>
            <li>
                <p>{{ serie.original_name}}</p> 
                <p>{{serie.name}} </p>
                <CountryFlag :country="serie.original_language === 'en' ? 'gb' : ''" size="normal"/>
                <p>{{serie.vote_average}}</p>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;
    
</style>