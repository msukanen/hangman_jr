import { useState, useEffect } from 'react'
import './Doodle.css'

export const ShowDrawing = (props) => {
    const [drawingState, setDrawingState] = useState({
        index: props.stage
    })
    const { index } = drawingState

    useEffect(() => {
        console.log(props.stage)
        setDrawingState({ index: props.stage })
    }, [props])

    return(<div>
        { index >= 0 && index < 10 && <img src={`gfx/hangman_${index+1}.png`} alt="Just hanging here..." /> }
        { index >= 10 && <img src="gfx/hangman_10.png" className="rotate linear infinite" alt="...dead!" /> }
    </div>)
}

export default ShowDrawing
