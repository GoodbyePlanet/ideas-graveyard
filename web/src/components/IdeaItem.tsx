import './IdeaItem.css'

interface Idea {
  title: string
  body: string
  user: string
  createdAt: string
}

export const IdeaItem = ({
  title,
  body,
  user,
  createdAt,
}: Idea): JSX.Element => {
  const getCreationDate = (): string =>
    new Date(createdAt).toLocaleDateString('en-us', {
      day: 'numeric',
      year: 'numeric',
      month: 'short',
    })

  return (
    <div className="ideaItemContainer flex flex-col items-center p-4 w-96 m-8 border-2 border-gray-200">
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
