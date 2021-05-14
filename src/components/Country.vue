<template>
  <div id="country">
      <div class="card">
          <div>
              <img :src="country.flag " alt="" class=" w-100">
          </div>
          <div class="card-body">
              <h1>{{country.name}}</h1>
              <p class="text-muted">{{country.region}}</p>
              <p>Population: {{country.population}}</p>
              <p>Currency: {{country.currencies[0].code}}</p>
          </div>
          <div class="card-footer">
             <span class="float-left ml-1">Negighborrs:</span> <span class="float-left ml-1" v-for="border in country.borders" :key="border">{{border}},</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        country(){
            return this.$store.getters.getCountry
        }
    }
}
</script>

<style>

</style>