import React from 'react'

import { useForm } from 'react-hook-form'

import { useAuth } from '@redwoodjs/auth'
import { useMutation, useQuery } from '@redwoodjs/web'

import { IdeaForm } from 'src/components/IdeaForm'
import { QUERY } from 'src/components/IdeasCell/IdeasCell'
import { Modal } from 'src/components/modals/Modal'
import { getUserName } from 'src/utils/utils'

interface BuriedIdeaEditProps {
  show: boolean
  ideaId: number
  handleClose: () => void
}

type FormValues = {
  title: string
  body: string
}

export const QUERY_IDEA_BY_ID = gql`
  query IdeaQuery($id: Int!) {
    idea(id: $id) {
      id
      title
      body
      user
      userId
      createdAt
    }
  }
`

const UPDATE_IDEA_MUTATION = gql`
  mutation UpdateIdeaMutation($id: Int!, $input: UpdateIdeaInput!) {
    updateIdea(id: $id, input: $input) {
      title
      body
      user
      userId
    }
  }
`

export const BuriedIdeaEdit = ({
  ideaId,
  show,
  handleClose,
}: BuriedIdeaEditProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>()

  const { currentUser } = useAuth()

  const { loading: fetchLoading } = useQuery(QUERY_IDEA_BY_ID, {
    variables: { id: ideaId },
    onCompleted: (data) => {
      setValue('title', data?.idea?.title)
      setValue('body', data?.idea?.body)
    },
  })

  const [updateIdea, { loading }] = useMutation(UPDATE_IDEA_MUTATION, {
    onCompleted: () => {
      reset()
      handleClose()
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  if (!show) {
    return null
  }

  const onUpdateIdea = handleSubmit(async (data: FormValues): Promise<void> => {
    await updateIdea({
      variables: {
        id: ideaId,
        input: {
          title: data.title,
          body: data.body,
          user: getUserName(currentUser?.email),
          userId: currentUser?.sub,
        },
      },
    })
  })

  return (
    <Modal onClose={handleClose} show={show}>
      <h3 className="text-2xl font-medium text-center">Bury your idea</h3>
      {fetchLoading ? (
        <div className="text-center font-semibold">Loading ....</div>
      ) : (
        <IdeaForm
          handleSubmit={onUpdateIdea}
          register={register}
          errors={errors}
          loading={loading}
        />
      )}
    </Modal>
  )
}
