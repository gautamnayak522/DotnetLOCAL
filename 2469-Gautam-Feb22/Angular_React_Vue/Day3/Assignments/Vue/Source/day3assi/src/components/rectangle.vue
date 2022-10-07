<template>
  <div id="rect" class="col-4 d-inline-block vh-100">
    <h6 class="pb-3">
      Create a Rectangle Component which computes area of Rectangle.
    </h6>
    <p>Enter Height : <input type="number" v-model="num1" /></p>
    <p>Enter Width : <input type="number" v-model="num2" /></p>
    <button v-on:click="area()" class="btn btn-primary">Calculate</button>
    <p class="text-success">{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: "rectComponent",
  data() {
    return {
      num1: 0,
      num2: 0,
      result: "",

      area() {
        this.result = "Area of Rectangle is : " + this.num1 * this.num2;
      },
    };
  },
};
</script>

<style></style>
