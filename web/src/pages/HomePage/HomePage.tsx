import { MetaTags } from '@redwoodjs/web'

import { About } from 'src/components/About'
import { ScrollDownToGraveyard } from 'src/components/ScrollDownToGraveyard'

import './HomePage.css'

const HomePage = (): JSX.Element => {
  return (
    <main>
      <MetaTags title="Home" description="Home page" />
      <section className="h-screen flex flex-col justify-center">
        <div
          className="app-title-font flex justify-center"
        >
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
          <ScrollDownToGraveyard />
        </div>
      </section>
      <div className="text-center text-3xl">
        <section id="graveyard" className="h-screen bg-orange-600">
          <p>Graveyad page goes here...</p>
        </section>
      </div>
    </main>
  )
}

export default HomePage
