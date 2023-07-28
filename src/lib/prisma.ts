import { Prisma, PrismaClient } from '@prisma/client'

declare global {
	namespace NodeJS {
		interface Global {
			prisma: PrismaClient
		}
	}
}

let prisma: PrismaClient

if (typeof window === 'undefined') {
	if (process.env.NODE_ENV === 'production') {
		prisma = new PrismaClient()
	} else {
		const g = global as any

		if (!g.prisma) {
			g.prisma = new PrismaClient()
		}

		prisma = g.prisma
	}
}

export { prisma }
