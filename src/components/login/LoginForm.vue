<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { boolean, object, string } from 'yup'
import LoginWithGoogle from '@/components/login/LoginWithGoogle.vue'
const loginSchema = object({
  email: string().required().email(),
  password: string().required(),
  remember: boolean(),
})
const onSubmit = (values: Record<string, any>) => {
  console.log(values)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 m-auto w-[360px]">
    <div class="rounded-2xl mx-auto shadow-2xl p-4 w-fit">
      <img src="@/assets/images/logo.png" class="w-[55px]" alt="logo" />
    </div>
    <div class="text-black text-center">
      <p class="font-bold text-heading">Welcome back</p>
      <p class="text-secondary text-base">Welcome back! Please enter your details.</p>
    </div>
    <Form class="w-full flex flex-col space-y-4 text-base" :validation-schema="loginSchema"  @submit="onSubmit">
      <div>
        <label>Email</label>
        <Field name="email" placeholder="Enter your email" class="form-input" />
        <ErrorMessage name="email" class="message-error" />
      </div>
      <div>
        <label>Passwords</label>
        <Field name="password" placeholder="Enter your passwords" type="password" class="form-input" />
        <ErrorMessage name="password" class="message-error" />
      </div>
      <div class="flex justify-between">
        <div class="flex items-center space-x-2">
          <input type="checkbox" class="mt-.5"> <p class="font-semibold">Remember me</p>
        </div>
        <router-link to="/forgot-password" class="font-bold text-primary hover:underline">Forgot password</router-link>
      </div>
      <button type="submit" class="bg-primary p-4 text-white rounded-2xl font-bold">Log in</button>
      <div class="w-full flex justify-between items-center space-x-4">
        <hr class="bg-medium flex-1 h-[1px]">
        <span class="font-semibold text-medium">OR</span>
        <hr class="bg-medium flex-1 h-[1px]">
      </div>
      <LoginWithGoogle />
    </Form>
    <div class="w-full text-center text-base">
      <span class="text-tertiary mr-1">Don’t have an account?</span>
      <router-link to="/sign-up" class="font-bold text-primary hover:underline">Sign up</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-input {
  @apply px-4 py-3 bg-[#37475D]/10 w-full rounded-xl text-base
}
.message-error {
  @apply text-base text-red-500 mt-1 inline-block
}
</style>