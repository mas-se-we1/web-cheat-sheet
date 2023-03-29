import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { AppBar } from './components/AppBar'
import { SnippetContainer } from './components/SnippetContainer'
import { cssSnippets } from './data/cssSnippets'
import { gitSnippets } from './data/gitSnippets'
import { reactSnippets } from './data/reactSnippets'
import { tsSnippets } from './data/tsSnippets'
import { useStoredState } from './hooks/useStoredState'
import { Theme } from './models/Theme'

export const App = () => {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useStoredState<Theme>('wcs.theme', 'dark')

  const toggleTheme = () => {
    const newStyle = theme === 'dark' ? 'light' : 'dark'
    setTheme(newStyle)
  }

  return (
    <>
      {theme === 'dark' && <DarkOverride />}
      <AppBar
        query={query}
        setQuery={setQuery}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route
          index
          element={
            <SnippetContainer
              snippets={reactSnippets}
              query={query}
              theme={theme}
            />
          }
        />
        <Route
          path="/typescript"
          element={
            <SnippetContainer
              snippets={tsSnippets}
              query={query}
              theme={theme}
            />
          }
        />
        <Route
          path="/css"
          element={
            <SnippetContainer
              snippets={cssSnippets}
              query={query}
              language="css"
              theme={theme}
            />
          }
        />
        <Route
          path="/git"
          element={
            <SnippetContainer
              snippets={gitSnippets}
              query={query}
              language="git"
              theme={theme}
            />
          }
        />
      </Routes>
    </>
  )
}

const DarkOverride = createGlobalStyle`
	body {
		background: #181a1f;
		color: #d8dbe1;
	}
`
