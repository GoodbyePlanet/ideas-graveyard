import React, { ChangeEvent, useState } from 'react'

import { useAuth } from '@redwoodjs/auth'

import { Modal } from 'src/components/modals/Modal'

import './LoginModal.css'

interface LoginModalProps {
  handleOnClose: () => void
  show: boolean
}

export const LoginModal = ({
  show,
  handleOnClose,
}: LoginModalProps): JSX.Element => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const { logIn } = useAuth()

  if (!show) {
    return null
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setEmail(event.target.value)

  const isValidEmail = (): boolean => /\S+@\S+\.\S+/.test(email)

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault()

    if (!isValidEmail()) {
      setEmailError(true)
      return
    } else {
      setEmailError(false)
    }

    try {
      setLoading(true)
      const { error } = await logIn({
        email,
        redirectTo: `${window.location.origin}/graveyard`,
      })

      if (error) {
        throw error
      }

      setLoginSuccess(true)
    } catch (error) {
      console.error('An error occurred', error)
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
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={email}
              onChange={handleEmailChange}
            ></input>
            {emailError && (
              <p className="email-error">Please enter valid email</p>
            )}
          </div>
          <button
            type="button"
            className="mt-6 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
            disabled={loading}
            onClick={(e) => handleLogin(e)}
          >
            Send magic link
          </button>

          {loginSuccess && (
            <p className="text-base font-semibold mt-6 ml-1">
              Check your email inbox for magic link
            </p>
          )}
        </div>
      </form>
    </Modal>
  )
}
