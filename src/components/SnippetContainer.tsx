import styled from 'styled-components/macro'
import { Snippet } from './Snippet'

interface Props {
	snippets: Array<{
		title: string
		text: string
		code: string
	}>
}

export const SnippetContainer = ({ snippets }: Props) => {
	return (
		<Container>
			{snippets.map(s => (
				<Snippet key={s.title} title={s.title} text={s.text}>
					{s.code}
				</Snippet>
			))}
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
