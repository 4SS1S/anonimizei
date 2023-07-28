import { QuestionResolver } from './question-resolver'
import { UserResolver } from './user-resolver'
import { ResponseResolver } from './response-resolver'

export const Query = {
	...QuestionResolver.Query,
	...UserResolver.Query,
	...ResponseResolver.Query
}

export const Mutation = {
	...ResponseResolver.Mutation
}

export const resolvers = {
	Query,
	Mutation
}
