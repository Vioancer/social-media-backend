import { Hashtag } from '@prisma/client'
import { builder } from '~/graphql/builder'

export const HashtagObject = builder.objectRef<Hashtag>('Hashtag')

HashtagObject.implement({
	fields: (t) => ({
		id: t.exposeID('id'),
		hashtag: t.exposeString('hashtag'),
	}),
})
