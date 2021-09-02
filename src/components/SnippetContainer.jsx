import styled from 'styled-components/macro'

export const SnippetContainer = styled.div`
	display: inline-grid;
	grid-template-columns: auto;
	column-gap: 20px;
	row-gap: 10px;
	margin: 20px;
	@media (min-width: 850px) {
		grid-template-columns: auto auto;
	}
`
