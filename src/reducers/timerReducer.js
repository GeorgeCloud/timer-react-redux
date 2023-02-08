import { ADD_NEW_TIMER, START_TIMER, PAUSE_TIMER } from '../actions';

export function timerReducer(timers=[], item){
    switch(item.type){
        case ADD_NEW_TIMER:
            return [...timers, item.payload]

        case START_TIMER:
            let timerId = item.payload.id;
            timers[timerId].time += 1
            timers[timerId].isRunning = true
            console.log(timers[timerId])
            return [...timers]

        case PAUSE_TIMER:
            timers[timerId].isRunning = false
            return timers
        default:
            return []
    }
}
