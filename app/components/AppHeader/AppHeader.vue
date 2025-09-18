<script setup lang="ts">
import { useUserStore } from "@/store/user";
import to from "await-to-js";

const userStore = useUserStore();

const toLogout = async () => {
  const [, data] = await to(userStore.logout());

  if (data) {
    await navigateTo("/login", { replace: true });
  }
};
</script>

<template>
  <UCard>
    <div class="w-full flex flex-row justify-between">
      <div>
        <span class="text-2xl mr-12">It's a demo</span>
        <NuxtLink href="/">Main</NuxtLink>
        <NuxtLink v-if="userStore.user?.email" href="/user">
          | My profile
        </NuxtLink>
      </div>
      <UButton
        v-if="!userStore.isAuthorized"
        class="cursor-pointer"
        size="md"
        @click="navigateTo('/login')"
      >
        Log in
      </UButton>
      <UButton v-else class="cursor-pointer" size="md" @click="toLogout">
        Log out
      </UButton>
    </div>
  </UCard>
</template>
