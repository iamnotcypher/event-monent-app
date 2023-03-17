<template>
  <nav
    class="flex justify-between items-center column bg-primary h-16 min-[100px]:px-4 md:px-16 text-white"
  >
    <router-link to="/">
      <h1 class="italic font-bold">Eventful Moments.</h1>
    </router-link>

    <ul class="">
      <span class="text-sm pl-3">
        <router-link v-if="!user" to="/login">Login</router-link>
      </span>
      <span class="text-sm pl-3">
        <router-link v-if="user" to="/login">Logout</router-link>
      </span>
      <span class="text-sm pl-3">
        <router-link v-if="!user" to="/register">Register</router-link>
      </span>
      <span class="text-sm pl-3">
        <router-link v-if="user" to="/">My Bucket</router-link>
      </span>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['user'],
};
</script>
