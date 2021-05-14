<template>
  <li class="list-group-item" ref="li" @click="countryRead" @keyup.enter="countryRead" >
    {{ capital }}
    <span class="close" @click="deleteCapital">X</span>
  </li>
</template>

<script>
export default {
  data() {
    return {
      selectedCapitalText: "",
      selectedCapital:null
    };
  },
  props: ["capital"],
  methods: {
    countryRead() {
      this.$store.dispatch("isShowCountry");
      this.$store.dispatch("findCountry", { value: this.$refs.li.textContent });
    },
    deleteCapital() {
      this.selectedCapitalText= this.$refs.li.textContent;
      this.$store.dispatch("deleteCapital", {
        value: this.selectedCapitalText,
      });
    },
  },
};
</script>

<style scoped>
li:hover {
  background-color: #0275d8;
  color: white !important;
}
.active {
  background-color: #0275d8;
}
</style>
