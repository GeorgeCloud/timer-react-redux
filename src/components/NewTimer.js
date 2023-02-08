import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTimer } from '../features/timers/timersSlice'

function NewTimer(){
    const dispatcher = useDispatch();
    const [name, setName] = useState('')

    return (
        <div className='newTimerForm'>
            <input
                placeholder="Timer Name"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => dispatcher(addTimer(name))}>
                Save
            </button>
        </div>
    )
}

export default NewTimer;