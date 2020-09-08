<script>
  import store from '../store/modules/listings'

  import Listing from "../components/listings/Listing";
  // import Filterbar from "../components/listings/Filterbar;
  

  export default {
    computed: {
      listings () {
        return store.getters.listings;
      }
    },
    components: {
      appListing: Listing
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
      <app-listing v-for="listing in listings" :listing="listing" :key="listing.id"></app-listing>
    </div>
  </div>
</template>
