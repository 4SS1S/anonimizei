import { prisma } from '@/lib'

export const UserResolver = {
	Query: {
		users: () => prisma.user.findMany(),
		user: (_: any, { id }: { id: string }) =>
			prisma.user.findUniqueOrThrow({
				where: { id }
			})
	}
}
