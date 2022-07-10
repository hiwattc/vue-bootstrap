<template>
  <div id="axapp">
    <div v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h5><a href="https://jsonplaceholder.typicode.com/posts">{{post.title}}</a></h5>
        <p>{{post.userid}}</p>
      </div>
    </div>
    <button v-else v-on:click="searchTerm">글 불러오기</button>
  </div>
</template>

<script>
export default {
  name: 'axapp',
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function () {
      // using JSONPlaceholder
      const baseURI = 'https://jsonplaceholder.typicode.com';
      this.$http.get(`${baseURI}/posts`)
      .then((result) => {
        console.log(result)
        this.posts = result.data
        //alert(this.posts);
      })
    }
  }
}
</script>
