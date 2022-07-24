import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdeaCreateArgs>({
  idea: {
    one: { data: { title: 'String', user: 'String', userId: 'String' } },
    two: { data: { title: 'String', user: 'String', userId: 'String' } },
  },
})

export type StandardScenario = typeof standard
