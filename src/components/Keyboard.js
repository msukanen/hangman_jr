import { useState, useEffect } from 'react'

const alphabet = "abcdefghijklmnopqrstuvwxyz"

export const Keyboard = (props) => {
    const hook = props.onClick
    const [wordState, setWordState] = useState({
        guessed: props.guessed
    })

    useEffect(() => {
        // console.log(`KBD ${props.guessed}`)
        setWordState({ guessed: props.guessed })
    }, [props])

    const isGuessed = (ch) => {
        if (wordState.guessed === undefined)
            return false
        return wordState.guessed.indexOf(ch) >= 0
    }

    return(<div>
        {alphabet.split('').map(ch => !isGuessed(ch) ? <button key={ch} onClick={() => hook(ch)}>{ch}</button> :'')}
    </div>)
}

export default Keyboard
