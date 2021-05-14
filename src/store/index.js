import { createStore } from 'vuex'
export default createStore({
  state(){
    return{
       capitals:[
         "Baku",'Ankara','Moscow','Paris','Madrid'
       ],
       country:null,
       showCountry:false
    }
  },

  mutations: {
    findCapital(state,payload){
      state.capitals.push(payload[0].capital)
    },
    findCountry(state,payload){
      state.country=payload
      console.log(state.country);
    },
    isShowCountry(state){
      state.showCountry=true;
    },
    deleteCapital(state,payload){
       let index=state.capitals.findIndex(capital=>payload.includes(capital))
       state.capitals.splice(index,1)
       state.country=null
    }
  },
  actions: {
   async findCapital(context,payload){
     var res= await fetch(`https://restcountries.eu/rest/v2/capital/${payload}`,{method:"GET"});
     var data=await res.json()

     console.log(data);
     if(!res.ok){
       let error =new Error(data.message || 'Capiatal not found');
       throw error;
     }
     context.commit('findCapital',data)
    },
    deleteCapital(context,payload){
      context.commit('deleteCapital',payload.value)
    },
    async findCountry(context,payload){
      var res= await fetch(`https://restcountries.eu/rest/v2/all`,{method:"GET"});
      var datas=await res.json()
      console.log(datas.length)
      if(!res.ok){
        let error =new Error(datas.message || 'Country not found');
        throw error;
      }
      for (let i= 0; i< datas.length; i++) {
        if(payload.value.includes(datas[i].capital) && datas[i].capital!=""){
          context.commit('findCountry',datas[i])
          // console.log(datas[i]);
      }
      }
     },
     isShowCountry(context){
      context.commit('isShowCountry')
     }
  },
  getters:{
    getCapitals(state){
        return state.capitals
    },
    getCountry(state){
      return state.country
    },
    showCountry(state){
      return state.showCountry
    }
  }
})
