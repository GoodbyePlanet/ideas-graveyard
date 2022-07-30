import React from 'react'

import { useForm } from 'react-hook-form'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

import { IdeaForm } from 'src/components/IdeaForm'
import { QUERY } from 'src/components/IdeasCell/IdeasCell'
import { Modal } from 'src/components/modals/Modal'
import { getUserName } from 'src/utils/utils'

import './BuryIdeaModal.css'

interface BuryIdeaModalProps {
  show: boolean
  onClose: () => void
}

type FormValues = {
  title: string
  body: string
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
  onClose,
}: BuryIdeaModalProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()
  const { currentUser } = useAuth()

  const [createIdea, { loading }] = useMutation(CREATE_IDEA_MUTATION, {
    onCompleted: () => {
      handleClose()
      reset()
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  if (!show) {
    return null
  }

  const handleBuryIdea = handleSubmit(
    async (data: FormValues): Promise<void> => {
      await createIdea({
        variables: {
          input: {
            title: data.title,
            body: data.body,
            user: getUserName(currentUser?.email),
            userId: currentUser?.sub,
          },
        },
      })
    }
  )

  const handleClose = (): void => {
    reset()
    onClose()
  }

  return (
    <Modal onClose={handleClose} show={show}>
      <h3 className="text-2xl font-medium text-center">Bury your idea</h3>
      <IdeaForm
        handleSubmit={handleBuryIdea}
        register={register}
        errors={errors}
        loading={loading}
      />
    </Modal>
  )
}
