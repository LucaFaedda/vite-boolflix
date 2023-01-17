<script>
import { store } from '../store'
import axios from 'axios'
  export default {
      data(){
        return{
            store,
            search: ''
        }
      }

  }
</script>
<template lang="">
  <header>
    <div class="searchbar">
        <input v-model="search" placeholder="Cerca Film/Serie Tv">
        <button>Cerca</button>
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