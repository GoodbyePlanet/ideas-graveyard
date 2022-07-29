import React, { ReactNode, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import { AuthButton } from 'src/components/AuthButton'
import { Header } from 'src/components/Header'
import IdeasCell from 'src/components/IdeasCell'
import { BuriedIdeaEdit } from 'src/components/modals/BuriedIdeaEditModal'
import { BuriedIdeaView } from 'src/components/modals/BuriedIdeaViewModal'
import { BuryIdeaModal } from 'src/components/modals/BuryIdeaModal'
import { DeleteIdeaModal } from 'src/components/modals/DeleteIdeaModal'
import { LoginModal } from 'src/components/modals/LoginModal'
import { Shovel } from 'src/components/Shovel'
import { ActionType } from 'src/types/ActionType'

import './GraveyardPage.css'

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isBuryIdeaModalOpen, setIsBuryIdeaModalOpen] = useState(false)
  const [isBuriedIdeaEditModalOpen, setIsBuriedIdeaEditModalOpen] =
    useState(false)
  const [isBuriedIdeaViewModalOpen, setIsBuriedIdeaViewModalOpen] =
    useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
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

  const handleIdeaSelected = (id: number, action: ActionType): void => {
    if (action === ActionType.VIEW) {
      setIsBuriedIdeaViewModalOpen(true)
    }

    if (action === ActionType.EDIT) {
      setIsBuriedIdeaEditModalOpen(true)
    }

    if (action === ActionType.DELETE) {
      setIsDeleteModalOpen(true)
    }

    setAction(action)
    setIdeaId(id)
  }
  const handBuriedIdeaEditModalClose = (): void => {
    setIsBuriedIdeaEditModalOpen(false)
    setAction(ActionType.CREATE)
  }
  const handleBuriesIdeaViewModalClose = (): void => {
    setIsBuriedIdeaViewModalOpen(false)
    setAction(ActionType.CREATE)
  }
  const handleDeleteModalClose = (): void => {
    setIsDeleteModalOpen(false)
    setAction(ActionType.CREATE)
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
      <BuryIdea>
        {action === ActionType.CREATE && (
          <BuryIdeaModal
            show={isBuryIdeaModalOpen}
            handleClose={handleBuryIdeaModalClose}
          />
        )}
        {action === ActionType.EDIT && (
          <BuriedIdeaEdit
            show={isBuriedIdeaEditModalOpen}
            ideaId={ideaId}
            handleClose={handBuriedIdeaEditModalClose}
          />
        )}
        {action === ActionType.VIEW && (
          <BuriedIdeaView
            show={isBuriedIdeaViewModalOpen}
            ideaId={ideaId}
            onClose={handleBuriesIdeaViewModalClose}
          />
        )}
        {action === ActionType.DELETE && (
          <DeleteIdeaModal
            show={isDeleteModalOpen}
            ideaId={ideaId}
            onClose={handleDeleteModalClose}
          />
        )}
      </BuryIdea>
      <IdeasCell onClick={(id, action) => handleIdeaSelected(id, action)} />
      <Shovel
        isAuthenticated={isAuthenticated}
        onClick={handleOpenBuryIdeaModal}
      />
    </>
  )
}

interface BuryIdeaProps {
  children: ReactNode
}

const BuryIdea = ({ children }: BuryIdeaProps): JSX.Element => {
  return <>{children}</>
}

export default GraveyardPage
