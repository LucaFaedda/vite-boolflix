<script>
import { store } from '../store'
import AppListaFilm from './AppListaFilm.vue'
import AppListaSerie from './AppListaSerie.vue'

export default {
    components:{
        AppListaFilm,
        AppListaSerie
    },
    
    data(){
        return{
            store,
            

        }
      },
      methods:{
        cerca(){
            let word = store.searchFilm.toLowerCase()
            this.$emit('search' , word)
        },
      },
}
</script>
<template lang="">
<div>
    <!-- scriverre bene length -->
        <h2>Trovati {{store.movies.length }} Film</h2>
        <div class="container-film"> 
            <!-- contiene i film trovati     -->
            <AppListaFilm v-for="(item, index) in store.movies " :key="index" :film="item"></AppListaFilm>        
        </div>
        <h2>Trovati {{store.serieTv.length }} serieTv</h2>
        <div class="container-serieTv"> 
            <!-- contiene le serie tv trovate -->
            <AppListaSerie v-for="(item, index) in store.serieTv" :key="index" :serie="item"></AppListaSerie>
        </div>
</div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;

    h2{
        color: #fff;
    }
    .container-film, .container-serieTv{
        display: flex;
        flex-wrap: wrap;
    }


</style>