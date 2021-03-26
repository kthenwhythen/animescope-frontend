import { StrictMode } from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'

import App from './containers/App/App'
import reportWebVitals from './reportWebVitals'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #252525;
		color: #EEEEEE;
	}
  
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}
`

axios.defaults.baseURL = 'http://127.0.0.1:5000'

render(
	<StrictMode>
		<App />
		<GlobalStyle />
	</StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
