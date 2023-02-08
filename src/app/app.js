import { configureStore } from '@reduxjs/toolkit';
import timersReducer from '../features/timers/timersSlice';
import { update } from '../features/timers/timersSlice';
import { loadState, saveState } from '../utils/storage'

let lastUpdateTime = Date.now()

export const store = configureStore({
	reducer: {
		timers: timersReducer
	},
	preloadedState: loadState()
})

store.subscribe(() => {
	saveState(store.getState())
})

setInterval(() => {
	const now = Date.now()
	const deltaTime = now - lastUpdateTime
	lastUpdateTime = now
	store.dispatch(update(deltaTime))
}, 500)