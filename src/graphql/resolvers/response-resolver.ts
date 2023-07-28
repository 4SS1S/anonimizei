import { prisma } from '@/lib'

export const ResponseResolver = {
	Query: {
		responses: () => prisma.response.findMany(),
		response: (_: any, { id }: { id: string }) =>
			prisma.response.findUniqueOrThrow({
				where: { id }
			})
	},
	Mutation: {
		response: async (
			_: any,
			data: { questionId: string; response: string }
		) => {
			console.log({
				data: {
					data
				}
			})

			const question = await prisma.questionAdmin.findMany({
				where: {
					questionId: data.questionId
				}
			})

			const userId = question[
				Math.floor(Math.random() * (question.length - 0 + 1))
			].userId as string

			try {
				return prisma.response.create({
					data: {
						response: data.response,
						questionId: data.questionId,
						userId
					}
				})
			} catch (err) {
				return {
					error: err
				}
			}
		}
	}
}
