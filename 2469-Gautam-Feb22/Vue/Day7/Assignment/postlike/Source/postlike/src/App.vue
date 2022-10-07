<template>
  <div>
    <PostlistComp @getinfo="display($event)"></PostlistComp>

    <p>Parent Component !</p>

    <h2>
      Likes : <a href="#" @click="print()">{{ count }}</a>
    </h2>

    <table class="table w-25 border border-5" v-if="test">
      <caption></caption>
      <tr>
        <th>TITLE</th>
        <th>DATE</th>
        <th>Liked On</th>
      </tr>
      <tr v-for="item in data" :key="item.title">
        <td>{{ item.title }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.likeon }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import PostlistComp from "./components/PostlistComp.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0,
      data: [],
      test: false,
    };
  },
  components: {
    PostlistComp,
  },
  methods: {
    display(arr) {
      this.count = arr.length;
      this.data = arr;
      this.test = false;
    },
    print() {
      this.test = true;
    },
  },
};
</script>

<style>
</style>
