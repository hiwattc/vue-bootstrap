<template>
  <div>
      <div v-for="user in users" v-bind:key="user.id">
      <h5>{{user.name}}</h5>
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
    axios.get('https://jsonplaceholder.typicode.com/users')
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