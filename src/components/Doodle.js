import { useState, useEffect } from 'react'
import './Doodle.css'

const fileFormat = '.svg'

/**
 * ShowDrawing tag.
 * @param {*} props index of image
 * @returns blob
 */
export const ShowDrawing = (props) => {
    const [drawingState, setDrawingState] = useState({
        index: props.stage
    })
    const { index } = drawingState

    useEffect(() => {
        setDrawingState({ index: props.stage })
    }, [props])

    // show either an image or text, based on image index value
    return(<div className="hangman-doodle">
        { index === undefined && <><br />{props.alt}</>}
        { index >= 0 && index < 10 && <img src={`gfx/hangman_${index}${fileFormat}`} className="hanged-man" alt="Just hanging here..." /> }
        { index >= 10 && <img src={`gfx/hangman_10${fileFormat}`} className="rotate hanged-man linear infinite spinner" alt="...dead!" /> }
    </div>)
}

export default ShowDrawing
