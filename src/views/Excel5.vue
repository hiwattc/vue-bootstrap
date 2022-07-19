<template>
  <div>
      <!--
      <div v-for="data in datas" v-bind:key="data.id">
      <h5>{{data.title}}</h5>
      </div>
       -->
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search" @click="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Search terms" v-model="srchStr" @keydown.enter="search"></b-form-input>
    </b-input-group>

    <div>
      <button @click="search">Search</button>
      <button @click="makeExcelFile">Excel</button>
    </div>
    <div>
    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
      <b-form-select
        id="table-style-variant"
        v-model="apikind"
        :options="apikinds"
        @change="search"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>
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
      datas: [],
      apikinds: [
          '/posts',
          '/comments',
          '/albums',
          '/photos',
          '/todos',
          '/users'
        ],
      apikind: '',
      srchStr: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false'
    }
  },
  created() {
      var vm = this;

      // promise 기반 객체
      /*
      /posts	100 posts
      /comments	500 comments
      /albums	100 albums
      /photos	5000 photos
      /todos	200 todos
      /users	10 users
      */
      var urlBaseStr = "https://jsonplaceholder.typicode.com";      
      axios.get(urlBaseStr+"/posts")
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
    },
    search() {
      var vm = this;
      var urlBaseStr = "https://jsonplaceholder.typicode.com";      
      //alert(urlBaseStr+this.apikind);
      if (this.srchStr == ""){
        this.srchStr = urlBaseStr+this.apikind;
      }
      //alert(this.srchStr);
      axios.get(this.srchStr)
      .then(function(response){
        console.log(response);
        vm.datas = response.data;
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>
