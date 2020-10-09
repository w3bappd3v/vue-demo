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
        if(numCount == strToMatch.length-1){
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
      addListing (listing) {
      listing = {
        id: 7,
        address: "987 Sunset Blvd",
        neighborhood: "Hollywood",
        price: "69,000,000",
        summary: "3BD, 2BA, 1100SF, CO-OP",
        image: "listing-1"
      }
      store.dispatch('addListing', listing);  
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    min-width: 390px;
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
  }


</style>

<template>
  <div class="container">
    <h1>Listings</h1>
    <button @click="addListing({})">ADD ITEM</button>
    <input type="text" v-model="searchStr" placeholder="Enter Address" />
    <div class="listings">
      <listing v-for="listing in filteredListings" :listing="listing" :key="listing.id"></listing>
    </div>
  </div>
</template>