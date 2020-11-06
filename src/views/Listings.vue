<script>
  import store from '../store/modules/listings'
  import Listing from "../components/listings/Listing";
  
  export default {
    computed: {
      listings () {
        return store.getters.listings;
      },
      filteredListings: function () {
        let strToMatch = this.searchStr.toLowerCase();
        //if search chars are all number type need to to parseInt() for string includes()
        //otherwise ok they are coerced if mixed with string chars
        let numCount = 0;
        for(let i=1; i<strToMatch.length; i++){
          if(/^\d+$/.test(strToMatch[i])){
            numCount++;
          }
        }
        if(numCount == strToMatch.length-1 && strToMatch.length > 1){
          strToMatch = parseInt(strToMatch);
        }
        return this.listings.filter(x => x.address.toLowerCase().includes(strToMatch));
      }
    },
    data() {
      return {
        searchStr: ''
      }
    }, 
    components: {
      listing: Listing
    },
    methods: {
      addListing () {
        //add a random listing from existing listings  
        const listingsList = JSON.parse(JSON.stringify(this.listings));
        const listing = listingsList[Math.floor(Math.random() * listingsList.length)];

        //give randomly selected listing a unique id
        listing.id = listingsList.length + 1;

        //give new listing a unique addres number
        const addressNumber = Math.floor(Math.random() * 99) + 75;
        const streets =['Cherry Lane', 'Oak Street', 'Sixth Ave', 'Main Street'];
        listing.address = addressNumber + ' ' + streets[Math.floor(Math.random() * streets.length)];

        store.dispatch('addListing', listing);  
      },
      removeListing (listing) {
        store.dispatch('removeListing', listing); 
      }
    }
  }
</script>

<template>
  <div class="container">
    <h1>Listings</h1>
    <button @click="addListing()">ADD ITEM</button>
    <input type="text" v-model="searchStr" placeholder="Enter Address" />
    <div class="listings">
      <listing v-for="listing in filteredListings" :listing="listing" :key="listing.id" v-on:remove-listing="removeListing(listing.id)"></listing>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    margin-top: 5px;
  }
  input {
    border-radius: 3px;
    border: 1px solid #d4d4d4;
    height: 25px;
    width: 200px;
    font-size: 1.15em;
    padding: 5px;
    vertical-align: middle;
    color: #585858;
  }
  input:focus{
    outline-color: #a4dfb5;
  }
  .listings {
    margin: 0 auto;
    max-width: 773px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    
  }
  button {
    margin-right: 10px;
  }
  @media screen and (max-width: 785px) {
    .listings {
      max-width: 485px;
    }
  }
    @media screen and (max-width: 543px) {
    .listings {
      max-width: 241px;
    }
    button {
      margin-bottom: 10px;
    }
  }
</style>