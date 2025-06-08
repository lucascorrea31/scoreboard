<script setup lang="ts">
import { TeamGameHistory } from '@/types';
import { convertTime } from '@/util';

const baseURL = '/src/assets/icons/';

defineProps<{
  firstHalf: TeamGameHistory[],
  secondHalf: TeamGameHistory[];
}>();
</script>

<template>
  <div class="p-2 flex flex-row items-baseline">
    <div class="border-r p-2 w-full h-full">
      <h4 class="text-center border-b">1T</h4>
      <div class="text-left border-b flex flex-row justify-between py-1" v-for="(item, index) in firstHalf"
        :key="index">
        <div class="flex-1 flex flex-wrap items-center">
          <img class="max-h-4 invert-100" :src="baseURL + item.eventType + '.png'" :alt="item.eventType">
        </div>
        <div class="flex-5 text-sm flex flex-wrap items-end">#{{ item.player.number }} - {{
          item.player.name }}
        </div>
        <div class="flex-1">{{ convertTime(item.time) }}</div>
      </div>
    </div>

    <div class="border-l p-2 w-full h-full">
      <h4 class="text-center border-b">2T</h4>
      <div class="text-left border-b flex flex-row justify-between py-1" v-for="(item, index) in secondHalf"
        :key="index">
        <div class="flex-1 flex flex-wrap items-center"><img class="max-h-4 invert-100"
            :src="baseURL + item.eventType + '.png'" :alt="item.eventType"></div>
        <div class="flex-5 text-sm flex flex-wrap items-end">#{{ item.player.number }} - {{ item.player.name }}</div>
        <div class="flex-1">{{ convertTime(item.time) }}</div>
      </div>
    </div>
  </div>
</template>
