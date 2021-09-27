import { useState, useEffect } from 'react'

export const ShowWord = (props) => {
    const [wordState, setWordState] = useState({ word: undefined })
    const { word } = wordState

    useEffect(() => {
        setWordState({ word: props.word })
    }, [props])

    return(<div>
        {word && <code style={{fontSize:'3vh'}}>{word.toUpperCase()}</code>}
    </div>)
}

export default ShowWord
