<template>
 <div>
  <h1>Vuejs Lifecycle function test</h1>
  <button @click="callRest">callRest</button>
  <button @click="callJson">callJson</button>


  <div>
    <b-form-group label="Table Options" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-checkbox v-model="striped" :aria-describedby="ariaDescribedby" inline>Striped</b-form-checkbox>
      <b-form-checkbox v-model="bordered" :aria-describedby="ariaDescribedby" inline>Bordered</b-form-checkbox>
      <b-form-checkbox v-model="borderless" :aria-describedby="ariaDescribedby" inline>Borderless</b-form-checkbox>
      <b-form-checkbox v-model="outlined" :aria-describedby="ariaDescribedby" inline>Outlined</b-form-checkbox>
      <b-form-checkbox v-model="small" :aria-describedby="ariaDescribedby" inline>Small</b-form-checkbox>
      <b-form-checkbox v-model="hover" :aria-describedby="ariaDescribedby" inline>Hover</b-form-checkbox>
      <b-form-checkbox v-model="dark" :aria-describedby="ariaDescribedby" >Dark</b-form-checkbox>
      <b-form-checkbox v-model="fixed" :aria-describedby="ariaDescribedby" inline>Fixed</b-form-checkbox>
      <b-form-checkbox v-model="footClone" :aria-describedby="ariaDescribedby" inline>Foot Clone</b-form-checkbox>
      <b-form-checkbox v-model="noCollapse" :aria-describedby="ariaDescribedby" inline>No border collapse</b-form-checkbox>
      <b-form-checkbox v-model="stickyHeader" :aria-describedby="ariaDescribedby" inline>stickyHeader</b-form-checkbox>
    </b-form-group>
    <b-form-group label="Head Variant" label-cols-lg="2" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="headVariant"
        :aria-describedby="ariaDescribedby"
        class="mt-lg-2"
      >
        <b-form-radio :value="null" inline>None</b-form-radio>
        <b-form-radio value="light" inline>Light</b-form-radio>
        <b-form-radio value="dark" inline>Dark</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
    <b-form-group label="Table Variant" label-for="table-style-variant" label-cols-lg="2">
      <b-form-select
        id="table-style-variant"
        v-model="tableVariant"
        :options="tableVariants"
      >
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>

    </b-form-group>
    <b-form-group label="Selection Mode" label-for="table-selection-variant" label-cols-lg="2">
      <b-form-select
        id="table-select-mode-select"
        v-model="selectMode"
        :options="modes"
        class="mb-3"
      ></b-form-select>      
    </b-form-group>
    <div>
     <p>
      Selected Rows:<br>
      {{ selected }}
    </p>      
     <p>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="clearSelected">Clear selected</b-button>
      <b-button size="sm" @click="selectThirdRow">Select 3rd row</b-button>
      <b-button size="sm" @click="unselectThirdRow">Unselect 3rd row</b-button>
    </p>
    </div>

    <div>
      <b-table  
      ref="selectableTable"

      :items="datas"

      :sticky-header="stickyHeader"
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :head-variant="headVariant"
      :table-variant="tableVariant" 
      
      :perPage="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"

      :select-mode="selectMode"
      selectable

      

      >
          <template #cell(address)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>

            <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
            <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
              Details via check
            </b-form-checkbox>
          </template>      
          <template #cell(company)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
            </b-button>

            <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
            <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
              Details via check
            </b-form-checkbox>
          </template>      

          <template #row-details="row">
            <!--<b-table hover :items="datas"> --> <!--OK-->
            <b-table hover :items="[row.item.address]"></b-table>
            <b-table hover :items="[row.item.company]"></b-table>

            <!--
            <b-card>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
                <b-col>{{ row.item.name }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Email:</b></b-col>
                <b-col>{{ row.item.email }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Address:</b></b-col>
                <b-col>{{ row.item.address }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Address.street:</b></b-col>
                <b-col>{{ row.item.address.street }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>Company:</b></b-col>
                <b-col>{{ row.item.company }}</b-col>
              </b-row>

              <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
            </b-card>
            -->

            <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
          </template>


      </b-table>
      <nav>
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
      </nav>

    </div>    
  </div>
 </div>
</template>



<script>
import jsondata from '../assets/movie.json'
import axios from 'axios';

export default {
  data() {
          return {
            datas: [],
            singleRow: [],
            tableVariants: [
              'primary',
              'secondary',
              'info',
              'danger',
              'warning',
              'success',
              'light',
              'dark'
            ],

            stickyHeader: false,
            striped: false,
            bordered: true,
            borderless: false,
            outlined: false,
            small: true,
            hover: true,
            dark: false,
            fixed: false,
            footClone: true,
            headVariant: 'dark',
            tableVariant: 'success',
            noCollapse: false,
            perPage:5,
            currentPage: 1,
            busy: false,
            modes: ['multi', 'single', 'range'],
            selectMode: 'multi',
            selected: []

          }
        },
  beforeCreate: function () {
    console.log("beforeCreated called...")
    //alert("beforeCreated called...");
  },
  created: function () {
    console.log("created called...")
    //alert("created called...");
  },
  beforeMount: function () {
    console.log("beforeMount called...")
    //alert("beforeMount called...");
  },
  mounted: function () {
    console.log("mounted called...")
    //alert("mounted called...");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate called...")
    //alert("beforeUpdate called...");
  },
  updated: function () {
    console.log("updated called...")
    //alert("updated called...");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy called...")
    //alert("beforeDestroy called...");
  },
  destroyed: function () {
    console.log("destroyed called...")
    //alert("destroyed called...");
  },

   watch: {
    currentPage(pageNum){
      this.busy = true;
      this.$emit('page-changed', {'pageNum': pageNum, 'pageSize': this.perPage});
    }
  },
  computed: {
    items: function() {
      const items =  this.datas;
      this.busy = false;
      return Array.isArray(items) ? items : items();
    },
    totalRows: function () { return this.getRowCount() },
    title: function() { return '<i class=\'fa fa-align-justify\'> ' + this.caption + ' </i>'; }
  },
  
  methods: {
      callJson () {
        this.datas = jsondata;
      },
      callRest () {
        var vm = this;
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
          console.log(response);
          vm.datas = response.data;
        })
        .catch(function(error){
          console.log(error);
        })
      },

      getRowCount: function () {
        return this.items.length
      },
      rowClicked (item) {
        console.log(item.name);
        this.selected = item;
        this.$emit('row-clicked', item);
      },

      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(2)
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }

    }
     
}
</script>
