import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  game: {
    scores: [0, 0],
    roundScore: 0,
    activePlayer: 0,
    gamePlaying: false,
    title: 'Pig'
  }
};

const getters = {
  game: state => {
      return state.game;
  }
};

const mutations = {
  'UPDATE_SCORE'(state, score) {
      state.game.roundScore = score;
  }
}

const actions = {
  updateScore({commit}, score) {
      commit('UPDATE_SCORE', score);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})