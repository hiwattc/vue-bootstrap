<template>
  <div>
  	<div v-for="user in users">
    <h5><a v-bind:href="user.url">{{user.title}}</a></h5>
    <p>{{user}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    var vm = this;
    // promise 기반 객체
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function(response){
      console.log(response);
      vm.users = response.data;
     //alert(vm.users);
    })
    .catch(function(error){
      console.log(error);
    })
  }
}
</script>