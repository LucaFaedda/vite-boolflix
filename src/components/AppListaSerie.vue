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
            <img :src="`https://image.tmdb.org/t/p/w154/${serie.poster_path}`" :alt="serie.name" class="image-card">
            <div class="lista">
                <ul class="unstyled-list">
                    <li>
                        <p><h4>Titolo:</h4> {{serie.name}} </p>
                        <p><h4>Titolo originale:</h4>{{ serie.original_name}}</p> 
                        <img :alt="serie.title" :src="`https://unpkg.com/language-icons/icons/${serie.original_language}.svg`">
                        <p ><h4>Voto:</h4><i v-for="item in votoserie" class="fa fa-2x fa-star">{{item.votoserie}}</i></p>
                        <p><h4>Plot:</h4>{{serie.overview.substr(0, 40)}}  </p>
                        
                    </li>
                </ul>
            </div>
        </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;

        .card{
            margin: 5px;
            width: calc(100% / 5 - 10px);
            border:1px solid black ;
            &:hover{
                .lista{
                    display: block;
                }
                .image-card{
                    display: none;
                }
            }
            .image-card{
                width: 100%;
            }
        }
        .unstyled-list{
            list-style: none;
        }

        .lista{
            display:none;
            color: #fff;
            img{
                width: 20px;
            }
            h4{
                color: rgb(160, 50, 16);
            }
        }

  
</style>