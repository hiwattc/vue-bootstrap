<template>
  <div>
      <!--
      <div v-for="data in datas" v-bind:key="data.id">
      <h5>{{data.title}}</h5>
      </div>
       -->
    <div>
      <button @click="makeExcelFile">Excel</button>
    </div>
  <div>
    <b-table hover :items="datas"></b-table>
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
      datas: []
    }
  },
  created() {
      var vm = this;
      // promise 기반 객체
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function(response){
        console.log(response);
        vm.datas = response.data;
      })
      .catch(function(error){
        console.log(error);
      })
  },
  methods: {
    makeExcelFile () {
      const workBook = Xlsx.utils.book_new()
      const workSheet = Xlsx.utils.json_to_sheet(this.datas)
      Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
      Xlsx.writeFile(workBook, 'example.xlsx')
    }
  }

}
</script>
