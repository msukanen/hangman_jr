import ShowDrawing from './Doodle'
import ShowWord from './WordBoard'
import Keyboard from './Keyboard'
import { useState, useEffect } from 'react'

export const Main = (props) => {
    const words = props.words
    const randomWord = (words) => words[Math.floor(Math.random() * words.length)]
    const [guesser, setGuess] = useState({
        stage: undefined,
        word: randomWord(words),
        guessed: undefined,
        wrongGuesses: undefined
    })
    const { word, stage, guessed } = guesser

    const guessChar = (ch) => {
        let g
        if (guessed) {
            guessed.push(ch)
            g = guessed
        }
        else g = [ch]
        console.log(`guessChar ${ch}`)

        setGuess({ stage: stage !== undefined ? stage+1 : 0, word: word, guessed: g })
    }

    useEffect(() => {
        setGuess({ stage: stage, word: word, guessed: guessed })
    }, [words, stage, guessed, word])

    return(<div id="gameboard">
        <ShowWord word={word} guessed={guessed}/>
        <Keyboard word={word} onClick={guessChar} guessed={guessed}/>
        <ShowDrawing stage={stage} />
    </div>)
}

export default Main
