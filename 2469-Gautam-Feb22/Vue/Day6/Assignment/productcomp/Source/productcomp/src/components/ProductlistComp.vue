<template>
<div>
  <p>PRODUCTLIST Component</p>
  <h3>List of Products</h3>
  <ul v-for="item in list" :key="item.pname">
      <li>{{item.pname}}</li>
  </ul>
  </div>
</template>

<script>
export default {
    props:{
        list:[],
    },
}
</script>

<style>

</style>