interface ShovelProps {
  isAuthenticated: boolean
  onClick: () => void
}

export const Shovel = ({
  isAuthenticated,
  onClick,
}: ShovelProps): JSX.Element => {
  if (!isAuthenticated) {
    return null
  }

  return (
    <button onClick={onClick} className="shovelContainer">
      <img className="shovelImg" src="shovel.svg" alt="Shovel" />
    </button>
  )
}
