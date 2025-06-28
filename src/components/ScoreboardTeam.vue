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
const teamType = computed(() => props.isAway ? "Away" : "Home");
</script>

<template>
  <div class="flex flex-col py-1">
    <!-- Team Type | Penalties cron -->
    <div class="w-full h-14 p-2 items-baseline border border-white">
      <h4 class="text-3xl font-bold text-center">{{ teamType }}</h4>
    </div>

    <!-- Logo and Score -->
    <div class="flex gap-2" :class="{ 'flex-row-reverse': isAway, 'flex-row': !isAway }">
      <div class="team-logo flex-2 w-52 h-40 flex justify-center items-center">
        <img :src="teamLogo" :alt="'Logo ' + teamName" class="max-h-38">
      </div>

      <div class="flex-1 flex justify-center items-center">
        <h3 class="text-9xl text-[10rem]">{{ score }}</h3>
      </div>
    </div>

    <!-- Team Name -->
    <div class="w-full p-2 border border-white flex justify-between items-baseline"
      :class="{ 'flex-row-reverse': isAway, 'flex-row': !isAway }">
      <h4 class="text-3xl font-bold">{{ teamName }}</h4>
      <div class="w-1/8 text-3xl text-center font-bold" :class="{ 'border-r': isAway, 'border-l': !isAway }">25</div>
    </div>

    <!-- Info -->
    <ScoreboardTeamInfo class="w-full border border-white" :first-half="history?.firstHalf ?? []"
      :second-half="history?.secondHalf ?? []" />
  </div>
</template>
