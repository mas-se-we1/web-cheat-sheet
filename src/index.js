import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { App } from './App'

const Style = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif
  }
`

ReactDOM.render(
	<React.StrictMode>
		<Style />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
