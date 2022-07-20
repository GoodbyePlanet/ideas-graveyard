import { MetaTags } from '@redwoodjs/web'

import './GraveyardPage.css'
import { IdeaItem } from 'src/components/IdeaItem'

import { Link, routes } from '@redwoodjs/router'

import { useState } from 'react'

interface Idea {
  id: number
  subject: string
  body: string
}

const GraveyardPage = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <button
            className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__wrap">Hello from Modal</div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="relative flex justify-center flex-wrap w-4/5 mt-4 border-gray-200">
          {failedIdeas.map((idea) => (
            <IdeaItem key={idea.id} subject={idea.subject} body={idea.body} />
          ))}
          <div className="shovelContainer">
            <img className="shovelImg" src="shovel.svg" alt="Shovel" />
          </div>
        </div>
      </div>
    </>
  )
}

export default GraveyardPage
