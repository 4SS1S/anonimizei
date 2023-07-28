import { prisma } from '@/lib'

export const QuestionResolver = {
	Query: {
		question: (_: any, { id }: { id: string }) =>
			prisma.question.findUniqueOrThrow({
				where: { id }
			}),
		questions: () => prisma.question.findMany()
	},
	Mutation: {
		question: () => {
			//
		},
		updateQuestion: () => {}
	}
}
