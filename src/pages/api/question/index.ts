/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib'

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { method, body } = req

	if (method === 'GET') {
		const questionarios = await prisma.question.findMany()

		return res.json({
			questionarios
		})
	}

	if (method === 'POST') {
		return res.status(200).send({
			body
		})
	}
}
