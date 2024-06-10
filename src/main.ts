import './assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useStorage } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.beforeEach((to, from, next) => {
 const isLogged = useStorage('logged', false)
  if (!isLogged.value && to.name !== 'login') {
    router.push('/')
  } else if (isLogged.value && to.name === 'login') {
    router.push('/home')
  } else next()
})

app.mount('#app')
