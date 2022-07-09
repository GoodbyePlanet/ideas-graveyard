import { Link, routes } from '@redwoodjs/router'

export const GoToGraveyard = (): JSX.Element => (
  <button className="mt-5 mb-5 hover:bg-black text-black hover:text-white py-2 px-4 border rounded">
    <Link to={routes.graveyard()}>Graveyard</Link>
  </button>
)
