import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { App } from './App'

const Style = createGlobalStyle`
	html, #root, main {
		height: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

  body {
		flex: 1;
    font-family: Arial, Helvetica, sans-serif;
		margin: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Style />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
