import { useState, useEffect } from 'react'

export const ShowWord = (props) => {
    const [wordState, setWordState] = useState({
        word: props.word,
        show: '',
        guessed: props.guessed,
        gameOver: props.gameOver
    })
    const { word, show } = wordState

    useEffect(() => {
        let chs = new Array(props.word.length).fill('-')
        props.word.split('').map((ch, index) => {
            if (props.guessed && props.guessed.indexOf(ch) >= 0)
                chs[index] = ch
            return null
        })
        chs = chs.join('')
        
        if (props.gameOver)
            chs = props.word

        setWordState({
            word: props.word,
            show: chs,
            guessed: props.guessed,
            gameOver: props.gameOver
        })
    }, [props])

    return(<div className="hangman-word">
        {word && <code style={{fontSize:'3vh'}}>{show.toUpperCase()}</code>}
    </div>)
}

export default ShowWord
