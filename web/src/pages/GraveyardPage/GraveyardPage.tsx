import React, { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import { Header } from 'src/components/Header'
import IdeasCell from 'src/components/IdeasCell'
import { LoginModal } from 'src/components/modals/LoginModal'

import './GraveyardPage.css'

interface IdeaProps {
  id: number
  subject: string
  body: string
}

interface AuthButtonProps {
  isAuthenticated: boolean
  handleLogout: () => void
  handleIsLoginModalOpen: () => void
}

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const { currentUser, isAuthenticated, logOut } = useAuth()

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
  const handleLogout = async (): Promise<void> => await logOut()

  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <Header user={currentUser?.email as string}>
        <AuthButton
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
          handleIsLoginModalOpen={handleIsLoginModalOpen}
        />
      </Header>
      <LoginModal show={isLoginModalOpen} handleOnClose={handleOnClose} />
      <IdeasCell />
    </>
  )
}

const AuthButton = ({
  isAuthenticated,
  handleLogout,
  handleIsLoginModalOpen,
}: AuthButtonProps): JSX.Element => (
  <button
    className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
    onClick={isAuthenticated ? handleLogout : handleIsLoginModalOpen}
  >
    {isAuthenticated ? 'Logout' : 'Login'}
  </button>
)

export default GraveyardPage
