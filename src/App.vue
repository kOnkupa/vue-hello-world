<template>
  <div id="app">
    <AppLayout>
      <template v-slot:default>
        <AuthError />
        <router-view />
      </template>
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'
import AuthError from '@/components/AuthError.vue'

export default {
  data() {
    return {
      msg: null,
    }
  },
  provide() {
    return {
      logout: this.logout,
      login: this.login,
    }
  },
  components: {
    AuthError,
    AppLayout,
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$router.push({ path: '/' })
    },
    login() {
      this.$auth.loginWithRedirect()
    },
  },
  errorCaptured(err) {
    window.alert(err.message)
  },
}
</script>
