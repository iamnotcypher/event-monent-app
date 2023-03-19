<template>
  <div class="min-[100px]:px-4 md:px-16">
    <div class="md:flex justify-between items-center my-12">
      <div class="mb-4">
        <h1 v-if="user" class="text-black text-2xl mb-1 font-semibold">Welcome {{ user.fullname }},</h1>
        <h1 v-else class="text-black text-2xl mb-1 font-semibold">You're not logged in!</h1>
        <p>Here are items in your eventful moment bucket.</p>
      </div>
      <router-link to="/create-event">
        <button class="btn bg-secondary">Add Item</button>
      </router-link>
    </div>

    <!-- cards -->
    <div class="my-8 grid lg:grid-cols-2 gap-10">
      <!-- card -->
        <div v-for="moment in moments" :key="moment.id" class="shadow p-5 rounded hover:bg-active">
            <h4 class="font-bold text-base mb-1 leading-5">{{ moment.title }}</h4>
            <p class="mb-1 text-sm">{{ moment.details }}</p>
            <div class="mt-4 flex items-center justify-between">
              <router-link class="grow" :to="{ name: 'Event', params: { id: moment._id } }">
                <small class="text-secondary">View Details</small>
              </router-link>
              <small class="text-gray-300 px-5">10/03/2023</small>
              <small>10/03/2023</small>
            </div>
        </div>
    </div>

    <div class="text-center my-24">
      <button class="btn bg-secondary">Load More</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      moments: []
    }
  },
  async mounted() {
    const response = await axios.get('users/me')
    const data =  response.data.data[0]

    this.$store.dispatch('user', data)

    this.moments = data.moments

  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>