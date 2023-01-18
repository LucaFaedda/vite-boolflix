<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios'
import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain,
    },
    data(){
      return{
        store
      } 
    },
    methods:{
      searchFilm(){
        let newUrl =`${store.urlFilm}${store.searchFilm}`
        console.log(newUrl)
        axios.get(newUrl).then((response)=>{
        store.movies = response.data.results
        console.log(store.movies)
        })

        let newUrlSerie=`${store.urlTV}${store.searchFilm}`
        console.log(newUrlSerie)
        axios.get(newUrlSerie).then((response)=>{
        store.serieTv = response.data.results
        console.log(store.serieTv)
        })
      },
    }

      
  }
</script>
<template lang="">
  <div>
    <AppHeader @search="searchFilm" ></AppHeader>
    <AppMain></AppMain>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/mixin' as *;
  @use './styles/partials/variabiles' as *;

</style>