import { useDispatch } from 'react-redux'
import { addNewTimer } from '../actions'

function NewTimer(){
    const dispatcher = useDispatch();

    return (
        <div>
            <input id="newTimer" placeholder="Timer Name"></input>
            <button onClick={() => {
                // Add new timer and clear input field name
                const timerInputField = document.getElementById('newTimer');
            
                dispatcher(addNewTimer(timerInputField.value))
                timerInputField.value = '';
            }}>Save</button>
        </div>
    )
}

export default NewTimer;