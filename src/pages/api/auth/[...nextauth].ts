import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
	secret: process.env.SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID || '',
			clientSecret: process.env.GOOGLE_SECRET || ''
		})
		// Sign in with passwordless email link
		// EmailProvider({
		// 	server: process.env.MAIL_SERVER,
		// 	from: '<no-reply@example.com>'
		// })
	],
	adapter: PrismaAdapter(prisma)
})
