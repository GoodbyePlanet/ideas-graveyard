import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import './GraveyardPage.css'
import { IdeaItem } from 'src/components/IdeaItem'
import { Modal } from 'src/components/Modal'

interface Idea {
  id: number
  subject: string
  body: string
}

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

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

  const handleOnClose = (): void => setIsLoginModalOpen(false)

  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <header>
        <div className="flex justify-end items-center h-14 border-b-2 border-gray-200">
          <button
            className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </button>
        </div>
      </header>

      {isLoginModalOpen && <LoginModal handleOnClose={handleOnClose} />}

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

const LoginModal = ({
  handleOnClose,
}: {
  handleOnClose: () => void
}): JSX.Element => {
  return (
    <Modal onClose={handleOnClose}>
      <h3 className="text-2xl font-bold text-center">Login using magic link</h3>
      <form>
        <div className="mt-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              style={{ fontSize: 'var(--fs-small)' }}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            ></input>
          </div>
          <button className="mt-4 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded">
            Send magic link
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default GraveyardPage
