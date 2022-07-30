import { useMutation } from '@redwoodjs/web'

import { QUERY } from 'src/components/IdeasCell/IdeasCell'
import { Modal } from 'src/components/modals/Modal'

const DELETE_IDEA_MUTATION = gql`
  mutation DeleteIdeaMutation($id: Int!) {
    deleteIdea(id: $id) {
      id
    }
  }
`

interface DeleteModalProps {
  show: boolean
  ideaId: number
  onClose: () => void
}

export const DeleteIdeaModal = ({
  show,
  ideaId,
  onClose,
}: DeleteModalProps): JSX.Element => {
  const [deleteIdea, { loading }] = useMutation(DELETE_IDEA_MUTATION, {
    onCompleted: () => {
      onClose()
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const handleDeleteIdea = async (): Promise<void> => {
    await deleteIdea({
      variables: {
        id: ideaId,
      },
    })
  }

  return (
    <Modal show={show} onClose={onClose}>
      <div>You want do dig your idea?</div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="mt-6 text-base mr-4 w-32 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
          disabled={loading}
          onClick={handleDeleteIdea}
        >
          Yup
        </button>
        <button
          type="button"
          className="mt-6 text-base mr-4 w-32 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </Modal>
  )
}
