import './App.css'
import Main from './components/Main'
import { PayPalLinkForm, GitHubLogo } from './components/Links'
import { wordList } from './components/Words'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display: 'flex'}}>
          <div><h1>Hangman Jr</h1>
          <p>by <em>Markku &quot;Marsupilami&quot; Sukanen</em></p>
          </div>
          <div>
            <div><a href="https://github.com/msukanen/hangman_jr" target="msukanen-github"><GitHubLogo /></a></div>
            <div><PayPalLinkForm /></div>
          </div>
        </div>
      </header>
      <Main words={wordList}/>
    </div>
  )
}

export default App
