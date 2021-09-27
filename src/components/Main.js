import { useState, useEffect } from 'react'
import ShowDrawing from './Doodle'
import ShowWord from './WordBoard'
import Keyboard from './Keyboard'
import GameOver, {gameOverFail, gameOverSucc} from './GameOver'

export const Main = (props) => {
    const words = props.words
    const randomWord = (words) => words[Math.floor(Math.random() * words.length)]
    const [guesser, setGuessState] = useState({
        wrongGuesses: undefined,
        word: randomWord(words),
        guessed: undefined,
        gameOver: undefined,
        gameSuccess: undefined,
    })
    const {
        wrongGuesses,
        word,
        guessed,
        gameOver,
        gameSuccess
    } = guesser

    const guessChar = (ch) => {
        let newGuesses
        if (guessed) {
            guessed.push(ch)
            newGuesses = guessed
        }
        else newGuesses = [ch]

        let wrongs = wrongGuesses
        if (word.indexOf(ch) < 0) {
            if (wrongs === undefined)
                 wrongs = 1
            else wrongs++
        }

        let correct = 0
        word.split('').forEach(wch => newGuesses.forEach(gch => gch === wch && correct++))
        let allCorrect = correct === word.length
        
        let itsGameOverMan = undefined
        if (wrongs >= 10 || allCorrect)
            itsGameOverMan = true
        let endingType = allCorrect ? gameOverSucc : gameOverFail

        setGuessState({
            wrongGuesses: wrongs,
            word: word,
            guessed: newGuesses,
            gameOver: itsGameOverMan,
            gameSuccess: endingType
        })
    }

    /**
     * Reset the playfield.
     */
    const restart = () => {
        setGuessState({
            wrongGuesses: undefined,
            word: randomWord(words),
            guessed: undefined,
            gameOver: undefined,
            gameSuccess: undefined
        })
    }

    useEffect(() => {
        setGuessState({
            wrongGuesses: wrongGuesses,
            word: word,
            guessed: guessed,
            gameOver: gameOver,
            gameSuccess: gameSuccess
        })
    }, [wrongGuesses, guessed, word, gameOver, gameSuccess])

    return(<div id="gameboard">
        <ShowWord word={word} guessed={guessed} gameOver={gameOver}/>
        {!gameOver && <Keyboard word={word} onClick={guessChar} guessed={guessed}/>}
        <ShowDrawing stage={wrongGuesses} alt={<>It's time to start hanging around&hellip;</>} />
        { gameOver && <GameOver onClick={restart} success={gameSuccess}/>}
    </div>)
}

export default Main
