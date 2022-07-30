import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

import { useAuth } from '@redwoodjs/auth'

import { Modal } from 'src/components/modals/Modal'

import './LoginModal.css'

interface LoginModalProps {
  handleOnClose: () => void
  show: boolean
}

type FormValues = {
  email: string
}

export const LoginModal = ({
  show,
  handleOnClose,
}: LoginModalProps): JSX.Element => {
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const { logIn } = useAuth()

  if (!show) {
    return null
  }

  const handleLogin = async (data): Promise<void> => {
    try {
      setLoading(true)
      const { error } = await logIn({
        email: data.email,
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

  const onClose = (): void => {
    reset()
    setLoginSuccess(false)
    handleOnClose()
  }

  return (
    <Modal show={show} onClose={onClose}>
      <h3 className="text-2xl font-medium text-center">
        Login using magic link
      </h3>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mt-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              {...register('email', {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            ></input>
            {errors.email && (
              <p className="email-error">Please enter valid email</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-6 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
            disabled={loading}
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
