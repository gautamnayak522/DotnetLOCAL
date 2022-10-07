<template>
  <div>
    <label for="fno">Enter First No.</label>
    <input type="number" v-model="num1" /><br /><br />
    <label for="sno">Enter Second No.</label>
    <input type="number" v-model="num2" /><br /><br />
    <button v-on:click="result()">Calculate</button>

    <p>Number 1 : {{ num1 }}</p>
    <p>Number 2 : {{ num2 }}</p>

    <div id="ans">
      <p>{{ add }}</p>
      <p>{{ sub }}</p>
      <p>{{ mul }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CalcComponent',
    data() {
    return {
             num1: 0,
            num2:0,
            add :'',
            sub :'',
            mul:'',

  result() {
    this.add = 'Addition is : ' + (this.num1 + this.num2);
    this.sub = 'Subtraction is : ' + (this.num1 - this.num2);
    this.mul = 'Multlipication is : ' + this.num1 * this.num2;
  }

    }

}
}
</script>

<style>
#ans {
  color: blue;
}
</style>
