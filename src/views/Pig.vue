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

<style scoped>
 .pig-game {
     background: orange;
 }
</style>

<template>
  <div class="pig-game">
    <h3>Pig Component</h3>
    <p>{{ game.title }}</p>
    <p>{{ game.roundScore }}</p>
    <button @click="updateScore(game.roundScore)">Update</button>
  </div>
</template>
