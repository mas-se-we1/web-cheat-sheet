import  { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface Props {
	title: string
	text?: string
	children: ReactNode
}

export const Snippet = ({ title, text, children }: Props) => (
	<>
		<Title>
			{title}
			<Text>{text}</Text>
		</Title>
		<SyntaxHighlighter language="jsx" customStyle={{ margin: 0 }}>
			{children}
		</SyntaxHighlighter>
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
