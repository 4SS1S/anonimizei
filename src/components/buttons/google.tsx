import { FcGoogle } from 'react-icons/fc'

export const GoogleButton = ({ onClick }: { onClick?: () => {} }) => {
	return (
		<button
			className="px-2 outline-none border-blue-500 border-2 flex align-middle justify-around"
			onClick={onClick}
		>
			<div className="px-4 items-center relative">
				<FcGoogle className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[25%]" />
			</div>
			<div className="bg-whit">Login com o google</div>
		</button>
	)
}
