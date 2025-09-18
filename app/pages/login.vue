<template>
  <div class="p-6 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login with Magic Link</h1>
    <UInput
      v-model="email"
      type="email"
      placeholder="your@email.com"
      required
      class="w-full mb-3"
    />
    <UButton class="btn cursor-pointer" :disabled="isLoading" @click="sendLink">
      {{ isLoading ? "Sending…" : "Send Magic Link" }}
    </UButton>

    <div v-if="message" class="mt-4 text-sm text-gray-700">{{ message }}</div>

    <div v-if="link" class="mt-3">
      <p class="text-xs text-gray-500">Press on the magic link:</p>

      <UButton
        class="cursor-pointer"
        icon="i-lucide-rocket"
        color="primary"
        variant="link"
        :to="link"
      >
        Magic Link
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import to from "await-to-js";

import { useUserStore } from "@/store/user";

const userStore = useUserStore();

const email = ref("");
const isLoading = ref(false);
const message = ref("");
const link = ref("");

const sendLink = async () => {
  if (!email.value) return;

  isLoading.value = true;
  message.value = "";
  link.value = "";

  const [err, data] = await to(userStore.fetchMagicLink(email.value));

  if (data) {
    message.value = data.message || "";
    if (data.link) link.value = data.link;
  }

  if (err) {
    message.value = err?.data?.message;
  }

  isLoading.value = false;
};
</script>
