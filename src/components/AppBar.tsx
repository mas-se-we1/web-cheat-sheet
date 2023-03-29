import { CgDarkMode } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from '../models/Theme'

interface Props {
  query: string
  setQuery: (query: string) => void
  theme: Theme
  toggleTheme: () => void
}

export const AppBar = ({ query, setQuery, theme, toggleTheme }: Props) => (
  <Bar>
    <Title>Cheat Sheet</Title>
    <NLink to="/typescript">TypeScript</NLink>
    <NLink to="/" end>
      React
    </NLink>
    <NLink to="/css">CSS</NLink>
    <NLink to="/git">git</NLink>
    <Search
      value={query}
      onChange={e => setQuery(e.target.value)}
      type="search"
      placeholder="Suche..."
    />
    <Toggle onClick={toggleTheme}>
      <CgDarkMode />
      <div>{theme === 'dark' ? 'Dark' : 'Light'}</div>
    </Toggle>
  </Bar>
)

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
  &.active {
    color: #61dafb;
  }
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
