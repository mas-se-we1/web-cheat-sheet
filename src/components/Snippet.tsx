import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
	prism as lightStyle,
	vscDarkPlus as darkStyle
} from 'react-syntax-highlighter/dist/esm/styles/prism'
import styled from 'styled-components/macro'
import { Theme } from '../models/Theme'

interface Props {
	title: string
	text?: string
	language?: string
	theme: Theme
	children: string
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
