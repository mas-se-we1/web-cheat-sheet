import { Redirect, Route, Switch } from 'react-router'
import { AppBar } from './components/AppBar'
import { SnippetContainer } from './components/SnippetContainer'
import { cssSnippets } from './data/cssSnippets'
import { reactSnippets } from './data/reactSnippets'
import { tsSnippets } from './data/tsSnippets'

export const App = () => (
	<>
		<AppBar />
		<Switch>
			<Route exact path="/typescript">
				<SnippetContainer snippets={tsSnippets} />
			</Route>
			<Route exact path="/react">
				<SnippetContainer snippets={reactSnippets} />
			</Route>
			<Route exact path="/css">
				<SnippetContainer snippets={cssSnippets} />
			</Route>
			<Redirect to="react" />
		</Switch>
	</>
)
