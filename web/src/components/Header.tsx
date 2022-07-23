import { ReactNode } from 'react'

interface HeaderProps {
  user: string
  children: ReactNode
}

export const Header = ({ user, children }: HeaderProps): JSX.Element => {
  const userName = user?.split('@')[0]

  return (
    <header>
      <div className="flex justify-end items-center h-14 border-b-2 border-gray-200">
        {user && (
          <p className="text-base mr-4">
            Welcome <span className="font-semibold">{userName}</span>
          </p>
        )}
        {children}
      </div>
    </header>
  )
}
