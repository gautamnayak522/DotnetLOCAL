<template>
  <div class="container-fluid pt-3">
    <div v-for="obj in StudentDetails" :key="obj.Id" class="d-inline-block">
      <div v-if="obj.Id == this.$route.params.Id">
        <ul>
          <li>Id : {{ obj.Id }}</li>
          <li>Name : {{ obj.Name }}</li>
          <li>Department : {{ obj.Departmet }}</li>
          <li>Contact : {{ obj.Contact }}</li>
        </ul>
        <router-link :to="{name:'ResultsDetails',params:{Id:obj.Id}}" class="btn btn-primary m-2">Result</router-link> 
        <router-link :to="{name:'FeesDetails',params:{Id:obj.Id}}" class="btn btn-primary">Fees Status</router-link> 
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentDetails",
  props: {
    Id: Number,
  },
  data() {
    return {
      StudentDetails: [
        { Id: 711, Name: "Gautam", Departmet: "CSE", Contact: 1111111111 },
        { Id: 718, Name: "Yash", Departmet: "ME", Contact: 9999999999 },
        { Id: 710, Name: "Saumya", Departmet: "Civil", Contact: 2222222222 },
      ],
    };
  },
};
</script>


<style>
</style>
