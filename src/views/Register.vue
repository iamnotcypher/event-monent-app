<template>
  <Nav :login="login" />
  
  <form @submit.prevent="handleSignup" class="max-w-md mx-auto mt-16 min-[100px]:px-4 md:px-16">
    <h1 class="text-black text-2xl mb-6 font-semibold">Create an account,</h1>

    <div class="mb-4">
      <label class="text-sm block">Full name</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="fullname" required />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Email</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="email" v-model="email" required />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Password</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="password" v-model="password" required />
    </div>

    <div class="text-center mt-8">
        <button class="bg-secondary text-white py-2 px-3 w-36 rounded-md text-sm">
          Create
        </button>
    </div>
  </form>
</template>

<script>
import  axios from 'axios'

import Nav from '../components/Nav'

export default {
  components: {
    Nav
  },
  data() {
    return {
      fullname: '',
      email: '',
      password: '',
      login: false
    }
  },
  methods: {
    async handleSignup() {

      const response = await axios.post('signup', {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      });

      this.$route.push('/event')
      this.fullname = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>