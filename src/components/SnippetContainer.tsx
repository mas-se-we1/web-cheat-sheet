import styled from 'styled-components/macro'
import { Theme } from '../models/CodeStyle'
import { Snippet } from './Snippet'

interface Props {
	query: string
	snippets: Array<{
		title: string
		text: string
		code: string
	}>
	theme: Theme
}

export const SnippetContainer = ({ query, snippets, theme }: Props) => {
	let filteredSnippets = snippets
	if (query) {
		const lowQuery = query.toLowerCase()
		filteredSnippets = snippets.filter(
			s =>
				s.code.toLowerCase().includes(lowQuery) ||
				s.text.toLowerCase().includes(lowQuery) ||
				s.title.toLowerCase().includes(lowQuery)
		)
	}

	return (
		<Container>
			{filteredSnippets.length > 0 ? (
				filteredSnippets.map(s => (
					<Snippet key={s.title} title={s.title} text={s.text} theme={theme}>
						{s.code}
					</Snippet>
				))
			) : (
				<div>Keine Resultate</div>
			)}
		</Container>
	)
}

const Container = styled.div`
	display: inline-grid;
	grid-template-columns: auto;
	column-gap: 20px;
	row-gap: 10px;
	margin: 20px;
	@media (min-width: 850px) {
		grid-template-columns: minmax(auto, 280px) 1fr;
	}
`
