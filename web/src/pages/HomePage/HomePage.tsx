import { MetaTags } from '@redwoodjs/web'

const About = (): JSX.Element => (
  <div
    style={{ fontFamily: 'Akkuratmono-Regular,monospace' }}
    className="mt-9 m-auto w-4/5 text-3xl"
  >
    <p style={{ fontFamily: 'Typephace' }} className="text-center text-4xl mb-4">Hi there</p>
    <p>
      Since you landed here I guess you have your own <b>IDEAS</b> that field, or you
      have side projects that failed and you haven&apos;t finished them.
      <br />
      Doesn&apos;t matter if you are developer or product manager or designer or
      director or engineering or whatever, if you have <b>IDEAS</b> that you failed to
      implement or they just didn&apos;t work <b>ADD</b> them here.
    </p>
  </div>
)

const HomePage = (): JSX.Element => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div style={{ fontFamily: 'Typephace' }} className="flex justify-center">
        <div className="text-9xl font-black">
          <div>THE</div>
          <div>GRAVEYARD</div>
          <div>OF YOUR FAILED</div>
          <div>IDEAS</div>
        </div>
      </div>
      <About />
    </>
  )
}

export default HomePage
