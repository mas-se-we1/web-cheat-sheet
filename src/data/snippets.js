export const snippets = [
	{
		title: 'Functional Component',
		text: 'Komponente ohne State als Funktion',
		code: `
const App = () => (
  <div>Hello World</div>
)
    `.trim()
	},
	{
		title: 'Class Component',
		text: 'Komponente mit State als Klasse',
		code: `
class App extends Component {
  render() {
    return <div>Hello World</div>
  }
}
    `.trim()
	},
	{
		title: 'Props',
		text: 'Parametrierung von Komponenten',
		code: `
const App = (props) => (
  <div>{props.message}</div>
)
    `.trim()
	},
	{
		title: 'State',
		text: 'Zustand lesen und schreiben',
		code: `
class App extends Component {
  state = { count: 0 }

  render() {
    return (
      <button onClick={this.increment}>
        Clicked {this.state.count} times
      </button>
    )
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
}
    `.trim()
	},
	{
		title: 'Button Events',
		text: 'Event lesen und in State schreiben',
		code: `
class App extends Component {
  render() {
    return <button onClick={this.clicked}>Click Me</button>
  }
  
  clicked = () => {
    console.log('clicked')
  }
}
    `.trim()
	},
	{
		title: 'Input Events',
		text: 'Event lesen und in State schreiben',
		code: `
class TextInput extends Component {
  render() {
    return <input onChange={this.changed} value={this.state.username} />
  }

  changed = event => {
    console.log(event.target.value)
  }
}
    `.trim()
	},
	{
		title: 'Select Events',
		text: 'Event lesen und in State schreiben',
		code: `
class Select extends Component {
  render() {
    return (
      <select value={this.state.color} onChange={this.updateColor}>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
      </select>
    )
  }

  updateColor = event => {
    console.log(event.target.value)
  }
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
		title: 'Links',
		text: 'Verlinkung auf interne Seite',
		code: `<Link to="/">Home</Link>`.trim()
	},
	{
		title: 'Routes',
		text: 'Mapping zwischen Pfad und Componenten',
		code: `
<BrowserRouter>
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users" component={Users} />
  </Switch>
</BrowserRouter>
  `.trim()
	},
	{
		title: 'Redirect',
		text: 'Default Routing wenn keine Route zutrifft',
		code: `
<Switch>
  <Route path="/home" component={Home} />
  <Route path="/users" component={Users} />
  <Redirect to="/home" />
</Switch>
    `.trim()
	},
	{
		title: 'Routing Props I',
		text: 'Routing Data an Komponente übergeben',
		code: `<Route path="/users" component={Users} />`.trim()
	},
	{
		title: 'Routing Props II',
		text: 'Routing Data ohne <Route /> an Komponente übergeben',
		code: `
const Users = withRouter(props => {
  return <pre>{props.location.pathname}</pre>
})      
    `.trim()
	}
]
