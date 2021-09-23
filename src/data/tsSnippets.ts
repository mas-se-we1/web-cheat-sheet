export const tsSnippets = [
	{
		title: 'const',
		text: 'Variablen können nur bei Initialiserung gesetzt werden',
		code: `
// Explizite Typisierung
const three: number = 3
// Implizierte Typisierung anhand Initialisierung
const four = 4
    `.trim()
	},
	{
		title: 'let',
		text: 'Variablen können mehrmals gesetzt werden',
		code: `
let count = 1
count = 2
count = 3
    `.trim()
	},
	{
		title: 'Primitive Types',
		text: 'Gebräuchlichste Typen mit expliziter Typisierung',
		code: `
const loading: boolean = true
const count: number = 42
const message: string = 'Hello there!'
const nothing: null = null
const notSet: undefined = undefined
    `.trim()
	},
	{
		title: 'Union Type',
		text: 'Zusammenführen von Typen',
		code: `
const event: 'click' | 'hover' = 'click'
const value: string | number = 7
    `.trim()
	},
	{
		title: 'String Literal',
		text: 'Definiertes Set von strings',
		code: `
const event: 'click' = 'click'
    `.trim()
	},
	{
		title: 'Array',
		text: 'Generische Liste T[]',
		code: `
const list: number[] = [1, 2, 3]
list.push(4)
console.log(list[3]) // => 4
    `.trim()
	},
	{
		title: 'Interface',
		text: 'Schnittstellendefinition',
		code: `
interface Person {
  name: string
  occupation: string
  age: number
}
    `.trim()
	},
	{
		title: 'Object',
		text: 'Objekt-Instanz erzeugen',
		code: `
const batman = {
  name: 'Bruce Wayne',
  occupation: 'Vigilante',
  age: 38
}
batman.occupation = 'Businessman'
// Explizit typisiert
const spiderman: Person = {/* ... */}
    `.trim()
	},
	{
		title: 'Function',
		text: 'Funktion mit Parameter und Rückgabewert',
		code: `
function add(a: number, b: number) {
  return a + b
}
    `.trim()
	},
	{
		title: 'Arrow Function',
		text: 'Funktion mit Parameter und Rückgabewert',
		code: `
// Expliziter Rückgabetyp
const add = (a: number, b: number): number => {
  return a + b
}
// Impliziter Rückgabetyp
const add = (a: number, b: number) => {
  return a + b
}
    `.trim()
	},
	{
		title: 'Generic Arrow Function',
		text: 'Funktion mit generischem Parameter und Rückgabewert',
		code: `
const first = <T>(list: T[]): T => {
  return list[0]
}
    `.trim()
	}
]
