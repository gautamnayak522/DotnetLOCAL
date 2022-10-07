<template>
  <div class="container-fluid pt-3">
    <div v-for="obj in Student" :key="obj.Id" class="d-inline-block">
      <div class="card m-2" style="width: 15rem">
        <img
          class="card-img-top"
          src="../assets/images.jpg"
          alt="student photo"
        />
        <div class="card-body">
          <h5 class="card-title">Name : {{ obj.Name }}</h5>
          <p class="card-text">Id : {{ obj.Id }}</p>
          <router-link :to="{name:'StudentDetails',params:{Id:obj.Id}}" class="btn btn-primary">Details</router-link> 
        </div>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentCards",
  data() {
    return {
      Student: [
        { Id: 711, Name: "Gautam" },
        { Id: 718, Name: "Yash" },
        { Id: 710, Name: "Saumya" },
      ],
    };
  },
};
</script>


<style>
</style>
