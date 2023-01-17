<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios'
import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain,
      AppFooter
    },
    data(){
      return{
        store
      } 
    },
    created(){
      this.searchFilm()
    },
    methods:{
      searchFilm(){
        let newUrl =`${store.url}${store.searchFilm}`
        console.log(newUrl)
        axios.get(newUrl).then((response)=>{
        store.movies = response.data.results
        console.log(store.movies)
        })
      },
    }

      
  }
</script>
<template lang="">
  <div>
    <AppHeader @search="searchFilm" ></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/mixin' as *;
  @use './styles/partials/variabiles' as *;

</style>