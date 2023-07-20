<script setup lang="ts">
import GameBoard from '@/components/GameBoard.vue'
</script>

<template>
   <div class="container mx-auto my-5 mt-16 w-full bg-blue-50 py-5 md:w-3/4">
      <div class="grid items-center justify-center md:grid-cols-12">
         <div class="mr-5 grid justify-items-end md:col-span-3">
            <img src="@/assets/NewLogo.png" alt="" width="150" />
         </div>
         <div class="rounded-sm bg-white p-2 md:col-span-6">
            <h1 class="font-GTAmericaExpandedBlack text-lg text-blue-600">Vuejs3 with Typescript Game - BalKabugu</h1>
            <p class="font-GTMonoThin text-blue-300">Remember and open all green fields</p>
         </div>
         <div class="col-span-3 mx-auto font-GTAmericaExpandedBold">How to play ?</div>
      </div>
      <GameBoard />
   </div>
</template>
