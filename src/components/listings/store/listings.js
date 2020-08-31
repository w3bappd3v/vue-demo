import Vue from 'vue';
import Vuex from 'vuex';

import listings from '../data/listings';

Vue.use(Vuex);

const state = {
  listings: listings
};

const getters = {
  listings: state => {
      return state.listings;
  }
};


export default new Vuex.Store({
  state,
  getters
})