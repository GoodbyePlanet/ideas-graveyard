import { ReactNode, useEffect, useRef } from 'react'

import './Modal.css'

interface ModalProps {
  children: ReactNode
  onClose: () => void
  show: boolean
}

export const Modal = ({ children, onClose, show }: ModalProps): JSX.Element => {
  const modalRef = useRef(null)

  useEffect(() => {
    if (show) {
      modalRef.current.classList.add('visible')
    } else {
      modalRef.current.classList.remove('visible')
    }
  }, [show])

  return (
    <div
      ref={modalRef}
      className="modal flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="modal-content px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <CloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  )
}

const CloseButton = ({ onClose }: { onClose: () => void }): JSX.Element => (
  <button
    type="button"
    className="close-button bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
    onClick={onClose}
  >
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
)
