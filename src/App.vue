<template>
  <div class="font-body text-base flex flex-col relative min-h-screen">
    <Nav :user="user" />
    <router-view :user="user"/>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'

import Nav from "./components/Nav"
import Footer from "./components/Footer"
export default {
  name: "App",
  components: { Footer, Nav },
  data() {
    return {
      user: null,
    }
  },
  async created() {
    const response = await axios.get('me')

    this.user = response.data.data[0]
  }
}
</script>
<style>
  input {
    outline-color: #e5e7eb;
  }
</style>