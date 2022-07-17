<template>
  <div>
  	<div v-for="rowdata in jsondata">
    <h3><a v-bind:href="rowdata.homepage">{{rowdata.title}}</a></h3>
    <h3>{{rowdata.release_date}}</h3>
    
    <h4><a v-bind:href="rowdata.homepage">{{rowdata.homepage}}{{rowdata.poster_path}}</a></h4>
    <h5>{{rowdata.overview}}</h5>
    <p>{{rowdata}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jsondata from '../assets/movie.json'

export default {
  data() {
    return {
      jsondata: []
    }
  },
  created() {
    var vm = this;
    this.jsondata = jsondata;
    // promise 기반 객체
    /*
    axios.get('/movie.json')
    .then(function(response){
      console.log(response);
      vm.jsondata = response;
     //alert(vm.users);
    })
    .catch(function(error){
      console.log(error);
    })
    */
  }
}
</script>