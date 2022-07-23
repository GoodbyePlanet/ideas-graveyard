import './IdeaItem.css'

interface Idea {
  title: string
  body: string
}

export const IdeaItem = ({ title, body }: Idea): JSX.Element => (
  <div className="ideaItemContainer flex flex-col items-center p-4 w-96 m-8 border-2 border-gray-200">
    <img className="w-32 h-32" src="rip.png" alt="Rip icon" />
    <p className="mt-4 text-2xl font-semibold">{title}</p>
    <p style={{ fontSize: 'var(--fs-small)' }} className="mt-4 text-center">
      {body}
    </p>

    <div className="flex items-center w-full mt-4">
      <img
        className="avatarFont w-10 h-10 rounded-full mr-4"
        src="avatar-default.svg"
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
)
