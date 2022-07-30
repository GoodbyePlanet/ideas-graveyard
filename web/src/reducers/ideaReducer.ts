import { ActionType } from 'src/types/ActionType'

export const initialIdeaModalState = {
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

export enum IdeaModalActionType {
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

export const reducer = (state: IdeaModalState, action: IdeaModalAction) => {
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
