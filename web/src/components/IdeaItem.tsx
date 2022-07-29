import { useAuth } from '@redwoodjs/auth'

import { ActionType } from 'src/types/ActionType'

import './IdeaItem.css'
import React from 'react'
import { logger } from 'src/lib/logger'

interface IdeaItemProps {
  title: string
  body: string
  userName: string
  userId: string
  createdAt: string
  onClick: (action) => void
}

export const IdeaItem = ({
  title,
  body,
  userName,
  userId,
  createdAt,
  onClick,
}: IdeaItemProps): JSX.Element => {
  const { isAuthenticated, currentUser } = useAuth()

  const getCreationDate = (): string =>
    new Date(createdAt).toLocaleDateString('en-us', {
      day: 'numeric',
      year: 'numeric',
      month: 'short',
    })

  const isLoggedInUser = (): boolean =>
    isAuthenticated && currentUser.sub === userId

  const handleViewIdea = (): void => onClick(ActionType.VIEW)

  return (
    <div className="idea-item-container flex flex-col items-center p-4 w-96 m-8 border-2 border-gray-200">
      <div className="w-full" onClick={handleViewIdea}>
        <img className="m-auto w-32 h-32" src="rip.png" alt="Rip icon" />
        <p className="mt-4 text-2xl w-full truncate text-center font-semibold">
          {title}
        </p>
        <p className="idea-body mt-4 text-center">{body}</p>
      </div>

      <div className="flex items-center justify-between w-full mt-6">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{userName}</p>
          <p className="text-gray-600">{getCreationDate()}</p>
        </div>
        {isLoggedInUser() && (
          <div>
            <button
              onClick={() => console.log('CLICKING ON THE DELETE BUTTON')}
            >
              <img
                className="remove-img h-8 pr-2"
                src="remove.svg"
                alt="Shovel"
              />
            </button>
            <button onClick={() => console.log('CLICKING ON THE EDIT BUTTON')}>
              <img className="edit-shovel-img" src="shovel.svg" alt="Shovel" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
