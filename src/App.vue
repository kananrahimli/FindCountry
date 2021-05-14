<template>
  <div>
    <search></search>
    <div class="row  mx-1">
      <capital-list class="col-md-6 my-2"></capital-list>
      <country v-if="showCountry && country" class="col-md-6 my-2"></country>
    </div>
    
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import CapitalList from "./components/CapitalList.vue";
import Country from "./components/Country.vue";
export default {
  name: "App",
  components: {
    Search,
    CapitalList,
    Country
  },
  computed:{
    showCountry(){
      return this.$store.getters.showCountry
    },
    country(){
      return this.$store.getters.getCountry
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
