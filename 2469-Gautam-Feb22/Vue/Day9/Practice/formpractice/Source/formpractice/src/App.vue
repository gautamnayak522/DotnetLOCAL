<template>
<div>
  <formPractice @storedata="data($event)"></formPractice>
  
     <table border="1" v-if="values.length">
        <caption>
          LIST OF PROFILE
        </caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody v-for="e in values" :key="e.id">
          <tr>
            <td>{{ e.id }}</td>
            <td>{{ e.name }}</td>
            <td>{{ e.add }}</td>
          </tr>
        </tbody>
     </table>
</div>
</template>

<script>
import formPractice from './components/formPractice.vue'

export default {
  name: 'App',
  components: {
    formPractice
  },
  data(){
    return{
      values:[]
    }
  },
  methods:{
    data(entry){
      this.values.push(entry);
    }
  }
}
</script>

<style>

</style>
