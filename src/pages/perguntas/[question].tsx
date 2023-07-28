import { GetServerSideProps } from 'next'
import { useForm } from 'react-hook-form'
import { gql, useQuery } from '@apollo/client'

import { axios } from '@/lib'
import { useEffect } from 'react'

const Question = ({ repo }: { repo: any }) => {
	// if (repo.err) {
	// 	return <>Erro ao tentar encontrar o questionar</>
	// }

	const { data, error } = useQuery(gql`
		query Question {
			questions {
				id
			}
		}
	`)

	useEffect(() => {
		console.log({ data, error })
	}, [data, error])

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	const onSubmit = (data: any) => {
		axios
			.post('/response', data)
			.then(({ data }) => {
				console.log({ data })
			})
			.catch(err => {
				console.error({ err })
			})
	}

	// console.log(watch('example'))

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('example', {
						required: true
					})}
				/>
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}

export default Question

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
// 	const { question } = params as any

// 	const repo = await fetch(
// 		`http://localhost:3000/api/question/${question}`
// 	).then(res => res.json())

// 	console.log({ repo })

// 	return {
// 		props: {
// 			repo
// 		}
// 	}
// }
