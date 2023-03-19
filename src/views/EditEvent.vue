<template>
  <form @submit.prevent="handleEdit" class="max-w-md mt-8 min-[100px]:px-4 md:px-16 mb-24" >
    <div class="mb-4">
      <label class="text-sm block">Date in the future</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="futureDate">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Title</label>
      <input class="border w-full sm:w-96 rounded-md p-1" type="text" v-model="title">
    </div>
    <div class="mb-4">
      <label class="text-sm block">Details</label>
      <textarea class="border w-full sm:w-96 rounded-md p-1" name="" id="" cols="30" rows="8" v-model="details"></textarea>
    </div>

    <div class="text-center mt-8">
      <button class="btn bg-secondary">Update</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditEvent',
  data() {
    return {
      futureDate: '',
      title: '',
      details: '',
      id: ''
    }
  },
  async mounted() {
    this.id = this.$router.currentRoute._rawValue.params.id
    try{
        const response = await axios.get(`moment/${this.id}`)
        this.title = response.data.data.title
        this.futureDate = response.data.data.futureDate
        this.details = response.data.data.details
      } catch(err) {
      console.log('An error occurred!')
      }
  },
  methods: {
    async handleEdit() {

      try{
        const response = await axios.patch(`moment/${this.id}`, {
        title: this.title,
        details: this.details,
        futureDate: this.futureDate
      })
        this.$router.push('/')
        console.log(response)
      } catch(err) {
      console.log('An error occurred!')
      }


    }
  }

}
</script>