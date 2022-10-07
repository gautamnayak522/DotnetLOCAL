<template>
  <div>
    <hr />
    <p>Standard : {{ this.$route.params.std }}</p>

    <div v-for="item in finallist" :key="item" class="container">
      <label for="select">Select Student : </label>
      <select v-model="item.Name" class="w-25">
        <option value="">select</option>
        <option v-for="s in studentlist" :key="s" :value="s.Name">
          {{ s.Name }}
        </option>
      </select>
      <br />
      <br />
      <ul v-for="(l,index) in item.units" :key="l" class="list-unstyled">
        <li>
          <label for="item-{{index+1}}"
            >Unit {{index+1}}  :<span class="required">*</span></label
          >
          <input id="item" class="w-50" type="text" v-model="l.Unit" />
        </li>
      </ul>
    </div>
    <div class="container">
     <button type="submit" class="rounded btn-primary" @click="onSubmit()">
    Submit
  </button>
  <button type="button" class="rounded btn-danger" @click="onClear()">
    Reset
  </button>
  </div>
  <hr>
  {{finallist}}
  <hr>
  <table class="w-50 table-bordered" v-if="allentries.length">
  <caption>
    ALL ENTRIES
  </caption>
  <tr>
    <th>Name</th>
    <th>Standard</th>
    <th>Result</th>
  </tr>
  <tbody v-for="item in allentries" :key="item.Name">
    <tr v-for="entry in item" :key="entry">
      <td>{{ entry.Name }}</td>
      <td>{{ entry.Standard }}</td>
      <td>
        <button class="btn-primary" @click="printResult(entry)">Print</button>
      </td>
    </tr>
  </tbody>
</table>

  <div class="text-center">
  <table class="w-50 table table-bordered text-center">
    <caption>
      RESULT
    </caption>
    <tbody v-for="entry in filterdlist" :key="entry">
      <tr>
        <th colspan="2">ABC SCHOOL</th>
      </tr>
      <tr>
        <td>Name : {{ entry.Name }}</td>
        <td>Standard : {{ entry.Standard }}</td>
      </tr>
      <tr>
        <td colspan="2">{{ currdate }}</td>
      </tr>
      <tr v-for="(m,index) in entry.units" :key="m">
        <td>Unit {{ index + 1 }}</td>
        <td>{{ m.Unit }}</td>
      </tr>
      <tr>
        <td colspan="2">Total Mark : {{ entry.units.length * 100 }}</td>
      </tr>
      <tr>
        <td colspan="2">
          Obtained Mark : {{ calculateobtained(entry.units) }}
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>
export default {
  name: "StudentList",
  props: {
    std: Number,
  },
  data() {
    return {
      selectedName: "",
      allentries:[],
        filterdlist:[],
  obtmark:'',
  currdate:'',
      studentlist: [
        {
          id: "1",
          Name: "ABC",
        },
        {
          id: "2",
          Name: "XYZ",
        },
        {
          id: "3",
          Name: "PQR",
        },
      ],
      standardlist: [
        {
          Standard: "1",
          Name: "",
          units: [
            {
              Unit: "",
            },
            { Unit: "" },
          ],
        },
        {
          Standard: "2",
          Name: "",
          units: [
            {
              Unit: "",
            },
            { Unit: "" },
            { Unit: "" },
            { Unit: "" },
          ],
        },
        {
          Standard: "3",
          Name: "",
          units: [
            {
              Unit: "",
            },
            { Unit: "" },
            { Unit: "" },
            { Unit: "" },
            { Unit: "" },
            { Unit: "" },
          ],
        },
      ],
    };
  },
  methods:{
      onSubmit() {
      console.warn(this.finallist);
      let temp = JSON.parse(JSON.stringify(this.finallist));
        this.allentries.push(temp);
       this.onClear();
  },

  onClear() {
    this.finallist.map((item) => (item.Name = ''));
    this.finallist.map((item) => item.units.map((i) => (i.Unit = '')));
  },
    printResult(entry) {
    this.filterdlist = [];
    this.filterdlist.push(entry);
    console.log(entry);
    this.currdate = new Date().toDateString();
  },
    calculateobtained(units) {
    return units
      .map((item) => item.Unit)
      .reduce((prev, curr) => parseInt(prev) + parseInt(curr));
  }
  },
  computed:{
    finallist(){
      return this.standardlist.filter((p)=>p.Standard==this.$route.params.std)
    }
  }
};
</script>

<style>
</style>