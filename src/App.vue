<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
  export default {
    components:{
      AppHeader,
      AppMain,
      AppFooter
    }
      
  }
</script>
<template lang="">
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>
<style lang="scss">
  @use './styles/general.scss' as *;
  @use './styles/partials/mixin' as *;
  @use './styles/partials/variabiles' as *;

</style>