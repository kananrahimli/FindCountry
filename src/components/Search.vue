<template>
  <div id="search " class="my-3 mx-3 d-flex flex-wrap">
    <div class="input-group ">
      <input
        type="text"
        class="form-control"
        placeholder="enter capital..."
        v-model="capital"
      />
      <div class="input-group-append ">
        <button v-if="!loading" class="btn btn-primary" @click="search">Search</button>
        <p v-if="loading">Searching...</p>
      </div>
    </div>
    <p class="mt-3" v-if="!!error">{{error}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            capital:'',
            loading:false,
            error:''
        }
    },
    computed:{
       
    },

    methods:{

        async search(){
            this.loading=true;
            if(this.capital===""){
                this.loading=false
                this.error="Please enter capital"
                return
            }
            
            try {
              await this.$store.dispatch('findCapital',this.capital) 
              this.error=null;
            } catch (error) {
                this.error=error.message
            }
            this.loading=false;
        }
    }
};
</script>

<style></style>
