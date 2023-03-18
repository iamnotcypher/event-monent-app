<template>
  <div class="font-body text-base flex flex-col relative min-h-screen">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
// import {computed} from 'vue';
// import {useStore} from "vuex";

import Nav from "./components/Nav"
import Footer from "./components/Footer"
export default {
  name: "App",
  components: { Footer, Nav },
  async created() {
    const response = await axios.get('me')

    this.$store.dispatch('user', response.data.data[0])
    console.log(response.data.data[0])
  }
}
</script>
<style>
  input {
    outline-color: #e5e7eb;
  }
</style>

// setup() {
//     const store = useStore();

//     let user = computed(() => {
//       return store.state.user
//     })

//       const userData = async () => {
//         try {
//           const response = await axios.get('me')
//           console.log(response)
//       } catch(err) {
//         console.log('Failed to load data')
//       }

//       userData()
//     }

//     return { user, userData }
//   }