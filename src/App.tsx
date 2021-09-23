import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { AppBar } from './components/AppBar'
import { SnippetContainer } from './components/SnippetContainer'
import { cssSnippets } from './data/cssSnippets'
import { reactSnippets } from './data/reactSnippets'
import { tsSnippets } from './data/tsSnippets'

export const App = () => {
	const [query, setQuery] = useState('')

	return (
		<>
			<AppBar query={query} setQuery={setQuery} />
			<Switch>
				<Route exact path="/typescript">
					<SnippetContainer snippets={tsSnippets} query={query} />
				</Route>
				<Route exact path="/react">
					<SnippetContainer snippets={reactSnippets} query={query} />
				</Route>
				<Route exact path="/css">
					<SnippetContainer snippets={cssSnippets} query={query} />
				</Route>
				<Redirect to="react" />
			</Switch>
		</>
	)
}
