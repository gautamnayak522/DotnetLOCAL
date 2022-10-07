<template>
  <section>
  <div id="home">
    <h1>HOME</h1>
    <h1>Angular-Vue-React Training</h1>
    <h2>What you'll learn</h2>
    <ul>
      <li>
        Develop modern, complex, responsive and scalable web applications with
        Angular,Vue,React
      </li>
      <li>
        Fully understand the architecture behind an application and how to use
        it
      </li>
      <li>
        Use the gained, deep understanding of the fundamentals to quickly
        establish yourself as a frontend developer
      </li>
      <li>
        Create single-page applications with one of the most modern JavaScript
        frameworks out there
      </li>
    </ul>
  </div>
  <div id="about">
    <h1>ABOUT</h1>
    <h2>Angular</h2>
    <p>
      Angular, developed by Google, was first released in 2010, making it the
      oldest of the lot. It is a TypeScript-based JavaScript framework.
    </p>
    <h2>VUE</h2>
    <p>
      Vue, also known as Vue.js, is the youngest member of the group. It was
      developed by ex-Google employee Evan You in 2014. Over the last three
      years, Vue has seen a substantial shift in popularity, even though it
      doesn’t have the backing of a large company.
    </p>
    <h2>React</h2>
    <p>
      React, developed by Facebook, was initially released in 2013. Facebook
      uses React extensively in their products (Facebook, Instagram, and
      WhatsApp).
    </p>
  </div>
</section>

</template>
<script>
export default {

};
</script>

<style>
section {
  background-color: azure;
  height: 529px;
  overflow-y: scroll;
}
section #home {
  min-height: 100%;
}
section #about {
  min-height: 100%;
}

</style>