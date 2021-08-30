<template>
  <div class="layout">
    <header>
      <AppNavigation />
    </header>
    <main>
      <AppMainBody>
        <slot />
      </AppMainBody>
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
<script lang="ts">
import AppMainBody from '@/layouts/AppMainBody.vue'
import AppNavigation from '@/layouts/AppNavigation.vue'

export default {
  components: { AppMainBody, AppNavigation },
}
</script>
