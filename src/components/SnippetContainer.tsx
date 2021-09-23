import styled from 'styled-components/macro'
import { Snippet } from './Snippet'

interface Props {
	query: string
	snippets: Array<{
		title: string
		text: string
		code: string
	}>
}

export const SnippetContainer = ({ query, snippets }: Props) => {
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
					<Snippet key={s.title} title={s.title} text={s.text}>
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
	@media (min-width: 960px) {
		grid-template-columns: auto auto;
	}
`
