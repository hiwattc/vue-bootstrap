<template>
  <div>
      <div v-for="user in users" v-bind:key="user.id">
      <h5>{{user.name}}</h5>
      </div>
    <div>
      <button @click="makeExcelFile">Excel</button>
    </div>
  </div>

</template>


<script>
//import Xlsx from 'xlsx'
import * as Xlsx from 'xlsx'
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
  },
  methods: {
    makeExcelFile () {
      const workBook = Xlsx.utils.book_new()
      const workSheet = Xlsx.utils.json_to_sheet(this.users)
      Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
      Xlsx.writeFile(workBook, 'example.xlsx')
    }
  }

}
</script>
