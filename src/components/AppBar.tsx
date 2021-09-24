import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { CgDarkMode } from 'react-icons/cg'

interface Props {
	query: string
	setQuery: (query: string) => void
	toggleStyle: () => void
}

export const AppBar = ({ query, setQuery, toggleStyle }: Props) => (
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
			type="search"
			placeholder="Suche..."
		/>
		<Toggle onClick={toggleStyle}>
			<CgDarkMode />
			<div>Toggle Code Styling</div>
		</Toggle>
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

const Toggle = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	color: #61dafb;
	font-size: 14px;
	cursor: pointer;
	opacity: 0.5;
	:hover {
		opacity: 1;
	}
	:active {
		color: #fff;
	}
`
