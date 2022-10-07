<template>
  <div>
  <header>
    <h1>Greetings of the day <span>{{name}}</span></h1>
  </header>
  <div class="text-center pt-5">
  <input class="text-center" type="text" v-bind:value="name">
  </div>
 </div>

</template>

<script>
  export default{
    
    data(){
      return{
        name:'GAUTAM'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
  color:blue;
}
span
{
  color:red;
}
header {
    background-color:rgb(176, 223, 117);
    padding: 20px 10px;
  }
</style>
