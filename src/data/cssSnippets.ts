export const cssSnippets = [
	{
		title: 'Class Selector',
		text: 'HTML-Element via `class`-Attribut mit CSS verknüpfen',
		code: `
.my-class {
	attribute: value;
}
    `.trim()
	},
	{
		title: 'ID Selector',
		text: 'HTML-Element via `id`-Attribut mit CSS verknüpfen',
		code: `
#my-id {
	attribute: value;
}
    `.trim()
	},
	{
		title: 'Element Selector',
		text: 'HTML-Element via Element-Name mit CSS verknüpfen',
		code: `
body {
	attribute: value;
}
    `.trim()
	},
	{
		title: 'Box-Model Properties',
		text: 'Mit einem Wert gilt es für alle vier Seiten',
		code: `
.box-model {
	height: 10px;
	width: 10px;
	padding: 10px;
	border: 2px solid #ff77e5;
	margin: 10px;
}
    `.trim()
	},
	{
		title: 'Box-Model Properties 2-value',
		text: 'Gilt für padding, margin & border',
		code: `
.box-model {
	padding-top: 5px;
	padding-bottom: 5px;
	padding-right: 10px;
	padding-left: 10px;
	/* entspricht: */
	padding: 5px 10px; 
}
    `.trim()
	},
	{
		title: 'Box-Model Properties 4-value',
		text: 'Gilt für padding, margin & border',
		code: `
.box-model {
	padding-top: 1px;
	padding-right: 2px;
	padding-bottom: 3px;
	padding-left: 4px;
	/* entspricht: */
	padding: 1px 2px 3px 4px; 
}
    `.trim()
	},
	{
		title: 'Hintergrundfarbe',
		text: '',
		code: `
.colorfull {
	background: #61dafb;
}
    `.trim()
	},
	{
		title: 'Schrift-Properties',
		text: 'Font, Grösse, Formatierung',
		code: `
.my-font {
	font-family: 'Comic Sans', Verdana, sans-serif;
	font-weight: 500;
	font-size: 22px;
	font-style: italic; 
}
    `.trim()
	},
	{
		title: 'Flexbox',
		text: 'Wichtigste Flexbox Properties',
		code: `
.container {
	display: flex;
	/* Orientierung der Items auf cross-axis */
	align-items: center | stretch | flex-start | flex-end;
	/* Orientierung der Items auf main-axis */
	justify-content: center | flex-start | flex-end | ...;
}

.item {
	/* grow */
	flex: 1; 
}
    `.trim()
	},
	{
		title: 'Zentrieren',
		text: 'Einzelnes Child Element vertical & horizontal zentrieren',
		code: `
.container {
	display: flex;
	align-items: center;
	justify-content: center;
}
    `.trim()
	}
]
