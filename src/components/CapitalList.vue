<template>
  <div id="capitalList" >
      <ul class="list-group list-group">
          <capital-item v-for="capital in getCapitals" :key="capital" :capital="capital" ></capital-item>
      </ul>
  </div>
</template>

<script>
import CapitalItem from './CapitalItem.vue'
export default {
    components:{
        CapitalItem
    },
    computed:{
        getCapitals(){
            return this.$store.getters.getCapitals
        }
    }
}
</script>

<style>

</style>