<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

  html{ height: 100vh; overflow: auto;}

  body {
    background: #979797;;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: auto;
  
  }
  #app {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    border: 1px solid #7e7e7e;
    color: #333333;
    height: fit-content;
    min-height: 100vh;
    margin: 0 auto;
    max-width: 1200px;
    border-top: none;
    border-bottom: none;
    min-width: 307px;
    padding: 20px;
    background: rgb(94,94,94);
    background: linear-gradient(313deg, rgba(94,94,94,1) 0%, rgba(152,152,152,1) 49%, rgba(255,255,255,1) 100%);
  }

  button {
    height: 36px;
    border: none;
    border-radius: 6px;
    background: #fff;
    padding: 0 20px;
    outline-color: #919191;
  }

  button:hover {
    background: #829fdd;
    cursor: pointer;
    color: #fff;
  }

  #nav {
    padding: 10px;

    a {
      font-weight: bold;
      color: $font-color-a;
      font-size: 1.5em;
      text-decoration: none;
      
      &.router-link-exact-active {
        color: $font-color-a;
      }
    }

    a:hover {
      text-shadow: 1px 1px 3px #9e9e9ebf;
    }

  }
  
</style>
