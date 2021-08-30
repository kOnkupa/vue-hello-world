<template>
  <div class="bg-red-50 rounded-md p-4" v-if="msg">
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: 'AuthError',
  computed: {
    msg() {
      return this.$auth.error
    },
  },
}
</script>
