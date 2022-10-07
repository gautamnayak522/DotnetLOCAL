<template>
  <div>
    <h2>Print even number between 1 and 100</h2>
    {{ createlist() }}
    {{ Numberlist }}
    <div v-for="i in Numberlist" :key="i.name">
      <p v-if="i % 2 == 0">{{ i }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EvenNumber",
  data() {
    return {
      Numberlist: [],
      createlist() {
        for (var i = 0; i <= 100; i++) {
          this.Numberlist.push(i);
        }
      },
    };
  },
};
</script>

<style>
</style>