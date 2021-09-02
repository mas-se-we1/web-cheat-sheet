import React from 'react'
import { Snippet } from './components/Snippet'
import { SnippetContainer } from './components/SnippetContainer'
import { snippets } from './data/snippets'

export const App = () => (
	<SnippetContainer>
		{snippets.map(s => (
			<Snippet key={s.title} title={s.title} text={s.text}>
				{s.code}
			</Snippet>
		))}
	</SnippetContainer>
)
