import './App.css'
import Main from './components/Main'
import { PayPalLinkForm, GitHubLogo } from './components/Links'
import { wordList } from './words'

export default function App () {
	return (<div className="App">
		<header className="App-header">
			<div style={{display: 'flex'}}>
				<div className="main-title">
					<h1>Hangman <sub>JS</sub>\<sup>R</sup></h1>
					<p className="basic-font">2021 by <em>Markku &quot;Marsupilami&quot; Sukanen</em></p>
				</div>
				<div className="contact-info">
					<div><GitHubLogo project="hangman_jr" /></div>
					<div><PayPalLinkForm /></div>
				</div>
			</div>
		</header>
		<Main words={wordList}/>
	</div>)
}
