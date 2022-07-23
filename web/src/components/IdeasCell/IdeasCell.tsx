import React from 'react'

import type { IdeasQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { IdeaItem } from 'src/components/IdeaItem'

import './IdeasCell.css'

export const QUERY = gql`
  query IdeasQuery {
    ideas {
      id
      title
      body
      user
      createdAt
    }
  }
`

export const Loading = () => <div className="spinner spinner-border"></div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ ideas }: CellSuccessProps<IdeasQuery>) => {
  return (
    <div className="flex justify-center">
      <div className="relative flex justify-center flex-wrap w-4/5 mt-4 border-gray-200">
        {ideas.map((idea) => (
          <IdeaItem
            key={idea.id}
            title={idea.title}
            body={idea.body}
            user={idea.user}
            createdAt={idea.createdAt}
          />
        ))}
      </div>
    </div>
  )
}
