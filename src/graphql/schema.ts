import { gql } from '@apollo/client'

export const typeDefs = gql`
	type Query {
		questions: [Question]
		question(id: String): Question
		responses: [Response]
		response(id: String): Response
		users: [User]
		user(id: String): User
	}

	type Mutation {
		response(questionId: String!, response: String!): Response
		question(expires: String): Question
		updateQuestion(id: String): Question
	}

	type Question {
		id: String
		expires: String
		createdAt: String
		updatedAt: String
		deletedAt: String
	}

	type QuestionAdmin {
		id: String
		userId: String
		questionId: String
		response: String
		createdAt: String
		updatedAt: String
		deletedAt: String
	}

	type Response {
		id: String
		questionId: String
		response: String
		userId: String
		createdAt: String
		updatedAt: String
		deletedAt: String
		question: Question
		to: User
	}

	type User {
		id: String
		name: String
		email: String
		emailVerified: String
		image: String
		createdAt: String
		updatedAt: String
		deletedAt: String
		response: [Response]
		questionAdmin: [QuestionAdmin]
	}

	type FriendshipRequest {
		id: String
		requesterId: String
		requestedId: String
		requester: User
		requested: User
		createdAt: String
		updatedAt: String
		deletedAt: String
	}
`
