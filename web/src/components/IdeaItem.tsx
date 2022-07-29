import { useAuth } from '@redwoodjs/auth'

import { ActionType } from 'src/types/ActionType'

import './IdeaItem.css'

interface IdeaItemProps {
  title: string
  body: string
  user: string
  userId: string
  createdAt: string
  onClick: (action) => void
}

export const IdeaItem = ({
  title,
  body,
  user,
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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleViewIdea}
      className="idea-item-container flex flex-col items-center p-4 w-96 m-8 border-2 border-gray-200"
    >
      {isLoggedInUser() && <div></div>}
      <img className="w-32 h-32" src="rip.png" alt="Rip icon" />
      <p className="mt-4 text-2xl w-full truncate text-center font-semibold">
        {title}
      </p>
      <p className="idea-body mt-4 text-center">{body}</p>

      <div className="flex items-center w-full mt-4">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{user}</p>
          <p className="text-gray-600">{getCreationDate()}</p>
        </div>
      </div>
    </div>
  )
}
