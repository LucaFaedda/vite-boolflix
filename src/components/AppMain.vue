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
        }

      }

}
</script>
<template lang="">
<div>
    <main>
        <AppListaFilm v-for="(item, index) in store.movies " :key="index" :film="item"></AppListaFilm>
        <AppListaSerie v-for="(item, index) in store.serieTv" :key="index" :serie="item"></AppListaSerie>
    </main>
</div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;

    main{
        display: flex;
        flex-wrap: wrap;
     
    }

</style>