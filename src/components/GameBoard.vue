<template>
   <div class="container mx-auto my-5 w-full">
      <div class="md:grid md:grid-cols-12">
         <div class="md:col-span-3">
            <div class="mt-12 text-center font-GTAmericaExpandedBold">
               <p class="level mb-5 text-xl">
                  Level:
                  <strong class="rounded-lg bg-green-500 px-2 py-1 text-white">{{ level }}</strong>
               </p>
               <button
                  class="mb-3 rounded-md bg-blue-500 px-5 py-2 font-GTAmericaExpandedBlack text-xl text-white"
                  @click="start"
                  :disabled="!isStarted"
               >
                  PLAY
               </button>
               <p class="my-1" v-if="isWin">
                  Congrats 🎉
                  <br />
                  The next level is coming up...
               </p>
               <p class="my-1" v-if="isFail">
                  You lose 🙁️
                  <br />
                  Try again.
               </p>
            </div>
         </div>
         <div class="mx-auto w-96 md:col-span-6">
            <BoardItem
               :game-status="gameStatus"
               v-for="field in fields"
               :field="field"
               :key="'item-' + field.id"
               @selectField="selectField($event)"
            />
         </div>
         <div class="col-span-3 px-3">
            <div class="rounded-sm p-1 font-GTAmericaRegular shadow-sm">
               <p>
                  Welcome to a game that will enhance your visual memory. In this game, you will be presented with a set
                  of cards, some of which will be marked and will change with each level. After a certain time, the
                  marked cards will be shown to you briefly, and then your task is to identify and click on those cards.
               </p>
               <p>Good luck</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import BoardItem from '@/components/BoardItem.vue'
import useGameInit from '@/components/composables/useGameInit'
import useGameStart from '@/components/composables/useGameStart'
import useGameProcess from '@/components/composables/useGameProcess'
import { ref } from 'vue'
import { GAME_STATUS } from '@/constants'

export default {
   name: 'GameBoard',
   components: {
      BoardItem
   },
   setup() {
      const number = 36
      const gameStatus = ref(GAME_STATUS.NONE)
      const { level, fields, init } = useGameInit(number)
      const { start, isStarted } = useGameStart(init, fields, level, number, gameStatus)
      const { selectField, isWin, isFail } = useGameProcess(fields, gameStatus, level, start)
      return {
         number,
         level,
         fields,
         init,
         start,
         gameStatus,
         isStarted,
         selectField,
         isWin,
         isFail
      }
   }
}
</script>

<style scoped></style>
