<script>
import { store } from '../store'

export default {

    props:{
        film:Object
    },
    data(){
        return{
            store,
        }
    },
    computed:{
        voto(){
            return Math.round(this.film.vote_average/2)
        }
    },
    methods:{
        showPlot(){
            store.display =! store.display
        }        

    }
    
    
}
</script>
<template lang="">
    
    <div class="card">
        <div v-if="film.poster_path == null" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUQh4r7h-_HeIQImUej9vmTHOfrPPg9n58w&usqp=CAU" class = "not-found" alt="notfound">
        </div>
        <div v-else>
            <img :src="`https://image.tmdb.org/t/p/w154/${film.poster_path}`" :alt="film.name" class="image-card">

        </div>
        <div class="lista">
            
            <ul class="unstyled-list">
                <li>
                    <p><h4>Titolo:</h4> {{film.title}} </p>
                    <p><h4>Titolo originale:</h4>{{ film.original_title}}</p> 
                    <img :alt="film.title" :src="`https://unpkg.com/language-icons/icons/${film.original_language}.svg`">
                    <p ><h4>Voto:</h4><i v-for="item in voto" class="fa fa-2x fa-star">{{item.voto}}</i></p>
                    <div>
                        <h4>Plot:</h4>
                        <div v-if="store.display"><span >{{film.overview.substr(0, 40)}}.... </span><span class="color" @:click="showPlot()">read more </span></div>
                        <div v-else @:click="showPlot()" class="pointer">{{film.overview}}</div>
                    </div>
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
            width: calc(100% / 8 - 10px);

            i{
                color:yellow
            }

            &:hover{
                .lista{
                    display: block;
                    font-size: 14px;
                    
                }
                .image-card, .not-found{
                    display: none;
                }
            }
            .image-card{
                width: 100%;
            }
            
            .not-found{
                    width: 100%;
                }
     
            .unstyled-list{
                list-style: none;
                margin: 4rem 0rem;
            }
    
            .lista{
                display:none;
                color: #fff;
                img{
                    width: 20px;
                }
                h4, .color{
                    color: $redcolor;
                }
            }
        }

    
</style>