<template>
  <div>
    <p>
      Create a user profile form field ID, Name, Address and submit button, once
      he click on submit button, data should be store in list and display that
      list in tabular format.
    </p>
    
    <form @submit.prevent="assign">
      <p>Enter Id : <input type="text" v-model="id" /></p>
      <p>Enter Name : <input type="text" v-model="name" /></p>
      <p>Enter Address : <input type="text" v-model="add" /></p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "formPractice",
  data() {
    return {
      id: "",
      name: "",
      add: "",
    };
  },
  methods: {
    assign() {
        if (this.id === '' || this.name === '' || this.add === '') {
             alert('Please fill out every field.')
        return
        }

      let entry = { id: this.id, name: this.name, add: this.add };
      this.id = "";
      this.name = "";
      this.add = "";
      this.$emit("storedata", entry);
    },
  },
};
</script>

<style>
</style>