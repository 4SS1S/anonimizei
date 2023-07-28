/* eslint-disable import/no-anonymous-default-export */
import { NextApiResponse } from 'next'

export default function (_: any, res: NextApiResponse) {
	return res.status(200).send({
		null: null
	})
}
