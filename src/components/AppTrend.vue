<script>
import AppListaTrend from './AppListaTrend.vue';
import { store } from '../store';
export default {
    components:{
        AppListaTrend,
    },
    data(){
        return{
            store
        }
    }
}

</script>
<template lang="">
    <div class="container-trend">
        <AppListaTrend v-for="(item, index) in store.trendingFilm" :key="index" :trend="item"></AppListaTrend>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variabiles' as *;
    @use '../styles/partials/mixin' as *;

    h2{
        color: #fff;
    }
    .container-trend{
        flex-wrap: wrap;
        display: flex;
        width: 100%;
    }


    
</style>