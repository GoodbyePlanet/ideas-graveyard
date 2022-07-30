interface AuthButtonProps {
  isAuthenticated: boolean
  handleLogout: () => void
  handleIsLoginModalOpen: () => void
}

export const AuthButton = ({
  isAuthenticated,
  handleLogout,
  handleIsLoginModalOpen,
}: AuthButtonProps): JSX.Element => (
  <button
    className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
    onClick={isAuthenticated ? handleLogout : handleIsLoginModalOpen}
  >
    {isAuthenticated ? 'Logout' : 'Login'}
  </button>
)
