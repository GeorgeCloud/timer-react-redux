import { useSelector, useDispatch } from 'react-redux'
import { toggleTimer, deleteTimers } from '../features/timers/timersSlice';
import { formatTime } from '../utils/formatTime.js'
import '../styles/ListTimers.css'

function ListTimers(){
    const dispatcher = useDispatch()
    const timers = useSelector(state => state.timers.value);

    return (
        <div className='timers'>
            {timers.map((timer, idx) => {
                return (
                    <div key={timer.name} className='single-timer'>
                        <h2>{timer.name}</h2>

                        <h2>{formatTime(timer.time)}</h2>

                        <button onClick={() => dispatcher(toggleTimer(idx))}>
                            { timer.isRunning? 'Stop' : 'Start' }
                        </button>
                    </div>
                )
            })}

            {timers.length? (
                <button onClick={() => dispatcher(deleteTimers())}>Delete Timers</button>
            ) : ''}
        </div>
    )
}

export default ListTimers;