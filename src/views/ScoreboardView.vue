<script setup lang="ts">
import PatreonIcons from '@/components/PatreonIcons.vue';
import ScoreboardTeam from '@/components/ScoreboardTeam.vue';
import ScoreboardTimer from '@/components/ScoreboardTimer.vue';
import { OtherType, PenaltyType, TeamInterface } from '@/types';
import { onMounted, ref } from 'vue';

const baseURL = "/src/assets/teams/";

const timerLabel = ref("");
const timerCounter = ref("");

const teamHome = ref({} as TeamInterface);
const teamAway = ref({} as TeamInterface);

onMounted(() => {
  timerLabel.value = "1 período";
  timerCounter.value = "00:00.00";

  teamHome.value = {
    name: "Flórida Panters",
    logo: baseURL + "team-1.png",
    score: 10,
    history: {
      firstHalf: [
        {
          eventType: OtherType.GOAL,
          player: {
            number: 10,
            name: 'Jon Doe'
          },
          description: '',
          time: 635
        },
        {
          eventType: PenaltyType.PENALTY_MINOR,
          player: {
            number: 37,
            name: 'Calvin Jorge'
          },
          description: '',
          time: 270
        },
        {
          eventType: PenaltyType.PENALTY_MAJOR,
          player: {
            number: 54,
            name: 'Altis Ember'
          },
          description: '',
          time: 100
        },
      ],
      secondHalf: [
        {
          eventType: PenaltyType.PENALTY_MINOR,
          player: {
            number: 37,
            name: 'Calvin Jorge'
          },
          description: '',
          time: 940
        },
        {
          eventType: OtherType.GOAL,
          player: {
            number: 10,
            name: 'Jon Doe'
          },
          description: '',
          time: 560
        }
      ]
    }
  };

  teamAway.value = {
    name: "Edmonton Oilers",
    logo: baseURL + "team-2.png",
    score: 9
  };
});
</script>

<template>
  <div class="m-auto w-full h-[95vh] flex flex-col justify-between">
    <!-- TIMER -->
    <ScoreboardTimer :label="timerLabel" :time="timerCounter"></ScoreboardTimer>

    <!-- SCORE -->
    <div class="score-board w-full flex flex-row gap-10">
      <!-- Team Home -->
      <ScoreboardTeam class="flex-1" :team-name="teamHome.name" :team-logo="teamHome.logo" :team-score="teamHome.score"
        :history="teamHome.history" />

      <div class="border-2 border-white w-0 h-auto"></div>

      <!-- Team Away -->
      <ScoreboardTeam class="flex-1" :team-name="teamAway.name" :team-logo="teamAway.logo" :team-score="teamAway.score"
        :is-away="true" />
    </div>

    <!-- LEGEND -->
    <PatreonIcons />
  </div>
</template>
