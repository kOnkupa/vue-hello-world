<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <NavigationMobileHamburger :open="open" />
          <!-- End Mobile button-->
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <!-- Navigation logo-->
          <NavigationLogo />
          <!-- Desktop Menu-->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NavigationLink v-for="(item, key) in navigation" :key="key" :item="item"></NavigationLink>
            </div>
          </div>
        </div>
        <!-- User Menu-->
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Desktop auth button-->
          <NavigationAuthButton class="hidden sm:block" />
          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton
                class="
                  bg-gray-800
                  flex
                  text-sm
                  rounded-full
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                "
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="
                  origin-top-right
                  absolute
                  right-0
                  mt-2
                  w-48
                  rounded-md
                  shadow-lg
                  py-1
                  bg-white
                  ring-1 ring-black ring-opacity-5
                  focus:outline-none
                "
              >
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
    <!-- Mobile Menu-->
    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NavigationLink v-for="(item, key) in navigation" :key="key" :item="item"></NavigationLink>
        <NavigationAuthButton :login="login" :logout="logout" />
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import NavigationAuthButton from '@/components/Navigation/NavigationAuthButton'
import NavigationMobileHamburger from '@/components/Navigation/NavigationMobileHamburger'
import { Disclosure, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { routes } from '@/router'
import NavigationLink from '@/layouts/NavigationLink.vue'
import NavigationLogo from '@/components/Navigation/NavigationLogo.vue'

export default {
  name: 'AppNavigation',
  data() {
    return {
      navigation: routes.filter((route) => route.show !== false),
      isAuthenticated: this.$auth.isAuthenticated,
      loading: this.$auth.loading,
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    login() {
      this.$auth.loginWithRedirect()
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    logout() {
      this.$auth.logout()
      this.$router.push({ path: '/' })
    },
  },
  components: {
    NavigationAuthButton,
    NavigationMobileHamburger,
    NavigationLogo,
    NavigationLink,
    Disclosure,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
}
</script>
