<template>
  <div>
    <input type="text" placeholder="id (autogenerated)" :value="data.id" readonly />
    <input type="text" placeholder="user_id" v-model="data.user_id" />
    <input type="text" placeholder="title" v-model="data.title" />
    <input type="text" placeholder="body" v-model="data.body" />
    <button @click="postPost">New Post</button>
    <button @click="updatedetails">Update</button>
    <table>
      <caption></caption>
      <tr>
        <th>ID</th>
        <th>USER_ID</th>
        <th>TITLE</th>
        <th>BODY</th>
      </tr>
      <tr v-for="item in Posts" :key="item">
        <td>{{ item.id }}</td>
        <td>{{ item.user_id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
        <td><button @click="editinfo(item)">Edit</button></td>
        <td><button @click="deletepost(item.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "../../node_modules/axios/dist/axios";
export default {
  name: "ApiComp",
  data() {
    return {
      Posts: [],
      token: "a73b7eea017b4090a3b23cd07029bf4abe747d81e401bd5ab25a0f2a6429a8a9",
      hosturl: "https://gorest.co.in/public/v2/",
      data: {
        id:"",
        user_id: "",
        title: "",
        body: "",
      },
    };
  },

  async created() {
    try {
      const res = await axios.get(`${this.hosturl}posts`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.Posts = res.data;
      console.log(this.Posts);
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async postPost() {
      let temp = JSON.parse(JSON.stringify(this.data));

      const res = await axios.post(`${this.hosturl}posts`, temp, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      console.log(res.data);
    },

    deletepost(postid) {
      alert("Deleted record of : " + postid);
      axios.delete(`${this.hosturl}posts/${postid}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
    },
    editinfo(item) {
      let temp = JSON.parse(JSON.stringify(item));
      this.data = temp;
    },

    async updatedetails(){
    
      
       const res = await axios.put(`${this.hosturl}posts/${this.data.id}`, this.data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      });
      console.log(res);
        alert("Updated " + this.data.id)
    }
  },
};
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
