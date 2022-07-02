import { MetaTags } from '@redwoodjs/web'

const About = (): JSX.Element => (
  <div
    style={{
      fontSize: 'var(--fs-400)',
      fontFamily: 'Akkuratmono-Regular,monospace',
    }}
    className="mt-9 m-auto w-4/5 max-w-7xl"
  >
    <p
      style={{ fontSize: 'var(--fs-400)', fontFamily: 'Typephace' }}
      className="text-center mb-4"
    >
      Hi there
    </p>
    <p>
      Since you landed here I guess you have your own <b>IDEAS</b> that field,
      or you have side projects that failed and you haven&apos;t finished them.
      <br />
      Doesn&apos;t matter if you are developer or product manager or designer or
      director or engineering or whatever, if you have <b>IDEAS</b> that you
      failed to implement or they just didn&apos;t work <b>ADD</b> them here.
    </p>
  </div>
)

const ScrollDownToGraveyard = (): JSX.Element => (
  <a
    href="#graveyard"
    className="mt-10 transform transition duration-500 hover:scale-150"
  >
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      ></path>
    </svg>
  </a>
)

const HomePage = (): JSX.Element => {
  return (
    <main>
      <MetaTags title="Home" description="Home page" />
      <section className="h-screen flex flex-col justify-center">
        <div
          style={{ fontFamily: 'Typephace' }}
          className="flex justify-center"
        >
          <div style={{ fontSize: 'var(--fs-xl)' }} className="font-black">
            <div>THE</div>
            <div>GRAVEYARD</div>
            <div>OF YOUR FAILED</div>
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
