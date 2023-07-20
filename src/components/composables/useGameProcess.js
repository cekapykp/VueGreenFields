import {DEFAULT_LEVEL, FIELD, GAME_SPEED, GAME_STATUS} from "@/constants";
import {computed, nextTick} from "vue";

export default function useGameProcess(fields, gameStatus, level, start) {
    const selectField = (id) => {
        const index = fields.value.findIndex((field) => {
            return field.id === id;
        })
        if (index > -1 && !fields.value[index].clicked) {
            fields.value[index].clicked = true;
            checkGame();
        }
    };
    const checkGame = () => {
        const errorIndex = fields.value.findIndex(field => {
            return field.clicked && field.value === FIELD.EMPTY;
        });
        if (errorIndex > -1) {
            setGameOver();
        }
        const notFoundItemIndex = fields.value.findIndex(field => {
            return !field.clicked && field.value === FIELD.FILLED;
        });
        if (notFoundItemIndex === -1) {
            setWin();
        }
    };
    const setGameOver = () => {
        gameStatus.value = GAME_STATUS.FAIL;
        level.value = DEFAULT_LEVEL;
    };
    const setWin = () => {
        gameStatus.value = GAME_STATUS.WIN;
        setTimeout(async () => {
            level.value++;
            await nextTick();
            start();
        }, GAME_SPEED);
    };
    const isWin = computed(() => {
        return gameStatus.value === GAME_STATUS.WIN;
    });
    const isFail = computed(() => {
        return gameStatus.value === GAME_STATUS.FAIL;
    });
    return {
        selectField,
        isWin,
        isFail
    }
}