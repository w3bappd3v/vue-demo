<script>
  export default {
    name: 'Async',
    data () {
      return {
        info: ''
      }
    },
    methods: {
      fetchInfo () {
        this.info = "Fetching info..."
        this.$http.get('https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/year')
            .then(response => {
              this.info = response.bodyText;
            })
            .catch(error => console.log(error));
      }
    }
  }
</script>

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
</style>

<template>
  <div class="async">
    <button @click="fetchInfo">FETCH INFO</button>
    <div class="info">
      <h3>{{ info }}</h3>
    </div>
  </div>
</template>