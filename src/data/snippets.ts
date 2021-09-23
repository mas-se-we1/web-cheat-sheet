export const snippets = [
	{
		title: 'Component',
		text: 'Komponente gliedert Applikation in Bausteine',
		code: `
const HelloWorld = () => (
  <div>Hello World</div>
)
    `.trim()
	},
	{
		title: 'Props deklarieren',
		text: 'Parametrierung von Komponenten',
		code: `
interface Props {
  message: string
}

const MessagePrinter = (props: Props) => (
  <div>{props.message}</div>
)
    `.trim()
	},
	{
		title: 'Props übergeben',
		text: 'Parametrierung von Komponenten',
		code: `
const App = () => (
  <MessagePrinter message="Hi there!" />
)
    `.trim()
	},
	{
		title: 'State',
		text: 'Zustand lesen und schreiben mit useState() Hook',
		code: `
const Counter = () => {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(count + 1)
  }

  return <button onClick={updateCount}>Increment</button>
}
    `.trim()
	},
	{
		title: 'Render Lists',
		text: 'Array von Elementen darstellen',
		code: `
return (
  <div>
    {users.map(user => (
      <div key={user.id}>{user.name}</div>
    ))}
  </div>
)
    `.trim()
	},
	{
		title: 'Button Events',
		text: 'Click-Event lesen und loggen',
		code: `
const ClickLogger = () => {
  const logClick = () => {
    console.log('Button clicked')
  }
  return <button onClick={logClick}>Click Me</button>
}
    `.trim()
	},
	{
		title: 'Input Events',
		text: 'Change-Event lesen und in State schreiben',
		code: `
const TextInput = () => {
  const [text, setText] = useState('')

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return <input onChange={updateText} value={text} />
}
    `.trim()
	},
	{
		title: 'Select Events',
		text: 'Change-Event lesen und in State schreiben',
		code: `
const ColorSelect = () => {
  const [color, setColor] = useState('Blue')
  
  const updateColor = (event: ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value)
  }

  return (
    <select value={color} onChange={updateColor}>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
    </select>
  )
}
    `.trim()
	},
	{
		title: 'Styling mit style',
		text: 'Als JS-Objekt in style-Prop',
		code: `
<div style={{backgroundColor: '#333'}}>Hello World</div>
    `.trim()
	},
	{
		title: 'Styling mit className',
		text: 'Klassenname aus importiertem CSS',
		code: `
import './App.css'
const App = () => (
  <div className="greets">Hello World</div>
)
    `.trim()
	}
]
