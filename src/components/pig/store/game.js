import Vue from 'vue';
import Vuex from 'vuex';

import game from '../data/game';

Vue.use(Vuex);

const state = {
  game: game
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