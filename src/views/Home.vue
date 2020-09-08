<style scoped lang="scss">
  .home {
    margin: 0 10%;
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
      height: fit-content;
      border: 1px solid #d4d4d4;
      border-radius: 3px;
      margin: 20px 10px;
      padding: 10px 20px;
      box-shadow: -2px -1px 12px 5px #b8b8b8bf;
      text-align: left;
      border-radius: 3px;
      background: #f7f7f7;
    }
    h2, h3, p{
      margin: 0 0 5px 0;
    }
    h2 {
      color: #128ddf;
    }
    h3 {
      color: #b94242;
    }
    .pointer {
      cursor: pointer;
    }
  }
</style>

<template>
  <div class="home">
    <div class="row">
      <div class="row-item">
        <h2>Welcome to The C0de Z0ne</h2>
        <p>
          <strong>Disclaimer:</strong>The purpose of this domain it to demonstrate Front End Engineering knowledge and ability. 
          It is a relatively new perpetual work in progress.
          While in it's early phases some concepts may have been implemented for demonstrative purpose over actual necessity.
        </p>
      </div>
    </div>
    <div class="row">
      <router-link to="/listings" tag="div" class="row-item pointer">
        <h3>List Demo</h3>
        <p><strong>Currently:</strong> Demonstrates VueJS, Custom UI, getting data from VueX, passing objects as props, Vue Router.</p>
        <p><strong>Todo:</strong> Filter and sort List.</p>
      </router-link>
    </div>
    <div class="row">
      <router-link to="/pig" tag="div" class="row-item pointer">
        <h3>Pig Dice Game</h3>
        <p><strong>Currently:</strong> Demonstrates VueJS, getting and mutating data from VueX, event dispatch component communication, Vue Router.</p>
        <p><strong>Todo:</strong> Pretty much everything.</p>
      </router-link>
    </div>
    <div class="row">
      <div class="row-item">
        <h3>More Stuff on CodePen</h3>
        <p>Managed to play around some in between full time jobs.</p>
        <p><a href="https://codepen.io/w3bappd3v">https://codepen.io/w3bappd3v</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>
