<script lang="ts" setup>
import { account } from '~/lib/appwrite'
import { v4 as uuid } from 'uuid'

useHead({
  title: 'Login | CRM System'
})

interface Error {
  message: string;
  code:    number;
  type:    string;
  version: string;
}

const emailRef = ref('')
const passwordRef = ref('')
const nameRef = ref('')

const isLoadingStore = useIsLoadingStore()
const authstore = useAuthStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)
  try {
    await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
    const response = await account.get()
    if(response){
      authstore.set({
        email: response.email,
        name: response.name,
        status: response.status
      })
    }

    emailRef.value = ''
    passwordRef.value = ''
    nameRef.value = ''

    await router.push('/')
  } catch (error) {
    alert(`Ошибка - ${(error as Error).message}`)
    isLoadingStore.set(false)
  } finally {
    isLoadingStore.set(false)
  }
}

const register = async () => {
  await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
  await login()
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput 
          v-model="emailRef" 
          placeholder="Email" 
          type="email" 
          class="mb-3"
        />
        <UiInput 
          v-model="passwordRef" 
          placeholder="Password" 
          type="password" 
          class="mb-3"
        />
        <UiInput 
          v-model="nameRef" 
          placeholder="Name" 
          type="name" 
          class="mb-3"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>