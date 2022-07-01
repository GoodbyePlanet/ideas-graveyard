import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div style={{ fontFamily: 'Typephace' }} className="flex justify-center">
        <div className="text-9xl font-black">
          <div>THE</div>
          <div>GRAVEYARD</div>
          <div>OF YOUR</div>
          <div>FAILED</div>
          <div>IDEAS</div>
        </div>
      </div>
      <p style={{ fontFamily: 'Typephace' }}>This is my first failed idea</p>
    </>
  )
}

export default HomePage
