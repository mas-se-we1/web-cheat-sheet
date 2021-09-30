export const gitSnippets = [
	{
		title: 'Name & E-Mail konfigurieren',
		text: 'Einmalig nach git-Installation setzen',
		code: `
git config --global user.name "<name>"
git config --global user.email "<email>"
		`.trim()
	},
	{
		title: 'Repo initialisieren',
		text: 'Neues git Projekt lokal erstellen',
		code: `git init`.trim()
	},
	{
		title: 'Repo Remote setzen',
		text: 'push & pull verwendet diese URL',
		code: `git remote add <repo-url>`.trim()
	},
	{
		title: 'Repo Remote anzeigen',
		text: 'push & pull verwendet diese URL',
		code: `git remote -v`.trim()
	},
	{
		title: 'Repo runterladen',
		text: 'Git repo initial laden. Remote wird automatisch gesetzt.',
		code: `git clone <url>`.trim()
	},
	{
		title: 'Änderungen `stagen`',
		text: 'Markiert alle Änderungen für den nächsten Commit',
		code: `git add .`.trim()
	},
	{
		title: 'Commit erstellen',
		text: 'Markiert alle Änderungen für den nächsten Commit',
		code: `git commit -m "<message>"`.trim()
	},
	{
		title: 'Commits hochladen',
		text: 'Schiebt all commits des aktuellen Branches zum Remote',
		code: `git push`.trim()
	},
	{
		title: 'Repo aktualisieren',
		text: 'Neuste version des aktuellen Branches vom Remote laden',
		code: `git pull`.trim()
	},
	{
		title: 'Änderungen verwerfen',
		text: 'Achtung: Löscht ALLE Änderungen seit letztem Commit',
		code: `git reset --hard`.trim()
	}
]
