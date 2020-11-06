<script>
  export default {
    name: 'Async',
    data () {
      return {
        info: []
      }
    },
    methods: {
      fetchInfo () {
        this.info = ["Fetching info..."];
        Promise.all ([
          fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/year')
            .then(stream => stream.text())
            .catch(error => console.error(error)),
          fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/year')
            .then(stream => stream.text())
            .catch(error => console.error(error))
        ]).then(results => {
          this.info = results;
        });
      }
    }
  }
</script>

<template>
  <div class="async">
    <button @click="fetchInfo">FETCH INFO</button>
    <div class="info" v-if="info.length">
      <h3 v-for="item of info" :key="item.key">{{ item }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h3 {
    color: #1f4f8f;
    // text-shadow: 0 1px 0 #313131;
  }
  .info {
    border: 1px solid #7c7c7c;
    border-radius: 5px;
    background: #f7f7f7;
    padding: 10px;
    margin: 10px 50px;
  }
  button {
    margin-top: 10px;
  }
</style>