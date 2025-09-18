<script setup lang="ts">
import { useUserStore } from "@/store/user";

const event = useRequestEvent();

if (event?.context?.user) {
  const userStore = useUserStore();

  userStore.setUser(event.context.user);
}
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
