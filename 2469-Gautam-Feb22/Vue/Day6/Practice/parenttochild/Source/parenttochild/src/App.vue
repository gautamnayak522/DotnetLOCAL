<template>
<div>
  <h3>Create one input field name in app component. Create a display component and call that component in app component. value entered in name field should be displayed in displayed component message should be like Welcome Nameoftheperson.(Parent to a child value transfer).</h3>
   <p>Enter UserName : <input type="text" v-model="uname"/> </p>
    UserName {{uname}} passing to Child component..
   
   <DisplayComp :user="uname"/>
</div>
 
</template>

<script>
import DisplayComp from './components/DisplayComp.vue'

export default {
  name: 'App',
  data(){
    return{
        uname:"",
    };
  },
    
  components: {
    DisplayComp
  }
}
</script>

<style>

</style>
