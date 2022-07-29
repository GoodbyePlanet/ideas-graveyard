import React, { ReactNode, useReducer, useState } from 'react'

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

const initialIdeaModalState = {
  isBuryIdeaModalOpen: false,
  isBuriedIdeaEditModalOpen: false,
  idBuriedIdeaDeleteModalOpen: false,
  isBuriedIdeaViewModalOpen: false,
  action: ActionType.CREATE,
  ideaId: null,
}

interface IdeaModalState {
  isBuryIdeaModalOpen: boolean
  isBuriedIdeaEditModalOpen: boolean
  idBuriedIdeaDeleteModalOpen: boolean
  isBuriedIdeaViewModalOpen: boolean
  action: ActionType
  ideaId: number
}

enum IdeaModalActionType {
  BURY_IDEA_MODAL_OPEN = 'BURY_IDEA_MODAL_OPEN',
  BURY_IDEA_MODAL_CLOSE = 'BURY_IDEA_MODAL_CLOSE',
  BURIED_IDEA_EDIT_MODAL_OPEN = 'BURIED_IDEA_EDIT_MODAL_OPEN',
  BURIED_IDEA_EDIT_MODAL_CLOSE = 'BURIED_IDEA_EDIT_MODAL_CLOSE',
  BURIED_IDEA_DELETE_MODAL_OPEN = 'BURIED_IDEA_DELETE_MODAL_OPEN',
  BURIED_IDEA_DELETE_MODAL_CLOSE = 'BURIED_IDEA_DELETE_MODAL_CLOSE',
  BURIED_IDEA_VIEW_MODAL_OPEN = 'BURIED_IDEA_VIEW_MODAL_OPEN',
  BURIED_IDEA_VIEW_MODAL_CLOSE = 'BURIED_IDEA_VIEW_MODAL_CLOSE',
  SET_ACTION = 'SET_ACTION',
}

interface IdeaModalAction {
  type: IdeaModalActionType
  payload?: { actionType: ActionType; ideaId: number }
}

const reducer = (state: IdeaModalState, action: IdeaModalAction) => {
  const { type, payload } = action

  switch (type) {
    case IdeaModalActionType.BURY_IDEA_MODAL_OPEN:
      return { ...state, isBuryIdeaModalOpen: true, action: ActionType.CREATE }
    case IdeaModalActionType.BURY_IDEA_MODAL_CLOSE:
      return { ...state, isBuryIdeaModalOpen: false, action: ActionType.CREATE }
    case IdeaModalActionType.BURIED_IDEA_EDIT_MODAL_OPEN:
      return { ...state, isBuriedIdeaEditModalOpen: true }
    case IdeaModalActionType.BURIED_IDEA_EDIT_MODAL_CLOSE:
      return {
        ...state,
        isBuriedIdeaEditModalOpen: false,
        action: ActionType.CREATE,
      }
    case IdeaModalActionType.BURIED_IDEA_DELETE_MODAL_OPEN:
      return { ...state, idBuriedIdeaDeleteModalOpen: true }
    case IdeaModalActionType.BURIED_IDEA_DELETE_MODAL_CLOSE:
      return {
        ...state,
        idBuriedIdeaDeleteModalOpen: false,
        action: ActionType.CREATE,
      }
    case IdeaModalActionType.BURIED_IDEA_VIEW_MODAL_OPEN:
      return { ...state, isBuriedIdeaViewModalOpen: true }
    case IdeaModalActionType.BURIED_IDEA_VIEW_MODAL_CLOSE:
      return {
        ...state,
        isBuriedIdeaViewModalOpen: false,
        action: ActionType.CREATE,
      }
    case IdeaModalActionType.SET_ACTION:
      return {
        ...state,
        action: payload.actionType,
        ideaId: payload.ideaId,
      }
    default:
      throw new Error('Unknown action')
  }
}

const GraveyardPage = (): JSX.Element => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialIdeaModalState)

  const { currentUser, isAuthenticated, logOut } = useAuth()

  const handleLogout = async (): Promise<void> => await logOut()

  const handleIsLoginModalOpen = (): void => setIsLoginModalOpen(true)
  const handleLoginModalClose = (): void => setIsLoginModalOpen(false)

  const handleSelectedIdea = (id: number, action: ActionType): void => {
    switch (action) {
      case ActionType.VIEW:
        dispatch({ type: IdeaModalActionType.BURIED_IDEA_VIEW_MODAL_OPEN })
        break
      case ActionType.EDIT:
        dispatch({ type: IdeaModalActionType.BURIED_IDEA_EDIT_MODAL_OPEN })
        break
      case ActionType.DELETE:
        dispatch({ type: IdeaModalActionType.BURIED_IDEA_DELETE_MODAL_OPEN })
        break
      default:
        throw new Error('Unknown action type!')
    }

    dispatch({
      type: IdeaModalActionType.SET_ACTION,
      payload: { actionType: action, ideaId: id },
    })
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
        {state.action === ActionType.CREATE && (
          <BuryIdeaModal
            show={state.isBuryIdeaModalOpen}
            handleClose={() =>
              dispatch({ type: IdeaModalActionType.BURY_IDEA_MODAL_CLOSE })
            }
          />
        )}
        {state.action === ActionType.EDIT && (
          <BuriedIdeaEdit
            show={state.isBuriedIdeaEditModalOpen}
            ideaId={state.ideaId}
            handleClose={() =>
              dispatch({
                type: IdeaModalActionType.BURIED_IDEA_EDIT_MODAL_CLOSE,
              })
            }
          />
        )}
        {state.action === ActionType.VIEW && (
          <BuriedIdeaView
            show={state.isBuriedIdeaViewModalOpen}
            ideaId={state.ideaId}
            onClose={() =>
              dispatch({
                type: IdeaModalActionType.BURIED_IDEA_VIEW_MODAL_CLOSE,
              })
            }
          />
        )}
        {state.action === ActionType.DELETE && (
          <DeleteIdeaModal
            show={state.idBuriedIdeaDeleteModalOpen}
            ideaId={state.ideaId}
            onClose={() =>
              dispatch({
                type: IdeaModalActionType.BURIED_IDEA_DELETE_MODAL_CLOSE,
              })
            }
          />
        )}
      </BuryIdea>
      <IdeasCell onClick={(id, action) => handleSelectedIdea(id, action)} />
      <Shovel
        isAuthenticated={isAuthenticated}
        onClick={() =>
          dispatch({ type: IdeaModalActionType.BURY_IDEA_MODAL_OPEN })
        }
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
