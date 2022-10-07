<template>
<div>
    <p>App Component ! </p>
    <h1>{{name}}</h1>
    <ProfileComp @getinfo="display($event)" ></ProfileComp>
</div>
</template>

<script>
import ProfileComp from './components/ProfileComp.vue'

export default {
  name: 'App',
  data(){
    return{
      name:""
    };
  },
  components: {
    ProfileComp
  },
  methods:{
    display(name)
    {
      this.name=name;
    }
  }
}
</script>

<style>

</style>

