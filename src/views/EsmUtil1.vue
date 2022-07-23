<template>
  <div id="app" class="container col-md-8 col-md-offset-2">
    <h1>Vue Ping</h1>
    <table class="table table-stripped table-hover" id="cont-table">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>URL</th>
          <th>Port</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(site, index) in sites" v-bind:key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ site.name }}</td>
          <td><a v-bind:href="getHref(site)" target="_blank">{{ site.url }}</a></td>
          <td>{{ site.port }}</td>
          <td v-if="site.status"><span class="label label-success">LIVE</span></td>
          <td v-else><span class="label label-danger">DOWN</span></td>
        </tr>
      </tbody>
    </table>

    <footer>
      <h4>
          Source @ <a target="_blank" href="https://github.com/skadimoolam/ping">skadimoolam/ping</a>
      </h4>
    </footer>

  </div>

</template>



<script>
//import axios from 'axios';
import jsondata from '../assets/data.json'

export default {
data() {
        return {
          sites: []
        }
      },
      
      created: function () {
        this.loadData();
      },

      methods: {
        getHref: function (site) {
          if (!site.port) site.port = 80;
          return `https://${site.url}:${site.port}`;
        },

        loadData: function () {
          //alert("hi111");
          //alert(jsondata);
          this.sites = jsondata;
          this.getStatus();
        },

        getStatus: function () {
          let self = this;
          this.sites.forEach(function (site, index) {
            var url = `https://${site.url}`;
            //alert(url);
            if (site.port && site.port != 80 && site.port != 443) url += `:${site.port}`;
            if (site.port == 80){
              url = `http://${site.url}`;
            }

            fetch(url, { mode: 'no-cors'})
              .then((resp) => {
                site.status = true;
                //alert(url);
                if (!resp.ok || resp.status != 200) site.status = false;
                //alert(resp.status);
                //alert(resp);
                if (resp.type == "opaque") site.status = true;
                self.$set(self.sites, index, site);
              })
              .catch(error => {
                this.errorMessage = error;
                //alert(error);
                console.error("There was an error!", error);
              });
          })
        }
      }
}
</script>
