<template>
  <AppButton v-if="!isAuthenticated && !loading" @click.prevent="this.login">Log in</AppButton>
  <AppButton v-else @click.prevent="this.logout">Log out</AppButton>
</template>
<script>
import AppButton from '@/components/AppButton'
export default {
  inject: ['login', 'logout'],
  data() {
    return {
      isAuthenticated: this.$auth.isAuthenticated,
      loading: this.$auth.loading,
    }
  },
  components: {
    AppButton,
  },
}
</script>
