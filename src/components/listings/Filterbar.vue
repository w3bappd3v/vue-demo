<template>
    <div class="filterbar">
      <input v-on:keyup="$emit('update-list', $event.target.value)" />
    </div>
</template>


<style scoped lang="scss">
  .filterbar {
    background: red;
  }
</style>
