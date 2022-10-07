<template>
  <div id="login" class="col-4 d-inline-block vh-100">
    <h6 class="pb-3">
      Create Login Component which validate a user with below credential
      username=admin, password=admin
    </h6>
    <p>
      Enter Username :
      <input type="text" placeholder="UserName" v-model="uname" required />
    </p>
    <p>
      Enter Password :
      <input type="text" placeholder="Password" v-model="pass" required />
    </p>
    <button v-on:click="check()" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
      name: 'loginComponent',
      data(){
          return{
              uname:"",
              pass:"",
              check(){
                  if (this.uname == "" || this.pass == ""){
                        alert("Username and Password Should not be Blank");
                    }
                else if (this.uname == "admin" && this.pass == "admin") {
                         alert("Valid User");
                            this.uname = "";
                         this.pass = "";
                    }
                else {
                        alert("Invalid User");
                        this.uname = "";
                        this.pass = "";
                    }
                }

              }
          }
}
</script>

<style>
</style>
