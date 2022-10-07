<script>

export default{
   data(){
    return{
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      if((this.username == "admin" || this.username == 'user') && this.password == "password"){
      localStorage.setItem("username",this.username);
      alert("Login Succesfully");
      }
      else{
        alert('Incorrect Details')
      }
    },
  
    getUser() {
    return localStorage.getItem('username');
  }
  }
  }
</script>

<template>
  <header>  
      <p>UserName : user / admin , Password = password</p>
       <div>
      UserName : <input type="text" v-model="username" />
      Password : <input type="text" v-model="password" />
      <button type="submit" @click="login()">Login</button>
      
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink> <br>
        <RouterLink to="/user">User</RouterLink> <br>
         <RouterLink to="/admin">Admin</RouterLink>
      </nav>
        <RouterView />
  </header>

</template>

<style>

</style>
