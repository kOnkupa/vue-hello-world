<template>
  <router-link
    :to="item.path"
    :active-class="'bg-gray-900 text-white' + defaultLinkStyle"
    :class="'text-gray-300 hover:bg-gray-700 hover:text-white' + defaultLinkStyle"
    :exact="item.exact"
    >{{ item.name }}</router-link
  >
</template>
<script lang="ts">
import { PropType } from 'vue'
import { RouterProps } from '@/router/type'

export default {
  name: 'NavigationLink',
  data(): { defaultLinkStyle: string } {
    const defaultLinkStyle = 'block px-3 py-2 rounded-md text-base font-medium'
    return {
      defaultLinkStyle: defaultLinkStyle,
    }
  },
  props: {
    item: {
      type: Object as PropType<RouterProps>,
    },
  },
}
</script>
