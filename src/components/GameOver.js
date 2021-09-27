export const gameOverFail = 1
export const gameOverSucc = 2

export const GameOver = (props) => {
    return(
        <><h1>It's Game Over, man! Game Over!</h1>
        <div><button onClick={props.onClick}>RETRY?</button></div>
        </>
    )
}

export default GameOver
