<template>
  <div id="signup" class="col-4 d-inline-block vh-100">
    <h6 class="pb-3">
      Create a signup component which contains field like Name, Address,
      PanNumber and interpolate these information in the paragraph
    </h6>
    <p>
      Enter Name : <input type="text" placeholder="Name" v-model="name" />
    </p>
    <p>
      Enter Address :
      <input type="text" placeholder="Address" v-model="add" />
    </p>
    <p>
      Enter PAN No :
      <input type="number" placeholder="PAN NO" v-model="pan" required />
    </p>
    <p class="text-primary">{{ name }} {{ add }} {{ pan }}</p>
  </div>
</template>

<script>
export default {
  name: "signupComponent",
  data(){
      return{
          name:"",
            add:"",
            pan:"",
      }
  }
};
</script>

<style></style>
