<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mt-8 mb-24 min-[100px]:px-4 md:px-16">
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="futureDate" placeholder="MM-DD-YYY" />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="title" placeholder="Moment title" />
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8" v-model="details" placeholder="Moment details"></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Save</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateEvent',
  data() {
    return {
      title: '',
      details: '',
      futureDate: ''
    }
  },
  methods: {
    async handleSubmit() {

      try{

      const response = await axios.post('moment', {
        title: this.title,
        details: this.details,
        futureDate: this.futureDate
      })

      if(!response.status === '200') {
        throw new Error(response.statusText)
      } else {
        this.$router.push('/')
      }

      } catch(err) {
        console.log(err)
      }

    }
  }
}
</script>