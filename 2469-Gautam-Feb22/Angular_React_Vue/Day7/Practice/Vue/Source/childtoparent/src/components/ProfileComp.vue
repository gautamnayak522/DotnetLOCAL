<template>
<div>
  <p>profile Component!</p>
    <p>Enter Value to pass Parent Component :
    <input type="text" v-model="name"> <br/>
    <button @click="submitInfo()">Submit</button>
    </p>
    <p>{{name}}</p> 
    </div>

</template>

<script>
export default {
name: "ProfileComp",
   data() {
    return {
    name:""
    }
   },
   methods:{
       submitInfo(){
           this.$emit('getinfo',this.name)
       }
   }
}
</script>

<style>

</style>