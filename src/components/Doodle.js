import { useState, useEffect } from 'react'
import './Doodle.css'

const fileFormat = '.svg'

export const ShowDrawing = (props) => {
    const [drawingState, setDrawingState] = useState({
        index: props.stage
    })
    const { index } = drawingState

    useEffect(() => {
        setDrawingState({ index: props.stage })
    }, [props])

    return(<div>
        { index === undefined && <><br />{props.alt}</>}
        { index >= 0 && index < 10 && <img src={`gfx/hangman_${index}${fileFormat}`} className="hanged-man" alt="Just hanging here..." /> }
        { index >= 10 && <img src={`gfx/hangman_10${fileFormat}`} className="rotate hanged-man linear infinite spinner" alt="...dead!" /> }
    </div>)
}

export default ShowDrawing
