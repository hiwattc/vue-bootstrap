<template>
  <div id="app">
    <div>
      <button @click="makeExcelFile5">Excel5</button>
    </div>
  </div>
</template>

<script>
//import Xlsx from 'xlsx'
import * as Xlsx from 'xlsx'

export default {
  name: 'App',
  data () {
    return {
      data1: [
        {
          mode: 1,
          affinity: 0.5,
          lb: 1.34,
          ub: 2.53,
          pUrl: "purl1",
          qUrl: "qurl1"
        },
        {
          mode: 2,
          affinity: 1.5,
          lb: 13.34,
          ub: 2.453,
          pUrl: "purl2",
          qUrl: "qurl2"
        }
      ]
    }
  },
  methods: {
    makeExcelFile5 () {
      const workBook = Xlsx.utils.book_new()
      const workSheet = Xlsx.utils.json_to_sheet(this.data1)
      Xlsx.utils.book_append_sheet(workBook, workSheet, 'example')
      Xlsx.writeFile(workBook, 'example.xlsx')
    }
  }
}
</script>

<style>
</style>