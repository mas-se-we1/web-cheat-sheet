import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { App } from './App'

const Style = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
		margin: 0;
  }
`

ReactDOM.render(
	<React.StrictMode>
		<Style />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
