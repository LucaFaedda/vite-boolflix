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
    <div class="col-4">
        <img src=https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158 al="logo-netflix">
    </div>
    <div class="col-6">
        <input v-model="store.searchFilm" @keyup.enter="cerca" placeholder="Search Movies or Series ">
        <button @click="cerca">Search</button>
    </div>

</header>
</template>
<style lang="scss" scoped>
  @use '../styles/partials/variabiles' as *;
  @use '../styles/partials/mixin' as *;
  header{
    width: 100%;
    height: 75px;
    @include d-flex-center;
    justify-content: space-between;
    background-color: rgb(19, 18, 18);
        .col-4{
            width: 40%;
            @include d-flex-center;
            @include margin-lr-2rem;
            img{
                width: 30%;
            }

        }
        .col-6{
            width: 60%;
            @include d-flex-center;
            @include margin-lr-2rem;
            justify-content: right;
            input{
              padding: 5px 10px;
              outline: none;                
            }
        
            button{
                background-color: #fff;
                padding: 6px 10px;
                border: 1px solid;
                margin-left: 5px;
                &:hover{
                  cursor: pointer;
                  background-color: lightgray;
                }
            }

        }
    

  }


</style>