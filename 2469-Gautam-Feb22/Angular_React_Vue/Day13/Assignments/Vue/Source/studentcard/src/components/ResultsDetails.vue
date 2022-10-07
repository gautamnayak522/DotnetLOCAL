<template>
  <div class="container-fluid pt-3">
    <table class="table w-25">
      <caption></caption>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>TotalMarks</th>
        <th>Marks</th>
        <th>Result</th>
      </tr>
      <tbody v-for="obj in ResultsDetails" :key="obj.Id">
        <tr v-if="obj.Id == this.$route.params.Id">
          <td>{{ obj.Id }}</td>
          <td>{{ obj.Name }}</td>
          <td>{{ obj.TotalMarks }}</td>
          <td>{{ obj.Marks }}</td>
          <td>{{ obj.Result }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ResultsDetails",
  props: {
    Id: Number,
  },
  data() {
    return {
      ResultsDetails: [
        {
          Id: 711,
          Name: "Gautam",
          TotalMarks: 600,
          Marks: 560,
          Result: "Pass",
        },
        { Id: 718, Name: "Yash", TotalMarks: 600, Marks: 300, Result: "Fail" },
        {
          Id: 710,
          Name: "Saumya",
          TotalMarks: 600,
          Marks: 480,
          Result: "Pass",
        },
      ],
    };
  },
};
</script>


<style>
</style>
