<script>
  import store from '../store/modules/listings'

  import Listing from "../components/listings/Listing";
  // import Filterbar from "../components/listings/Filterbar";
  

  export default {
    computed: {
      listings () {
        return store.getters.listings;
      }
    },
    components: {
      listing: Listing
      // filterbar: Filterbar
    },
    methods: {
      updateList (text) {
        console.log(this.listings);
        let strToMatch = text.toLowerCase().replace(/\s/g, '');
        let numCount = 0;
        for(let i=1; i<strToMatch.length; i++){
          if(/^\d+$/.test(strToMatch[i])){
            numCount++;
          }
        }
        if(numCount == strToMatch.length-1){
          strToMatch = parseInt(strToMatch);
        }
        console.log(strToMatch)
        this.listings.filter(x => x.address.toLowerCase().includes(strToMatch));
        console.log(this.listings.filter(x => x.address.toLowerCase().includes(strToMatch)));
      }
    }
  }
</script>

<style scoped lang="scss">
  .listings {
    margin: 0 auto;
    max-width: 773px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
 
</style>

<template>
  <div class="container">
    <h1>Listings</h1>
    <div class="listings">
      <!-- <filterbar v-on:update-list="updateList"></filterbar> -->
      <listing v-for="listing in listings" :listing="listing" :key="listing.id"></listing>
    </div>
  </div>
</template>
