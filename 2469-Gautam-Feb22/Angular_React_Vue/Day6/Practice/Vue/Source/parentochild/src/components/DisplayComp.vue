<template>
<div>

    <p>display component started!!!</p>
<h2 v-if="user==''">Enter Name</h2>
<h1 v-else>Welcome {{user}}</h1>

  
</div>

</template>

<script>
export default {
    name:"DisplayComp",
    props: {
    user:String
    }


}
</script>

<style>

</style>