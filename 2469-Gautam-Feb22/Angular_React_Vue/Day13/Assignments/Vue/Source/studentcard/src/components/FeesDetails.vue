<template>
  <div class="container-fluid pt-3">
    <table class="table w-25">
      <caption>Fees Details</caption>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
      <tbody v-for="obj in FeesDetails" :key="obj.Id">
        <tr v-if="obj.Id == this.$route.params.Id">
          <td>{{ obj.Id }}</td>
          <td>{{ obj.Name }}</td>
          <td>{{ obj.Status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FeesDetails",
  props: {
    Id: Number,
  },
  data() {
    return {
      FeesDetails: [
        {
          Id: 711,
          Name: "Gautam",
          Status: "Pending",
        },
        { Id: 718, Name: "Yash", Status: "Paid" },
        {
          Id: 710,
          Name: "Saumya",
          Status: "Paid",
        },
      ],
    };
  },
};
</script>


<style>
</style>
