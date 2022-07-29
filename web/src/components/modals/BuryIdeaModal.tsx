import React, { ChangeEvent, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

import { QUERY } from 'src/components/IdeasCell/IdeasCell'
import { Modal } from 'src/components/modals/Modal'
import { FormErrors } from 'src/types/FormErrors'
import { getUserName } from 'src/utils/utils'

import './BuryIdeaModal.css'

interface BuryIdeaModalProps {
  show: boolean
  handleClose: () => void
}

const CREATE_IDEA_MUTATION = gql`
  mutation CreateIdeaMutation($input: CreateIdeaInput!) {
    createIdea(input: $input) {
      id
    }
  }
`

export const BuryIdeaModal = ({
  show,
  handleClose,
}: BuryIdeaModalProps): JSX.Element => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [formErrors, setFormErrors] = useState({} as FormErrors)

  const { currentUser } = useAuth()

  const [createIdea, { loading }] = useMutation(CREATE_IDEA_MUTATION, {
    onCompleted: () => {
      handleClose()
      setTitle('')
      setBody('')
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  if (!show) {
    return null
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setTitle(event.target.value)
  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setBody(event.target.value)

  const isValidForm = (): boolean => {
    const errors = {} as FormErrors

    if (title.length === 0) {
      errors.title = true
    }

    if (body.length === 0) {
      errors.body = true
    }

    if (errors.title || errors.body) {
      setFormErrors(errors)
      return false
    }

    return true
  }

  const resetFormErrors = (): void => setFormErrors({} as FormErrors)

  const handleBuryIdea = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault()

    if (!isValidForm()) {
      return
    } else {
      resetFormErrors()
    }

    await createIdea({
      variables: {
        input: {
          title,
          body,
          user: getUserName(currentUser?.email),
          userId: currentUser?.sub,
        },
      },
    })
  }

  return (
    <Modal onClose={handleClose} show={show}>
      <h3 className="text-2xl font-medium text-center">Bury your idea</h3>
      <form>
        <div className="mt-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={title}
              onChange={handleTitleChange}
            ></input>
            {formErrors.title && <p className="error">Title is required</p>}
          </div>
          <div>
            <textarea
              rows={5}
              cols={80}
              placeholder="Briefly explain your idea"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={body}
              onChange={handleBodyChange}
            ></textarea>
            {formErrors.body && <p className="error">Body is required</p>}
          </div>
          <button
            type="button"
            className="mt-6 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
            disabled={loading}
            onClick={(e) => handleBuryIdea(e)}
          >
            Bury it
          </button>
        </div>
      </form>
    </Modal>
  )
}
