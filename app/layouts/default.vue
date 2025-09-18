<template>
  <div>
    <AppHeader v-if="$route.name !== 'login'" />
    <main class="w-7xl mx-auto">
      <slot />
    </main>
  </div>
</template>
