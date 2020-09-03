<script>
  import store from '../components/listings/store/listings'
  // import Filterbar from "../Filterbar.svelte";
  // import Listing from "./Listing.svelte";

  export default {
    computed: {
      listings () {
        return store.getters.listings;
      }
    },
    methods: {
      filterList (event) {
        let strToMatch = event.detail.text.toLowerCase().replace(/\s/g, '');
        let numCount = 0;
        for(let i=1; i<strToMatch.length; i++){
        if(/^\d+$/.test(strToMatch[i])){
            numCount++;
        }
        }
        if(numCount == strToMatch.length-1){
        strToMatch = parseInt(strToMatch);
        }
        return this.listings.filter(x => x.address.toLowerCase().includes('123'));
      }
    }
  }
</script>

<style scoped>
  .listings {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<template>
  <div>
    <h1>Listings</h1>
    <p>{{ listings[3].address }}</p>
  </div>
</template>
