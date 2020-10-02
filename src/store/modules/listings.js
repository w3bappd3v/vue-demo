import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  listings: [
    {
      id: 1,
      address: "123 First Street",
      neighborhood: "Beverly Hills",
      price: "2,000,000",
      summary: "2BD, 2BA, 1200SF, CONDO",
      image: "listing-1"
    },
    {
      id: 2,
      address: "321 2nd Ave",
      neighborhood: "Harlem",
      price: "100,000",
      summary: "2BD, 2BA, 900SF, SINGLE-FAMILY",
      image: "listing-2"
    },
    {
      id: 3,
      address: "456 Third Street",
      neighborhood: "Withering Heights",
      price: "100,000,000",
      summary: "3BD, 2BA, 1100SF, CO-OP",
      image: "listing-3"
    },
    {
      id: 4,
      address: "654 Elm St",
      neighborhood: "Mr. Rodgers",
      price: "1,020,300",
      summary: "2BD, 2BA, 1200SF, CONDO",
      image: "listing-3"
    },
    {
      id: 5,
      address: "789 5th Street",
      neighborhood: "Malibu",
      price: "10,000,000",
      summary: "2BD, 2BA, 900SF, SINGLE-FAMILY",
      image: "listing-2"
    },
    {
      id: 6,
      address: "987 Sunset Blvd",
      neighborhood: "Hollywood",
      price: "9,000,000",
      summary: "3BD, 2BA, 1100SF, CO-OP",
      image: "listing-1"
    }
  ]
};

const getters = {
  listings: state => {
      return state.listings;
  }
};

const mutations = {
  'ADD_LISTING'(state, listing) {
    state.listings.push(listing);
  }
}

const actions = {
  addListing ({commit}, listing) {
    console.log('add');
    commit('ADD_LISTING', listing);
  }
}


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})