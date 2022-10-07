<template>
 <div class="container pt-5">
  <p>
    Create a Employee Form which contains EmployeeID,Name,Address, Gender, DOJ,
    Hobbies and on button click it should be stored it in Employee Array.
    Iterate that list in tabular format. Filter the list who has joined in the
    current month. and sort the list based on Name.
  </p>
  <div class="col-6">
    <form class="frm">
      <strong>EMP ID : </strong>
      <input type="text" name="eid" class="form-control" v-model="eid" /><br />
      <strong>EMP Name :</strong>
      <input type="text" name="ename" class="form-control" v-model="ename" /><br />
      <strong>Address :</strong>
      <input type="text" name="eaddr" class="form-control" v-model="eaddr" /><br />
      <strong>Gender : </strong>
      <input
        name="gender"
        type="radio"
        value="male"
        class="form-check-input"
        v-model="gender"
      />
      Male
      <input
        name="gender"
        type="radio"
        value="female"
        class="form-check-input"
        v-model="gender"
      />
      Female <br /><br />
      <strong>DOJ :</strong>
      <input type="date" name="doj" class="form-control" v-model="doj" /><br />
      <strong>Hobbies :</strong>
      <input type="text" name="hobbies" class="form-control" v-model="hobbies" /><br />
      <input type="button" v-on:click="assign()" value="Submit" class="btn btn-primary" />
    </form>
  </div>
  <div class="col-6">
    <p>
      SORTED LIST OF EMPLOYEE BASED ON NAME, WHO HAS JOINED IN CURRENT MONTH
    </p>
    <p class="green">*Joined in this month</p>
    <p class="red">*Not Joined in this month</p>
   
    <table class="table pt-5">
      <caption>
        LIST OF EMPLOYEE
      </caption>
      <thead>
        <tr>
          <th>EID</th>
          <th>ENAME</th>
          <th>ADDRESS</th>
          <th>GENDER</th>
          <th>DOJ</th>
          <th>HOBBIES</th>
        </tr>
      </thead>
      <tbody v-for="item in values" :key="item.eid">
          <tr class="green" v-if="checkdate(item)">
            <td>{{ item.eid }}</td>
            <td>{{ item.ename }}</td>
            <td>{{ item.eaddr }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.doj }}</td>
            <td>{{ item.hobbies }}</td>
          </tr>
        
            <tr v-else class="red">
              <td>{{ item.eid }}</td>
              <td>{{ item.ename }}</td>
              <td>{{ item.eaddr }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.doj }}</td>
              <td>{{ item.hobbies }}</td>
            </tr>
      </tbody>
    </table>
  </div>
</div>

</template>

<script>
export default {
  name: "EmpData",
  data() {
    return {
        eid:"",
        ename:"",
        eaddr:"",
        gender:"",
        doj:"",
        hobbies:"",

      values: [],
      

      assign() {
        let datas={}
        datas.eid=this.eid;
        datas.ename=this.ename;
        datas.eaddr=this.eaddr;
        datas.gender=this.gender;
        datas.doj=this.doj;
        datas.hobbies=this.hobbies;

        this.values.push(datas);
        console.log(datas);
         console.log(this.values);
        this.values.sort((a, b) => (a.ename < b.ename ? -1 : 1));
      },

      checkdate(object) {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var empmonth = object.doj.slice(6, 7);

        return month == empmonth;
      },
    };
  },
};
</script>

<style>
.red {
  color: red;
}
.green {
  color: green;
}

</style>