<script setup lang="ts">
import { TeamGameHistory } from '@/types';
import { convertTime } from '@/util';

defineProps<{
  firstHalf: TeamGameHistory[],
  secondHalf: TeamGameHistory[];
}>();
</script>

<template>
  <div class="flex flex-col items-baseline">
    <!-- Technical pause -->
    <div class="border p-2 w-full flex flex-row justify-between">
      <div class="flex-2 text-lg">Tempo técnico</div>
      <div class="flex-1 flex flex-row justify-evenly items-center">
        <div class="technical-timeout inactive"></div>
        <div class="technical-timeout active"></div>
      </div>
    </div>

    <!-- Penalties -->
    <div class="w-full max-h-[160px] overflow-hidden">

      <div class="w-full flex flex-col justify-between">
        <div class="h-12 flex flex-row items-stretch border-2 penalty-box-active">
          <div class="flex-1 text-2xl text-center px-2 py-1">#10</div>
          <div class="flex-9 text-3xl text-left text-white px-2 py-1 penalty-title-active">FALTA MENOR</div>
          <div class="flex-4 text-3xl text-right px-2 py-1">{{ convertTime(32) }}</div>
        </div>
      </div>

      <div class="w-full flex flex-col justify-between">
        <div class="h-12 flex flex-row items-stretch border-2 penalty-box-active">
          <div class="flex-1 text-2xl text-center px-2 py-1">#15</div>
          <div class="flex-9 text-3xl text-left text-white px-2 py-1 penalty-title-active">FALTA MENOR</div>
          <div class="flex-4 text-3xl text-right px-2 py-1">{{ convertTime(109) }}</div>
        </div>
      </div>

      <div class="w-full flex flex-col justify-between">
        <div class="h-12 flex flex-row items-stretch border-2 penalty-box-inactive">
          <div class="flex-1 text-2xl text-center px-2 py-1">#10</div>
          <div class="flex-9 text-3xl text-left text-white px-2 py-1 penalty-title-inactive">FALTA MENOR</div>
          <div class="flex-4 text-3xl text-right px-2 py-1">{{ convertTime(120) }}</div>
        </div>
      </div>

      <div class="w-full flex flex-col justify-between">
        <div class="h-12 flex flex-row items-stretch border-2 penalty-box-inactive">
          <div class="flex-1 text-2xl text-center px-2 py-1">#10</div>
          <div class="flex-9 text-3xl text-left text-white px-2 py-1 penalty-title-inactive">FALTA MENOR</div>
          <div class="flex-4 text-3xl text-right px-2 py-1">{{ convertTime(120) }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import "tailwindcss";

.technical-timeout {
  @apply w-18 h-6 my-1 mx-2 border-2 rounded-sm shadow shadow-gray-500
}

.technical-timeout.active {
  @apply bg-cyan-600 border-cyan-700
}

.technical-timeout.inactive {
  @apply bg-gray-600 border-gray-700
}

.penalty-box-active {
  @apply border-red-700
}

.penalty-box-inactive {
  @apply border-gray-700
}

.penalty-title-active {
  @apply bg-red-700
}

.penalty-title-inactive {
  @apply bg-gray-700
}
</style>
