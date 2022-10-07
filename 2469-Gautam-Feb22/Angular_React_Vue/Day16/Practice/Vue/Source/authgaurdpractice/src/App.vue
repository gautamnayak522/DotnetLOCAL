<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      if(this.username == "admin" && this.password == "password"){
      localStorage.setItem("user",this.username);
      alert("Login Succesfully");
      }
      else{
        alert('Incorrect Details')
      }
    },
    logout(){
      localStorage.removeItem('user');
    },
    getUser() {
    return localStorage.getItem('user');
  }
  }
}
</script>

<template>
  <header>  
    <p>UserName : admin , Password : password</p>
    <div>
      UserName : <input type="text" v-model="username" />
      Password : <input type="text" v-model="password" />
      <button type="submit" @click="login()">Login</button>
      <button type="button" @click="logout()">LogOut</button>
    </div>


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
         <RouterLink to="/protected">Protected</RouterLink>
      </nav>
        <RouterView />
  </header>

</template>

<style>

</style>
