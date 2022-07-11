import { MetaTags } from '@redwoodjs/web'

import './GraveyardPage.css'

interface Idea {
  id: number
  subject: string
  body: string
}

const GraveyardPage = (): JSX.Element => {
  const failedIdeas: Idea[] = [
    {
      id: 1,
      subject: 'Failed idea',
      body: 'This is my first failed idea. I started very enthusiastic but ended not even finishing my cool idea.',
    },
    {
      id: 2,
      subject: 'Failed idea',
      body: 'This is my first failed idea. I started very enthusiastic but ended not even finishing my cool idea.',
    },
    {
      id: 3,
      subject: 'Failed idea',
      body: 'This is my first failed idea. I started very enthusiastic but ended not even finishing my cool idea.',
    },
    {
      id: 4,
      subject: 'Failed idea',
      body: 'This is my first failed idea. I started very enthusiastic but ended not even finishing my cool idea.',
    },
  ]

  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <header>
        <div className="flex justify-end items-center h-14 border-b-2 border-gray-200">
          <button className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded">
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <div className="relative flex justify-center flex-wrap w-4/5 mt-4 border-gray-200">
            {failedIdeas.map((idea) => (
              <div
                key={idea.id}
                className="flex flex-col items-center w-96 m-8 border-2 border-gray-200"
              >
                <img className="w-32 h-32" src="rip.png" alt="Rip icon" />
                <p className="mt-4 text-2xl font-semibold">{idea.subject}</p>
                <p
                  style={{ fontSize: 'var(--fs-small)' }}
                  className="mt-4 text-center"
                >
                  {idea.body}
                </p>
              </div>
            ))}

            <div className="shovelContainer">
              <img className="shovelImg" src="shovel.svg" alt="Shovel" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default GraveyardPage
