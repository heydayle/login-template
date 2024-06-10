<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import router from '@/router'

const isLogged = useStorage('logged', false)
const logout = () => {
  isLogged.value = false
  router.push('/')
}
</script>

<template>
  <main class="p-4">
    <div class="font-bold">Login success</div>
    <button class="px-4 pt-1 pb-2 bg-red-500 rounded-xl text-white" @click="logout">Log out</button>
  </main>
</template>
