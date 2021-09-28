import { ReactNode } from 'react'
import styled from 'styled-components/macro'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as darkStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { prism as lightStyle } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Theme } from '../models/CodeStyle'

interface Props {
	title: string
	text?: string
	language?: string
	theme: Theme
	children: ReactNode
}

export const Snippet = ({
	title,
	text,
	language = 'jsx',
	theme,
	children
}: Props) => {
	const customStyle: any = {
		margin: 0,
		borderRadius: 3,
		fontSize: 13
	}
	if (theme === 'dark') {
		customStyle.background = '#20232a'
	}

	return (
		<>
			<Title>
				{title}
				<Text>{text}</Text>
			</Title>
			<SyntaxHighlighter
				language={language}
				customStyle={customStyle}
				style={theme === 'dark' ? darkStyle : lightStyle}
			>
				{children}
			</SyntaxHighlighter>
		</>
	)
}

const Title = styled.div`
	margin-top: 3px;
	font-size: 18px;
`

const Text = styled.div`
	font-size: 15px;
	opacity: 0.7;
`
