import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { createGlobalStyle } from 'styled-components'
import { AppBar } from './components/AppBar'
import { SnippetContainer } from './components/SnippetContainer'
import { cssSnippets } from './data/cssSnippets'
import { reactSnippets } from './data/reactSnippets'
import { tsSnippets } from './data/tsSnippets'
import { useStoredState } from './hooks/useStoredState'
import { Theme } from './models/CodeStyle'

export const App = () => {
	const [query, setQuery] = useState('')
	const [theme, setTheme] = useStoredState<Theme>('wcs.theme', 'dark')

	const toggleTheme = () => {
		const newStyle = theme === 'dark' ? 'light' : 'dark'
		setTheme(newStyle)
	}

	return (
		<>
			{theme === 'dark' && <DarkOverride />}
			<AppBar
				query={query}
				setQuery={setQuery}
				theme={theme}
				toggleTheme={toggleTheme}
			/>
			<main>
				<Switch>
					<Route exact path="/typescript">
						<SnippetContainer
							snippets={tsSnippets}
							query={query}
							theme={theme}
						/>
					</Route>
					<Route exact path="/react">
						<SnippetContainer
							snippets={reactSnippets}
							query={query}
							theme={theme}
						/>
					</Route>
					<Route exact path="/css">
						<SnippetContainer
							snippets={cssSnippets}
							query={query}
							language="css"
							theme={theme}
						/>
					</Route>
					<Redirect to="react" />
				</Switch>
			</main>
		</>
	)
}

const DarkOverride = createGlobalStyle`
	main {
		background: #181a1f;
		color: #d8dbe1;
}
`
