import { useSelector, useDispatch } from 'react-redux'
import { startTimer, pauseTimer } from '../actions'
import '../styles/ListTimers.css'

function ListTimers(){
    const dispatcher = useDispatch()
    const timers = useSelector(state => state.timers);
    return (
        timers.map((timer, idx) => {
            return (
            <div key={timer.name} className="timers">
                <h2>{timer.name}</h2>

                <p>{timer.time}</p>

                <button onClick={() => dispatcher(startTimer(idx))}>
                    Start
                </button>

                <button onClick={() => dispatcher(pauseTimer(idx))}>
                    Stop
                </button>
            </div>
            )
        })
    )
}

export default ListTimers;