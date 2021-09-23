import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

interface Props {
	query: string
	setQuery: (query: string) => void
}

export const AppBar = ({ query, setQuery }: Props) => (
	<Bar>
		<Title>Cheat Sheet</Title>
		<NLink exact to="/typescript" activeStyle={activeStyle}>
			TypeScript
		</NLink>
		<NLink exact to="/react" activeStyle={activeStyle}>
			React
		</NLink>
		<NLink exact to="/css" activeStyle={activeStyle}>
			CSS
		</NLink>
		<Search
			value={query}
			onChange={e => setQuery(e.target.value)}
			placeholder="Suche..."
		/>
	</Bar>
)

const activeStyle = { color: '#61dafb' }

const Bar = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	background: #20232a;
	color: #fff;
`

const Title = styled.div`
	padding: 0 20px;
	font-size: 20px;
	font-weight: 600;
	color: #61dafb;
`

const NLink = styled(NavLink)`
	padding: 0 20px;
	color: #fff;
	text-decoration: none;
`

const Search = styled.input`
	border: none;
	background: #fff;
	padding: 5px 10px;
	margin: 0 20px;
`
