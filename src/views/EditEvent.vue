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
      futureDate: '20/07/2050',
      title: 'Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1st-century.',
      details: 'Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.'
    }
  },
  methods: {
    async handleEdit() {
      const moment = {
        title: this.title,
        details: this.details,
        futureDate: this.futureDate
      }

      const response = await axios.patch()

    }
  }

}
</script>