import { useState, useEffect } from 'react'
import './WordBoard.css'

export const ShowWord = (props) => {
    const [wordState, setWordState] = useState({
        word: props.word,
        show: '',
        guessed: props.guessed,
        gameOver: props.gameOver
    })
    const { word, show } = wordState

    useEffect(() => {
        // construct an array to show unguessed (marked with '-') and guessed characters.
        let chs = new Array(props.word.length).fill('-')
        
        //! ESLint complains about array-callback-return, so disable it as we do NOT use the return value for anything
        // eslint-disable-next-line
        props.word.split('').map((ch, index) => {
            if (props.guessed && props.guessed.indexOf(ch) >= 0)
                chs[index] = ch
        })
        chs = chs.join('')
        
        if (props.gameOver) // game over? Show the correct word now.
            chs = props.word

        setWordState({
            word: props.word,
            show: chs,
            guessed: props.guessed,
            gameOver: props.gameOver
        })
    }, [props])

    return(<div className="hangman-word">
        {word && <code>{show.toUpperCase()}</code>}
    </div>)
}

export default ShowWord
