import React, { ChangeEvent, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'

import { Modal } from 'src/components/modals/Modal'

interface LoginModalProps {
  handleOnClose: () => void
  show: boolean
}

export const LoginModal = ({
  show,
  handleOnClose,
}: LoginModalProps): JSX.Element => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const { logIn } = useAuth()

  if (!show) {
    return null
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault()

    try {
      setLoading(true)
      const { error } = await logIn({
        email,
        redirectTo: `${window.location.origin}/graveyard`,
      })
      if (error) {
        throw error
      }
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal show={show} onClose={handleOnClose}>
      <h3 className="text-2xl font-medium text-center">
        Login using magic link
      </h3>
      <form>
        <div className="mt-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              style={{ fontSize: 'var(--fs-small)' }}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <button
            className="mt-6 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
            onClick={(e) => handleLogin(e)}
          >
            Send magic link
          </button>
        </div>
      </form>
    </Modal>
  )
}
