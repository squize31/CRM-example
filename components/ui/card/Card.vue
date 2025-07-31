<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

useHead({
  title: 'Home | CRM System'
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-lg border py-6 animation border-transparent transition-all hover:border-[#a252c83d]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    border-color: #a252c83d;
    transform: scale(0.5) translateY(-30px);
    opacity: 0.4;
  }

  90% {
    border-color: #a252c83d;
  }

  to {
    border-color: transparent;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.3s ease-in-out
}
</style>