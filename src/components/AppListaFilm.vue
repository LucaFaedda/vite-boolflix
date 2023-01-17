<script>
import { store } from '../store'
export default {
    props:{
        film:Object
    },
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <div>
        <ul>
            <li>
                <p>{{ film.original_title}}</p> 
                <p>{{film.title}} </p>
                <p>{{film.original_language}}</p>
                <p>{{film.vote_average}}</p>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/variabiles' as *;
@use '../styles/partials/mixin' as *;

    
</style>