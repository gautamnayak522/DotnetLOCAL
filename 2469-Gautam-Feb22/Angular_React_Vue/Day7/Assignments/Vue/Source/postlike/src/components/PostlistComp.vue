<template>
  <div>
    <p>child Component !</p>
    <div class="card">
      <img src="../assets/redixlogo.png" alt="John" style="width: 100%" height="150"/>
      <h1>{{ title }}</h1>
      <p class="title">{{ desc }}</p>
      <p>{{ date }}</p>
      <p><button @click="display()">Like</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostlistComp",
  data() {
    return {
      title: "Radix",
      desc: "Radixweb is a globally acclaimed IT consulting and offshore software development leader.",
      date: new Date().toLocaleDateString(),
      likeon:"",
      likelist: [],
    };
  },
  methods: {
    display() {
      this.likeon = new Date().toLocaleString();
      let datas = { title: this.title, date: this.date, likeon:this.likeon};
      console.log(datas);
      this.likelist.push(datas);
      console.log(this.likelist);
      this.$emit("getinfo", this.likelist);
    },
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
</style>

 
