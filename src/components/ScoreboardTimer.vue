<script setup lang="ts">
defineProps<{
  label: string,
  time: string;
}>();
</script>

<template>
  <div class="timer-board min-w-full">
    <div class="timer-label text-4xl text-center uppercase w-full">{{ label }}</div>
    <div class="timer w-full">
      <h3 class="text-9xl text-[12rem] text-center font-bold">{{ time }}</h3>
    </div>
  </div>
</template>
