<template>
  <div>
    <h2>Find out greater of two number</h2>
    <button v-on:click="show = !show">{{ show ? "hide" : "show" }}</button>

    <div v-if="show">
      <p>Number 1 : <input type="number" v-model="num1" /></p>
      <p>Number 2 : <input type="number" v-model="num2" /></p>
      <p>Number 1 : {{ num1 }}, Number 2 : {{ num2 }}</p>

      <div v-if="compare()">
        <p>Number1 {{ num1 }} is Large</p>
      </div>
      <div v-else>Number2 {{ num2 }} is Large</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"GreaterofTwo",
    data(){
       return{
            num1:20,
            num2:30,
            show:true,

            compare() {
            return this.num1 > this.num2;
            },
       };
       },
};
</script>

<style>
</style>