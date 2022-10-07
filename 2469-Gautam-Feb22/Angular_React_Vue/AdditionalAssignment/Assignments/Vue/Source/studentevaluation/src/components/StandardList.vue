<template>
  <div>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Standard
      </button>
      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
        v-for="s in stdlist"
        :key="s"
      >
        <router-link
          :to="{ name: 'studentlist', params: { std: s.Standard } }"
          class="dropdown-item"
          >{{ s.Standard }}</router-link
        >
      </div>
    </div>

    <div v-for="s in stdlist" :key="s" class="dropdown">
      <router-link
        :to="{ name: 'studentlist', params: { std: s.Standard } }"
        class="dropdown-item"
        >{{ s.Standard }}</router-link
      >
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "StandardList",
  data() {
    return {
      selected: Number,
      stdlist: [
        {
          Standard: 1,
        },
        {
          Standard: 2,
        },
        {
          Standard: 3,
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style>
</style>