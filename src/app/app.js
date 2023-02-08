import { configureStore } from '@reduxjs/toolkit';
import timerReducer from '../features/timers/timersSlice';
import { update } from '../features/timers/timersSlice';

let lastUpdateTime = Date.now()

export const store = configureStore({
    reducer: {
            timers: timerReducer,
    }
})

setInterval(() => {
	const now = Date.now()
	const deltaTime = now - lastUpdateTime
	lastUpdateTime = now
	store.dispatch(update(deltaTime))
}, 500)