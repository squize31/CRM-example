<script lang="ts" setup>
import { account } from '~/lib/appwrite'

const isLoadingStore = useIsLoadingStore()
const authstore = useAuthStore()
const router = useRouter()

onMounted(async () => {
  try{
    const user = await account.get()
    if (user) {
      authstore.set(user)
    }
  } catch (error) {
    router.push('/login')
    console.error('Error during onMounted:', error)
  } finally {
    isLoadingStore.set(false)
  }
})
</script>

<template>
  <LayoutLoader v-if="isLoadingStore.isLoading"/>
  <section v-else :class="{grid: authstore.isAuth}" style="min-height: 100vh;">
    <LayoutSidebar v-if="authstore.isAuth" />
    <div>
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: 1fr 6fr;
}
</style>