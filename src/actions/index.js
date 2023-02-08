import Timer from '../components/Timer'

export const ADD_NEW_TIMER = 'ADD_NEW_TIMER';
export const START_TIMER = 'START_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';

export function addNewTimer(name){
    return {
        type: ADD_NEW_TIMER,
        payload: new Timer(name)
    }
}

export function startTimer(id){
    return {
        type: START_TIMER,
        payload: { id }
    }
}

export function pauseTimer(id){
    return {
        type: PAUSE_TIMER,
        payload: { id }
    }
}
