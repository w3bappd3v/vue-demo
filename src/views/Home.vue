<script>
  export default {
    name: 'Home',
    methods: {
      openTab: function (url) {
      window.open(url);
    }
    }
  }
</script>

<template>
  <div class="home">
    <div class="row">
      <div class="row-item" @click="openTab('https://github.com/w3bappd3v/vue-demo')">
        <h2>Welcome</h2>
        <h4>This is my Front End engineering demo domain written in VueJS.</h4>
        <p><strong>Source repository:</strong> https://github.com/w3bappd3v/vue-demo</p>
      </div>
    </div>
    <div class="row">
      <router-link to="/listings" tag="div" class="row-item">
        <h3>List Demo</h3>
        <h4>Renders a filterable list of items to which items can be added or removed.</h4>
        <p><strong>Demonstrates:</strong> Component Architecture, Custom UI, Custom Events, VueX Getter/Mutators, Props, List Filtering</p>
        <p><strong>Todo:</strong> List sorting</p>
      </router-link>
    </div> 
    <div class="row">
      <router-link to="/async" tag="div" class="row-item">
        <h3>Async HTTP</h3>
        <h4>Fetches and renders data from a public API</h4>
        <p><strong>Demonstrates:</strong> Fetch, Promise.all</p>
      </router-link>
    </div>
    <div class="row">
      <router-link to="/pig" tag="div" class="row-item">
        <h3>Pig Dice Game</h3>
        <p><strong>Demonstrates:</strong> Getting and mutating data from VueX, event dispatching</p>
        <p><strong>Todo:</strong> Pretty much everything.</p>
      </router-link>
    </div>
    <div class="row">
      <div class="row-item" @click="openTab('https://codepen.io/w3bappd3v')">
        <h3>More Stuff on CodePen</h3>
        <p><a>https://codepen.io/w3bappd3v</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    .row {
      display: flex;
      justify-content: flex-end;
    }
    .row:nth-child(odd){
      justify-content: flex-start;
    }
    .row:first-child, .row:last-child {
      justify-content: center;
    }
    .row-item {
      width: 50%;
      min-width: 250px;
      height: fit-content;
      border: 1px solid $border-color;
      border-radius: 5px;
      margin: 15px 10px;
      padding: 10px 20px;
      text-align: left;
      border-radius: 3px;
      background: #fcfcfc;
      cursor: pointer;
    }
    h2, h3, p{
      margin: 0 0 5px 0;
    }
    h2 {
      color: $font-color-b;
    }
    h3 {
      color: $font-color-a;
    }
    h4 {
      margin: 10px 0;
    }
    .row-item:hover {
      box-shadow: 0px 1px 8px -2px #6381b9;
    }
    p {
      color: #5c5c5c;
    }
  }
</style>
