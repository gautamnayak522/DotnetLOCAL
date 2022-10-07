<template>
<div>
<rectComponent/>
<loginComponent/>
<signupComponent/>
</div>
</template>

<script>
import loginComponent from './components/login.vue'
import rectComponent from './components/rectangle.vue'
import signupComponent from './components/signup.vue'

export default {
  name: 'App',
  components: {
    loginComponent,
    rectComponent,
    signupComponent,
  }
}
</script>

<style>

</style>
