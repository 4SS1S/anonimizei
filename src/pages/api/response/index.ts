/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { method, body } = req

	if (method === 'GET') {
		const responses = await prisma.response.findMany()

		return res.json({
			responses
		})
	}

	if (method === 'POST') {
		const { response, questionId } = body

		try {
			const newResponse = await prisma.response.create({
				data: {
					response,
					userId: '',
					questionId
				}
			})

			return res.status(200).send(newResponse)
		} catch (err) {
			return res.status(400).json(err)
		}
	}
}
