<script>
export default{
    methods:{
    logout(){
      localStorage.removeItem('username');
    }
  }
}
</script>
<template>
  <div>
    <h1>This is an Admin page</h1>
    <button type="button" @click="logout()">LogOut</button>
  </div>
</template>

<style>
</style>
