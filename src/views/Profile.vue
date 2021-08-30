<template>
  <div class="my-10 p-10 border-2 rounded-md shadow-md">
    <div class="px-4 sm:px-6 md:px-0">
      <h1 class="text-3xl font-extrabold text-gray-900">Profile</h1>
    </div>
    <div class="py-6">
      <dl class="divide-y divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:pt-5">
          <dt class="text-sm font-medium text-gray-500">Name</dt>
          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0">
            <span class="flex-grow">{{ user.name }}</span>
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:pt-5">
          <dt class="text-sm font-medium text-gray-500">Email</dt>
          <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0">
            <span class="flex-grow">{{ user.email }}</span>
          </dd>
        </div>
      </dl>
    </div>
    <Button @click.prevent="this.logout">Log out</Button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@auth0/auth0-spa-js/src/global'
import Button from '@/components/AppButton.vue'

export default defineComponent({
  inject: ['logout'],
  data() {
    return {
      user: this.$auth,
    } as { user: User }
  },
  components: {
    Button,
  },
})
</script>
