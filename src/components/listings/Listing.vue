<template>
    <div class="listing">
        <!-- <img src={imageurl} alt={address} /> -->
        <!-- <a href={`/listings/${id}`} class="btn btn-primary listing-link" use:link>
            View Listing
        </a> -->
        <ul class="info">
            <li class="address">{{ listing.address }}</li>
            <li>${{ listing.price }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['listing']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .listing {
    width: 200px;
    height: fit-content;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin: 20px 10px;
    padding: 10px;
    box-shadow: -2px -1px 12px 5px #b8b8b8bf;

    img {
      width:200px;
      height: 200px;
    }

    ul {
      padding: 0;
      list-style: none;
      text-align: left;
    }
    .address {
      font-size: 1.25em;
      color: #000;
    }
    li {
      font-size: .75em;
      color: #8b8b8b;
    }
  }
</style>
