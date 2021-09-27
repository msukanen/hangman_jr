import { useState, useEffect } from 'react'
import './Keyboard.css'

const alphabet = "abcdefghijklmnopqrstuvwxyz"

export const Keyboard = (props) => {
    const hook = props.onClick
    const [wordState, setWordState] = useState({
        guessed: props.guessed
    })

    useEffect(() => {
        setWordState({ guessed: props.guessed })
    }, [props])

    return(<div className="hangman-keyboard">
        {alphabet.split('').map(ch => {
            /**
            * Check if given character is already guessimated.
            * @param {*} ch a character.
            * @returns boolean
            */
            const isGuessed = (ch) => {
                if (wordState.guessed === undefined)
                    return false
                return wordState.guessed.indexOf(ch) >= 0
            }
            
            return !isGuessed(ch) && <button className="hangman-key" key={ch} onClick={() => hook(ch)}>{ch}</button>
        })}
    </div>)
}

export default Keyboard
