import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { AppBar } from './components/AppBar'
import { SnippetContainer } from './components/SnippetContainer'
import { cssSnippets } from './data/cssSnippets'
import { reactSnippets } from './data/reactSnippets'
import { tsSnippets } from './data/tsSnippets'
import { useStoredState } from './hooks/useStoredState'
import { CodeStyle } from './models/CodeStyle'

export const App = () => {
	const [query, setQuery] = useState('')
	const [style, setStyle] = useStoredState<CodeStyle>('codeStyle', 'dark')

	const toggleStyle = () => {
		const newStyle = style === 'dark' ? 'light' : 'dark'
		setStyle(newStyle)
	}

	return (
		<>
			<AppBar query={query} setQuery={setQuery} toggleStyle={toggleStyle} />
			<Switch>
				<Route exact path="/typescript">
					<SnippetContainer snippets={tsSnippets} query={query} style={style} />
				</Route>
				<Route exact path="/react">
					<SnippetContainer
						snippets={reactSnippets}
						query={query}
						style={style}
					/>
				</Route>
				<Route exact path="/css">
					<SnippetContainer
						snippets={cssSnippets}
						query={query}
						style={style}
					/>
				</Route>
				<Redirect to="react" />
			</Switch>
		</>
	)
}
