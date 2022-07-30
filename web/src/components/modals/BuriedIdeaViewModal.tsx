import { useQuery } from '@redwoodjs/web'
import { Modal } from 'src/components/modals/Modal'
import React from 'react'

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

interface BuriedIdeaViewProps {
  show: boolean
  ideaId: number
  onClose: () => void
}

export const BuriedIdeaView = ({
  show,
  ideaId,
  onClose,
}: BuriedIdeaViewProps): JSX.Element => {
  const { loading, data } = useQuery(QUERY_IDEA_BY_ID, {
    variables: { id: ideaId },
  })

  return (
    <Modal onClose={onClose} show={show}>
      {loading ? (
        <div className="text-center font-semibold">Loading ....</div>
      ) : (
        <>
          <p className="mt-4 text-2xl text-center font-semibold">
            {data?.idea.title}
          </p>
          <p
            style={{ fontSize: 'var(--fs-small)' }}
            className="mt-4 text-center"
          >
            {data?.idea.body}
          </p>
        </>
      )}
    </Modal>
  )
}
