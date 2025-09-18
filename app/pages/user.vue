<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { useCourseStore } from "@/store/course";

const userStore = useUserStore();
const courseStore = useCourseStore();

onBeforeMount(async () => {
  await courseStore.fetchUserCourses();
});
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold my-4">The page is accessible only to me</h1>
    <p v-if="userStore?.user?.email">
      <b>E-mail:</b> <span>{{ userStore?.user?.email }}</span>
    </p>

    <h3 class="text-3xl font-bold my-4">List of my courses</h3>

    <AppCard
      v-for="course in courseStore.getUserCourses"
      :key="course.id"
      :course="course"
      class="mb-2"
    />
  </section>
</template>
