import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.IdeaCreateArgs>({
  idea: {
    one: { data: { title: 'String' } },
    two: { data: { title: 'String' } },
  },
})

export type StandardScenario = typeof standard
