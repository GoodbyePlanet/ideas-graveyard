import React, { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import { Header } from 'src/components/Header'
import IdeasCell from 'src/components/IdeasCell'
import { BuryIdeaModal } from 'src/components/modals/BuryIdeaModal'
import { LoginModal } from 'src/components/modals/LoginModal'
import { ActionType } from 'src/types/ActionType'

import './GraveyardPage.css'

interface AuthButtonProps {
  isAuthenticated: boolean
  handleLogout: () => void
  handleIsLoginModalOpen: () => void
}

interface ShovelProps {
  isAuthenticated: boolean
  onClick: () => void
}

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isBuryIdeaModalOpen, setIsBuryIdeaModalOpen] = useState(false)
  const [action, setAction] = useState(ActionType.CREATE)
  const [ideaId, setIdeaId] = useState(null)

  const { currentUser, isAuthenticated, logOut } = useAuth()

  const handleLoginModalClose = (): void => setIsLoginModalOpen(false)
  const handleBuryIdeaModalClose = (): void => {
    setIsBuryIdeaModalOpen(false)
    setAction(ActionType.CREATE)
  }
  const handleIsLoginModalOpen = (): void => setIsLoginModalOpen(true)
  const handleLogout = async (): Promise<void> => await logOut()
  const handleOpenBuryIdeaModal = (): void => setIsBuryIdeaModalOpen(true)
  const handleEditOrViewIdea = (id: number, action: ActionType): void => {
    setIsBuryIdeaModalOpen(true)
    setAction(action)
    setIdeaId(id)
  }

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
      <LoginModal
        show={isLoginModalOpen}
        handleOnClose={handleLoginModalClose}
      />
      <BuryIdeaModal
        show={isBuryIdeaModalOpen}
        action={action}
        ideaId={ideaId}
        handleClose={handleBuryIdeaModalClose}
      />
      <IdeasCell onClick={(id, action) => handleEditOrViewIdea(id, action)} />
      <Shovel
        isAuthenticated={isAuthenticated}
        onClick={handleOpenBuryIdeaModal}
      />
    </>
  )
}

const Shovel = ({ isAuthenticated, onClick }: ShovelProps): JSX.Element => {
  if (!isAuthenticated) {
    return null
  }

  return (
    <button onClick={onClick} className="shovelContainer">
      <img className="shovelImg" src="shovel.svg" alt="Shovel" />
    </button>
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
