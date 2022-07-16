<template>
  <div id="app">
    <div>
      <table id="table">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>aa</td>
          <td>24</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bb</td>
          <td>46</td>
        </tr>
        <tr>
          <td>3</td>
          <td>cc</td>
          <td>84</td>
        </tr>
        </tbody>
      </table>
      <button @click="makeExcelFile4">Excel4</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    makeExcelFile4 () {
      let tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">'
      tab_text += '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">'
      tab_text += '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
      tab_text += '<x:Name>Test Sheet</x:Name>'
      tab_text += '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>'
      tab_text += '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>'
      tab_text += "<table>"
      const temp = document.getElementById('table').innerHTML
      // console.log(temp)
      tab_text += temp
      tab_text += '</table></body></html>'
      console.log(tab_text)
      const fileName = 'exampleTable.xls'
      const a_tag = document.createElement('a')
      const blob = new Blob([tab_text], { type: 'application/vnd.ms-excel;charset=utf-8;' })
      a_tag.href = window.URL.createObjectURL(blob)
      a_tag.download = fileName
      a_tag.click()
    }
  }
}
</script>