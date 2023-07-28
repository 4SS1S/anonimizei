/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const {
		method,
		query: { id }
	} = req

	console.log({ id })

	if (method === 'GET') {
		if (typeof id !== 'string') {
			return res.status(400).json({
				err: 'Id not found'
			})
		}

		const questionario = await prisma.question.findUnique({
			where: {
				id
			}
		})

		if (!questionario) {
			return res.status(400).json({
				err: 'Não encontrado'
			})
		}

		return res.json({
			questionario
		})
	}

	if (method === 'PUT') {
		return res.status(200)
	}

	if (method === 'DELETE') {
		return res.status(200)
	}
}
