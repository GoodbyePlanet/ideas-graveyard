import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.IdeaCreateInput = [
      {
        title: 'My first failed idea',
        body: 'This is my first idea that I didnt finished',
        user: 'Raskoljnikov',
        userId: '66c7e37a-9be7-47e6-b788-e91770e4e054',
      },
      {
        title: 'My second failed idea',
        body: 'This is second failed idea that I didnt finished',
        user: 'Raskoljnikov',
        userId: '66c7e37a-9be7-47e6-b788-e91770e4e054',
      },
      {
        title: 'Third failed idea',
        body: 'This is third failed idea that I didnt finished',
        user: 'Ivanova',
        userId: '55c7e37a-9be7-47e6-b788-e91770e4e077',
      },
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      data.map(async (data: Prisma.IdeaCreateInput) => {
        const record = await db.idea.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
