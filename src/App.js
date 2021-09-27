import './App.css'
import Main from './components/Main'
import { PayPalLinkForm, GitHubLogo } from './components/Links'
import { wordList } from './components/Words'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
          <div className="mainTitle">
            <h1>Hangman <sub>JS</sub>\<sup>R</sup></h1>
            <p style={{fontSize: '14pt'}}>2021 by <em>Markku &quot;Marsupilami&quot; Sukanen</em></p>
          </div>
          <div className="contactInfo">
            <div><GitHubLogo href="https://github.com/msukanen/hangman_jr" /></div>
            <div><PayPalLinkForm /></div>
          </div>
        </div>
      </header>
      <Main words={wordList}/>
    </div>
  )
}

export default App
