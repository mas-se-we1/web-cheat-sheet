export const reactSnippets = [
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
		title: 'Lifecycle',
		text: 'Auf mount, unmount & Daten-Änderungen reagieren',
		code: `
useEffect(() => {
  subscribe(channel)

  return () => {
    unsubscribe(channel)
  }
}, [channel])
    `.trim()
	},
	{
		title: 'Custom Hook',
		text: 'useIncrement Beispiel',
		code: `
function useIncrement(initialValue: number = 0): [number, () => void] {
  const [value, setValue] = useState(initialValue)

  const increment = () => setValue(value + 1)

  return [value, increment]
}					
    `.trim()
	},
	{
		title: '`Add`-Callback für Array-State',
		text: 'Füge neues Item zu Array hinzu',
		code: `
const addItem = (item: Person) => {
  const newPersons = [...persons, item]
  setPersons(newPersons)
}
    `.trim()
	},
	{
		title: '`Remove`-Callback für Array-State',
		text: 'Entferne Item aus Array',
		code: `
const removeItem = (id: string) => {
  const newPersons = persons.filter(p => p.id !== id)
  setPersons(newPersons)
}
    `.trim()
	},
	{
		title: '`Update`-Callback für Array-State',
		text: 'Mutiere Property eines Items in Array',
		code: `
const updateItem = (id: string, newName: string) => {
  const newPersons = persons.map(p => {
    if (p.id === id) {
      return { ...p, name: newName }
    }
    return p
  })
  setPersons(newPersons)
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
		title: 'Checkbox Events',
		text: 'Change-Event lesen und in State schreiben',
		code: `
const Checkbox = () => {
  const [checked, setChecked] = useState(false)

  const updateText = () => {
    setChecked(!checked)
  }

  return (
    <label>
      I Agree
      <input type="checkbox" onChange={updateText} checked={checked} />
    </label>
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
	},
	{
		title: 'Natives HTML-Element stylen',
		text: '[styled-components] Nutze die Syntax mit Punkt (.)',
		code: `
const StyledSpan = styled.span\`
  /* css */
\`		
    `.trim()
	},
	{
		title: 'React-Komponente stylen',
		text: '[styled-components] Nutze die Syntax mit Klammern. Komponente (Appbar) muss className-Prop entgegen nehmen.',
		code: `
const StyledComp = styled(Appbar)\`
  /* css */
\`		
    `.trim()
	},
	{
		title: 'Styling ohne Komponente',
		text: '[styled-components]',
		code: `
const GlobalStyle = createGlobalStyle\`
  /* css */
\`

<GlobalStyle />		
    `.trim()
	},
	{
		title: 'Snippets zur Wiederverwendung erstellen',
		text: '[styled-components]',
		code: `
const warningStyle = css\`
  /* css */
\`
    `.trim()
	},
	{
		title: 'Styled-Component mit Properties erweitern',
		text: '[styled-components]',
		code: `
interface Props { warning: boolean }

const Label = styled.label<Props>\`
  \${props => (props.warning ? warningStyle : successStyle)}
\`	
    `.trim()
	},
	{
		title: 'Browser Router',
		text: '[React Router] High-Order-Component, um Routing zu ermöglichen.',
		code: `
// index.tsx
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
    `.trim()
	},
	{
		title: 'App Routes',
		text: '[React Router] Routes definieren',
		code: `
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="users" element={<Users />}>
      <Route index element={<UsersOverview />} />
      <Route path=":userId" element={<User />} />
      <Route path=":userId/edit" element={<EditUser />} />
      <Route path="new" element={<NewUser />} />
    </Route>
  </Route>
  <Route path="about" element={<AboutUs />} />
</Routes>		
    `.trim()
	},
	{
		title: 'useNavigation',
		text: '[React Router] Programmatisches Navigieren',
		code: `
export const App = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate('/')}>
      Go to root
    </button>
  )
}
    `.trim()
	},
	{
		title: 'useParams',
		text: '[React Router] Parameter abfragen, die mit Doppelpunkt in Routing vermerkt sind',
		code: `
export const UserList = () => {
  const { userId } = useParams<{ userId: string }>()

  return (
    <Container>
      <UserForm id={userId} />
    </Container>
  )
}
    `.trim()
	},
	{
		title: 'useReducer',
		text: 'State mittels Reducer verwalten',
		code: `
const [state, dispatch] = useReducer(reducer, initialState)
    `.trim()
	},
	{
		title: 'Reducer',
		text: 'Reducer mit State-Übergängen definieren',
		code: `
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'set-name':
      return { ...state, name: action.name }
    case 'set-email':
      return { ...state, email: action.email }
    case 'clear-all':
      return { name: '', email: '' }
  }
}			
    `.trim()
	},
	{
		title: 'Reducer Actions',
		text: 'Typisierung der Actions',
		code: `
type SetNameAction = {
  type: 'set-name'
  name: string
}
type SetEmailAction = {
  type: 'set-email'
  email: string
}
type ClearAllAction = {
  type: 'clear-all'
}

type Action = SetNameAction | SetEmailAction | ClearAllAction
    `.trim()
	},
	{
		title: 'Dispatch Reducer Actions',
		text: 'Actions an Recuer übergeben',
		code: `
const [state, dispatch] = useReducer(reducer, initialState)

<input
  value={state.name}
  onChange={e => dispatch({ type: 'set-name', name: e.target.value })}
/>  
    `.trim()
	}
]
