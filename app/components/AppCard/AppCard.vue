<script setup lang="ts">
import type { ICourse } from "@/store/course";

interface IProps {
  course?: ICourse | null;
}

const { course = null } = defineProps<IProps>();
</script>
<template>
  <UCard v-if="course">
    <strong>{{ course.title }}</strong>
    <ul>
      <li v-for="topic in course.topics" :key="topic.id">
        {{ topic.title }} — {{ topic.desc }}
      </li>
    </ul>
  </UCard>
</template>
