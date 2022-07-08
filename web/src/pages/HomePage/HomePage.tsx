import { MetaTags } from '@redwoodjs/web'

import { About } from 'src/components/About'

import './HomePage.css'

const HomePage = (): JSX.Element => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="h-screen flex flex-col justify-center">
        <div className="app-title-font flex justify-center min-h-0 overflow-auto">
          <div className="app-title-text font-black">
            <div>THE</div>
            <div>GRAVEYARD</div>
            <div>
              OF ALL <span className="failed-color">FAILED</span>
            </div>
            <div>IDEAS</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <About />
        </div>
      </div>
    </>
  )
}

export default HomePage
