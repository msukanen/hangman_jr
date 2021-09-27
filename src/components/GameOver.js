export const gameOverFail = 1
export const gameOverSucc = 2

export const GameOver = (props) => {
    return(<div className="hangman-gameover">
        {props.success === gameOverFail ? <h1>It's Game Over, man! Game Over!</h1>
                                        : <h1>Phew! You avoided hanging around too much!</h1>}
        <div><button onClick={props.onClick}>Re-Hang?</button></div>
    </div>)
}

export default GameOver
