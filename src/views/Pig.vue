<script>
  import store from '../store/modules/game'
  
  export default {
    computed: {
      game () {
        return store.getters.game;
      }
    },
    methods: {
      updateScore (score) {
        score++;
        store.dispatch('updateScore', score);
      }
    }
  }
</script>

<template>
  <div class="pig-game">
    <h3>Pig Component</h3>
    <p>{{ game.title }}</p>
    <p>{{ game.roundScore }}</p>
    <button @click="updateScore(game.roundScore)">INCREMEMT</button>
  </div>
</template>

<style scoped lang="scss">
  .pig-game {
      border: 1px solid #7c7c7c;
      border-radius: 5px;
      background: #acacac;
      padding: 10px;
      margin-top: 10px;
  }
</style>
