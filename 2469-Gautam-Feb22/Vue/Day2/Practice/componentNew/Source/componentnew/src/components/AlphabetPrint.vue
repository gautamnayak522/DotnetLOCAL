<template>
  <div>
    <h1> Task :  <span>{{ task }}</span></h1>
    <p>{{ printAlphabets() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
       task: 'Print Alphabets',
      printAlphabets() {
    var i = 65;
    var j = 91;
    var str;
    var res = '';
    for (var k = i; k < j; k++) {
      str = String.fromCharCode(k);
      res += str + ' ';
    }
    return res;
  }
    };
  },
};
</script>

<style>
p{
  color:blue;
}
div{
  text-align: center;
}
</style>