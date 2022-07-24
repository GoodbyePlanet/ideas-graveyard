import { useAuth } from '@redwoodjs/auth'

import './IdeaItem.css'

interface IdeaProps {
  title: string
  body: string
  user: string
  userId: string
  createdAt: string
}

export const IdeaItem = ({
  title,
  body,
  user,
  userId,
  createdAt,
}: IdeaProps): JSX.Element => {
  const { isAuthenticated, currentUser } = useAuth()

  const getCreationDate = (): string =>
    new Date(createdAt).toLocaleDateString('en-us', {
      day: 'numeric',
      year: 'numeric',
      month: 'short',
    })

  const isLoggedInUser = (): boolean =>
    isAuthenticated && currentUser.sub === userId

  return (
    <div className="idea-item-container flex flex-col items-center p-4 w-96 m-8 border-2 border-gray-200">
      {isLoggedInUser() && <div>E</div>}
      <img className="w-32 h-32" src="rip.png" alt="Rip icon" />
      <p className="mt-4 text-2xl font-semibold">{title}</p>
      <p style={{ fontSize: 'var(--fs-small)' }} className="mt-4 text-center">
        {body}
      </p>

      <div className="flex items-center w-full mt-4">
        <div className="text-sm">
          <p className="text-gray-900 leading-none">{user}</p>
          <p className="text-gray-600">{getCreationDate()}</p>
        </div>
      </div>
    </div>
  )
}
