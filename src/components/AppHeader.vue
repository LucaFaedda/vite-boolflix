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
  <header>
    <div class="searchbar">
        <input v-model="store.searchFilm" @keyup.enter="cerca" placeholder="Cerca Film/Serie Tv">
        <button @click="cerca">Cerca</button>
        <div>
            <AppListaFilm v-for="(item, index) in store.movies " :key="index" :film="item"></AppListaFilm>
            <AppListaSerie v-for="(item, index) in store.serieTv" :key="index" :serie="item"></AppListaSerie>
        </div>
    </div>
</header>
</template>
<style lang="scss">
  @use '../styles/partials/variabiles' as *;
  @use '../styles/partials/mixin' as *;
  header{
    margin: 2rem 1rem;
  }
  .searchbar{
    padding: 20px;
    background-color: #fff;

    input{
        padding: 15px;
        border-radius: 10px;
    }

    button{
        margin-left: 10px;
        background-color: lightblue;
        padding: 5px 10px;
        border: 1px solid;
        border-radius: 15px;
    }
  }


</style>