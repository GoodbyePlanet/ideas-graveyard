interface HeaderProps {
  onClick: () => void
}

export const Header = ({ onClick }: HeaderProps): JSX.Element => (
  <header>
    <div className="flex justify-end items-center h-14 border-b-2 border-gray-200">
      <button
        className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"
        onClick={onClick}
      >
        Login
      </button>
    </div>
  </header>
)
