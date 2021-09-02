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
class Counter extends Component {
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
class Counter extends Component {
  state = { count: 0 }

  render() {
    return (
      <button onClick={this.increment}>
        Clicked {this.state.count} times
      </button>
    )
  }

  increment = () => 
    this.setState({ count: this.state.count + 1 })
}
    `.trim()
	}
]
