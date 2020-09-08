<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background: #efefef;
}
#app {
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #585858;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #b94242;
    font-size: 1.5em;
    text-decoration: none;

    &.router-link-exact-active {
      color: #b94242;
    }
  }
}
</style>
