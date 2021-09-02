import React from 'react'
import styled from 'styled-components/macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

export const Snippet = ({ title, text, children }) => (
	<>
		<Title>
			{title}
			<Text>{text}</Text>
		</Title>
		<Code language="jsx" customStyle={{ margin: 0 }}>
			{children}
		</Code>
	</>
)

const Title = styled.div`
	font-size: 20px;
	max-width: 280px;
`

const Text = styled.div`
	font-size: 16px;
	opacity: 0.7;
`

const Code = styled(SyntaxHighlighter)``
