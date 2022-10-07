<template>
  <div>
      <h1>
          FIRST
      </h1>
       <div id="nav">
        <router-link  to="/firstComp/ChildComp1" class="button">Child 1</router-link> 
        <router-link to="/firstComp/ChildComp2" class="button">Child 2</router-link>
       </div>
        <router-view />
  </div>

</template>

<script>
export default {
  name: 'FirstComponent',
}
</script>

<style>
.button {
  box-shadow: inset 0 1px 0 0 #ffffff;
  background: #ffffff linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
  color: #666666;
  font-family: Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0 1px 0 #ffffff;
  outline: 0;
}
</style>
