<script>
import CountryFlag from 'vue-country-flag-next'

import { store } from '../store'
export default {
    components:{
        CountryFlag,
    },
    props:{
        serie:Object
    },
    data(){
        return{
            store,
            
        }
    },
    computed:{
        votoserie(){
            return Math.round(this.serie.vote_average/2)
        }
    },
}
</script>
<template lang="">
        <div class="card">
            <img :src="`https://image.tmdb.org/t/p/w154/${serie.poster_path}`" :alt="serie.name">
            <div class="lista">
                <ul class="unstyled-list">
                    <li>
                        <p>Titolo originale:{{ serie.original_name}}</p> 
                        <p>Titolo:{{serie.name}} </p>
                        <!-- <CountryFlag :country="serie.original_language === 'en' ? 'gb' : ''" size="normal"/> -->
                        <img alt="" :src="`https://unpkg.com/language-icons/icons/${serie.original_language}.svg`">
                        <p >Voto:<i v-for="item in votoserie" class="fa fa-2x fa-star">{{item.votoserie}}</i></p>
                        <p>Plot: {{serie.overview}} </p>
                        
                    </li>
                </ul>
            </div>
        </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;

        .card{
            width: calc(100% / 5);
            &:hover{
                .lista{
                    display: block;
                }
                img{
                    display: none;
                }
            }
        }
        .unstyled-list{
            list-style: none;
        }

        .lista{
            display:none;
        }

  
</style>