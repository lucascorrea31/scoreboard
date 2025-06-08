<script setup lang="ts">
import { TeamGameHistory, TeamPenalty } from '@/types';
import { computed } from 'vue';
import ScoreboardTeamInfo from './ScoreboardTeamInfo.vue';

const props = defineProps<{
  teamName: string,
  teamLogo: string,
  teamScore: number,
  isAway?: boolean,
  penalties?: TeamPenalty[],
  history?: { firstHalf: TeamGameHistory[], secondHalf: TeamGameHistory[]; };
}>();

const score = computed(() => (props.teamScore + "").padStart(2, "0"));
</script>

<template>
  <div class="flex flex-col py-4">
    <!-- Logo and Score -->
    <div class="flex gap-2" :class="{ 'flex-row-reverse': isAway, 'flex-row': !isAway }">
      <div class="team-logo flex-2 w-52 h-40 flex justify-center items-center border-2 border-white">
        <img :src="teamLogo" :alt="'Logo ' + teamName" class="max-h-38">
      </div>

      <div class="flex-1 flex justify-center items-center">
        <h3 class="text-9xl text-[10rem]">{{ score }}</h3>
      </div>
    </div>

    <!-- Team Name -->
    <div class="w-full p-2 items-baseline border-2 border-white">
      <h4 class="text-3xl font-bold">{{ teamName }}</h4>
    </div>

    <!-- Info -->
    <ScoreboardTeamInfo class="w-full min-h-28 border-2 border-white" :first-half="history?.firstHalf ?? []"
      :second-half="history?.secondHalf ?? []" />
  </div>
</template>
