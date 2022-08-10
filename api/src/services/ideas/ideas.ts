import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const ideas: QueryResolvers['ideas'] = () => {
  return db.idea.findMany({ orderBy: [{ createdAt: 'desc' }] })
}

export const idea: QueryResolvers['idea'] = ({ id }) => {
  return db.idea.findUnique({
    where: { id },
  })
}

export const createIdea: MutationResolvers['createIdea'] = ({ input }) => {
  return db.idea.create({
    data: input,
  })
}

export const updateIdea: MutationResolvers['updateIdea'] = ({ id, input }) => {
  return db.idea.update({
    data: input,
    where: { id },
  })
}

export const deleteIdea: MutationResolvers['deleteIdea'] = ({ id }) => {
  return db.idea.delete({
    where: { id },
  })
}
