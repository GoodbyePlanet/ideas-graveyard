import React, { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { Header } from 'src/components/Header'
import { IdeaItem } from 'src/components/IdeaItem'
import { LoginModal } from 'src/components/modals/LoginModal'

import './GraveyardPage.css'

interface IdeaProps {
  id: number
  subject: string
  body: string
}

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const failedIdeas: IdeaProps[] = [
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
  const handleIsLoginModalOpen = (): void => setIsLoginModalOpen(true)

  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <Header onClick={handleIsLoginModalOpen} />
      <LoginModal show={isLoginModalOpen} handleOnClose={handleOnClose} />

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
