import React from 'react'

import type { IdeasQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

import { IdeaItem } from 'src/components/IdeaItem'
import { ActionType } from 'src/types/ActionType'

import './IdeasCell.css'

export const QUERY = gql`
  query IdeasQuery {
    ideas {
      id
      title
      body
      user
      userId
      createdAt
    }
  }
`

export const Loading = () => <div className="spinner spinner-border"></div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  ideas,
  onClick,
}: CellSuccessProps<IdeasQuery> & {
  onClick: (id: number, action: ActionType) => void
}) => {
  return (
    <div className="flex justify-center">
      <div className="relative flex justify-center flex-wrap w-4/5 mt-4 border-gray-200">
        {ideas.map(({ id, title, body, user, userId, createdAt }) => (
          <IdeaItem
            key={id}
            title={title}
            body={body}
            userName={user}
            userId={userId}
            createdAt={createdAt}
            onClick={(action) => onClick(id, action)}
          />
        ))}
      </div>
    </div>
  )
}
