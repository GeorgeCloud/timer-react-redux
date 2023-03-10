import { createSlice } from '@reduxjs/toolkit'
import Timer from '../../components/Timer'

const initialState = {
  value: []
}

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push(new Timer(action.payload))
    },

    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning = !state.value[action.payload].isRunning
    },

    deleteTimers: (state) => void(state.value = []),

    update: (state, action) => {
      state.value.forEach(timer => {
        if (timer.isRunning) {
          timer.time += action.payload
        }
      })
    },
  },
})

export const { addTimer, toggleTimer, deleteTimers, update } = timersSlice.actions

export default timersSlice.reducer