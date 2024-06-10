<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { object, string } from 'yup'
import LoginWithGoogle from '@/components/login/LoginWithGoogle.vue'
import { login } from '@/api/auth'
import { toast } from 'vue-sonner'
import IconLoading from '@/assets/svg/loading.svg'
import IconEyeHidden from '@/assets/svg/hidden.svg'
import IconEyeShow from '@/assets/svg/show.svg'
import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

// region [Interface]
interface ILoginState {
  email: string
  password: string
}
// endregion
// region [State]
const router = useRouter()
const loading = ref<boolean>(false)
const showPassword = ref<boolean>(false)
const isLogged = useStorage<boolean>('logged', false)
const rememberMe = useStorage<boolean>('remember-me', false)
const loginState = useStorage<ILoginState>('login-state', {
  email: 'success@gmail.com',
  password: '123123'
})
// endregion
// region [Validation & Submit]
const loginSchema = object({
  email: string().required().email(),
  password: string().required().min(6)
})
const onSubmit = async (values: Record<string, any>) => {
  try {
    loading.value = true
    const data = {
      email: values.email,
      password: values.password
    }
    const res = await login(data)
    if (res.data.status) {
      isLogged.value = true
      loginState.value = rememberMe.value
        ? data
        : {
            email: '',
            password: ''
          }
      toast.success('Login success')
      router.push('/home')
    }
  } catch (e) {
    toast.error('Login fail')
    isLogged.value = false
  } finally {
    loading.value = false
  }
}
// endregion
// region [Remember]
const onRememberMeChange = (value: any) => {
  rememberMe.value = value.target.checked
}
// endregion
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 m-auto w-[360px]">
    <!-- region @Logo-->
    <div class="rounded-2xl mx-auto shadow-2xl p-4 w-fit">
      <img src="@/assets/images/logo.png" class="w-[55px]" alt="logo" />
    </div>
    <!-- endregion-->
    <!-- region @Heading-->
    <div class="text-black text-center">
      <p class="font-bold text-heading">Welcome back</p>
      <p class="text-secondary text-base">Welcome back! Please enter your details.</p>
    </div>
    <!-- endregion-->
    <!-- region @Input Form-->
    <Form
      class="w-full flex flex-col space-y-4 text-base"
      :validation-schema="loginSchema"
      @submit="onSubmit"
    >
      <div>
        <label class="inline-block mb-1 text-medium text-sm font-semibold">Email</label>
        <Field
          v-model="loginState.email"
          name="email"
          placeholder="Enter your email"
          class="form-input"
          aria-autocomplete="none"
        />
        <ErrorMessage name="email" class="message-error" />
      </div>
      <div class="relative">
        <label class="inline-block mb-1 text-medium text-sm font-semibold">Passwords</label>
        <Field
          v-model="loginState.password"
          name="password"
          placeholder="Enter your passwords"
          :type="showPassword ? 'text' : 'password'"
          class="form-input"
        />
        <ErrorMessage name="password" class="message-error" />
        <span
          class="absolute top-9 right-3 text-black"
          @click.stop="showPassword = !showPassword"
          role="button"
        >
          <IconEyeShow v-if="showPassword" class="w-6 text-medium" />
          <IconEyeHidden v-else class="w-6" />
        </span>
      </div>
      <div class="flex justify-between">
        <div class="flex items-center space-x-2">
          <input v-model="rememberMe" type="checkbox" class="mt-.5" @change="onRememberMeChange" />
          <p class="font-semibold" @click="rememberMe = !rememberMe" role="button">Remember me</p>
        </div>
        <router-link to="/forgot-password" class="font-bold text-primary hover:underline">
          Forgot password
        </router-link>
      </div>
      <button type="submit" class="bg-primary p-4 text-white rounded-xl">
        <IconLoading v-if="loading" class="text-sm text-white m-auto" />
        <span v-else class="font-bold">Log in</span>
      </button>
      <div class="w-full flex justify-between items-center space-x-4">
        <hr class="bg-medium flex-1 h-[1px]" />
        <span class="font-semibold text-medium">OR</span>
        <hr class="bg-medium flex-1 h-[1px]" />
      </div>
      <LoginWithGoogle />
    </Form>
    <!-- endregion-->
    <!-- region @Optional-->
    <div class="w-full text-center text-base">
      <span class="text-tertiary mr-1">Don’t have an account?</span>
      <router-link to="/sign-up" class="font-bold text-primary hover:underline">
        Sign up
      </router-link>
    </div>
    <!-- endregion-->
  </div>
</template>

<style lang="scss" scoped>
.form-input {
  @apply px-4 py-3 bg-subtle/[6%] w-full rounded-xl text-base;
}
.message-error {
  @apply text-base text-red-500 mt-1 inline-block;
}
</style>
