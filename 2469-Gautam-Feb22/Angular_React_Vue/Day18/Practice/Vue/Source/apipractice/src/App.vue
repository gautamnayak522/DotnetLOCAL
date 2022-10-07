<template>
   <table>
      <caption></caption>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>STATUS</th>
      </tr>
      <tr v-for="item in Users" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender }}</td>
       <td>{{ item.status }}</td>
      </tr>
    </table>
</template>

<script>
import axios from "../node_modules/axios/dist/axios";

export default {
  name: 'App',
  data(){
    return{
      Users: [],
      token: "a73b7eea017b4090a3b23cd07029bf4abe747d81e401bd5ab25a0f2a6429a8a9",
      hosturl: "https://gorest.co.in/public/v2/",
    }
  },

    async created() {
    try {
      const res = await axios.get(`${this.hosturl}users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.Users = res.data;
      console.log(this.Users);
    } catch (error) {
      console.log(error);
    }
  },
 
}
</script>

<style>
table,
th,
td {
  border: 1px solid;
}
table {
  width: 50%;
}
</style>
