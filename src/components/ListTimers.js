import { useSelector, useDispatch } from 'react-redux'
import { toggleTimer } from '../features/timers/timersSlice';
import { formatTime } from '../helpers/formatTime.js'
import '../styles/ListTimers.css'

function ListTimers(){
    const dispatcher = useDispatch()
    const timers = useSelector(state => state.timers.value);
    return (
        timers.map((timer, idx) => {
            return (
            <div key={timer.name} className="timers">
                <h2>{timer.name}</h2>

                <p>{formatTime(timer.time)}</p>

                <button onClick={() => dispatcher(toggleTimer(idx))}>
                    { timer.isRunning? 'Stop' : 'Start' }
                </button>
            </div>
            )
        })
    )
}

export default ListTimers;