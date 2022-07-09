import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GraveyardPage = () => {
  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <h1>GraveyardPage</h1>
      <p>
        Find me in <code>./web/src/pages/GraveyardPage/GraveyardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>graveyard</code>, link to me with `
        <Link to={routes.graveyard()}>Graveyard</Link>`
      </p>
    </>
  )
}

export default GraveyardPage
