import { LoginHeader } from './login'

export const Navbar = () => {
	return (
		<nav className="flex justify-between p-2 bg-white">
			<div className="hidden md:block">Anonimos Girafinhas</div>
			<LoginHeader />
		</nav>
	)
}
