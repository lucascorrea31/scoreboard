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
    score: 9,
    history: {
      firstHalf: [
        {
          eventType: PenaltyType.PENALTY_MINOR,
          player: {
            number: 98,
            name: 'Pat Demon'
          },
          description: '',
          time: 273
        },
        {
          eventType: PenaltyType.PENALTY_MINOR,
          player: {
            number: 93,
            name: 'Lorem Ipsum'
          },
          description: '',
          time: 132
        },
      ],
      secondHalf: [
        {
          eventType: PenaltyType.MISCONDUCT,
          player: {
            number: 87,
            name: 'Douglas Count'
          },
          description: '',
          time: 949
        },
        {
          eventType: OtherType.GOAL,
          player: {
            number: 4,
            name: 'Jones Kvaratskiy'
          },
          description: '',
          time: 478
        }
      ]
    },
    penalties: [
      {
        penaltyType: PenaltyType.PENALTY_MINOR,
        player: {
          number: 37,
          name: "Lorem Ipsum",
        },
        time: 120
      }
    ]
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
        :history="teamHome.history" :penalties="teamHome.penalties" />

      <div class="w-fit h-auto flex flex-col">
        <div class="text-6xl leading-80">X</div>
      </div>

      <!-- Team Away -->
      <ScoreboardTeam class="flex-1" :team-name="teamAway.name" :team-logo="teamAway.logo" :team-score="teamAway.score"
        :history="teamAway.history" :penalties="teamAway.penalties" :is-away="true" />
    </div>

    <!-- LEGEND -->
    <PatreonIcons />
  </div>
</template>
