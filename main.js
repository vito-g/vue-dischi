/*Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.7
-----------------------------------------------------
Bonus (per oggi pomeriggio): Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
Chiamata:
https://flynn.boolean.careers/exercises/api/array/music
Layout base:
https://bitbucket.org/booleancareers/ex-dischi-musicali-layout*/


new Vue({
  el: '#app',
  data: {
    obj: '',
    objArray: []
  },
  mounted() {
    const self = this;
    console.log('ho montato l\'app');
  
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(function(resp) {
        console.log('risposta vue', resp.data);
        self.obj = resp.data.response;
        //Per ogni email generata, riempi l'array "emailList"
        self.objArray.push(self.obj);
      });


  }

})
Vue.config.devtools = true
