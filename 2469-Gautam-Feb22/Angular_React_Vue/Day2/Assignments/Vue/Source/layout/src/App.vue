<template>
<div>
  <Header/>
  <Footer/>
  <Section/>
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
import Section from './components/SectionComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Section,
  }
}
</script>

