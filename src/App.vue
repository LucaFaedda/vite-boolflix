<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppTrend from './components/AppTrend.vue';
import axios from 'axios'
import { store } from './store';
  export default {
    components:{
      AppHeader,
      AppMain,
      AppTrend
    },
    data(){
      return{
        store
      } 
    },
    created(){
      this.trendFilm
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

        store.loader = true
      },
      
    },
    computed:{
        trendFilm(){
          axios.get(store.urlTrendingFilm).then((response)=>{
            store.trendingFilm = response.data.results
            console.log(store.trendingFilm)
          })
      }
  }}
</script>
<template lang="">
  <div>
    <AppHeader @search="searchFilm" ></AppHeader>
    <div v-if="store.loader === false"><AppTrend></AppTrend></div>
    <div v-else>
      <AppMain></AppMain>
    </div>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/mixin' as *;
  @use './styles/partials/variabiles' as *;

</style>