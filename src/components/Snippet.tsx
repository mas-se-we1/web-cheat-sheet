import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as darkStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { prism as lightStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CodeStyle } from '../models/CodeStyle'

interface Props {
	title: string
	text?: string
	style: CodeStyle
	children: ReactNode
}

export const Snippet = ({ title, text, style, children }: Props) => (
	<>
		<Title>
			{title}
			<Text>{text}</Text>
		</Title>
		<SyntaxHighlighter
			language="jsx"
			customStyle={{ margin: 0, borderRadius: 3, fontSize: 13 }}
			style={style === 'dark' ? darkStyle : lightStyle}
		>
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
