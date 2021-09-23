import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const AppBar = () => (
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
