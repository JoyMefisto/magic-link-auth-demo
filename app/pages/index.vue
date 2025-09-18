<script setup lang="ts">
import { useCourseStore } from "@/store/course";

const courseStore = useCourseStore();

onBeforeMount(async () => {
  await courseStore.fetchCourses();
});
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold my-4">Public page</h1>
    <h3 class="text-3xl font-bold my-4">List of all courses</h3>
    <AppCard
      v-for="course in courseStore.getCourses"
      :key="course.id"
      :course="course"
      class="mb-2"
    />
  </div>
</template>
