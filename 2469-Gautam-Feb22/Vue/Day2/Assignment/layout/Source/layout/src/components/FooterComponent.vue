<template>
  <footer>
  <p>© {{year}} Angular-Vue-React Training</p>
</footer>

</template>

<script>
export default {
    data(){
        return{
             year:"2020",
        };
    },
   
}
</script>

<style>
footer {
  position: absolute;
  bottom: 0px;
  height: 80px;
  width: 100%;
  text-align: center;
  background-color: dimgrey;
  color: white;
}

</style>