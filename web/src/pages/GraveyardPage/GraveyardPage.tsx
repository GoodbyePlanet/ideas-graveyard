import { MetaTags } from '@redwoodjs/web'

const GraveyardPage = () => {
  return (
    <>
      <MetaTags title="Graveyard" description="Graveyard page" />

      <header>
        <div className="flex justify-end items-center h-14 border-b-2 border-gray-200">
          <button className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded">
            Login
          </button>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '500px',
              margin: '2rem',
            }}
          >
            <img
              style={{ width: '8rem', height: '8rem' }}
              src="rip.png"
              alt="as"
            />
            <p
              style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: 600 }}
            >
              Failed idea
            </p>
            <p
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                fontSize: '1.2rem',
              }}
            >
              This is my first failed idea. I started very entustiastic but
              ended not even finishig it.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '500px',
              margin: '2rem',
            }}
          >
            <img
              style={{ width: '8rem', height: '8rem' }}
              src="rip.png"
              alt="as"
            />
            <p
              style={{ marginTop: '1rem', fontSize: '1.5rem', fontWeight: 600 }}
            >
              Failed idea
            </p>
            <p
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                fontSize: '1.2rem',
              }}
            >
              This is my first failed idea. I started very entustiastic but
              ended not even finishig it.
            </p>
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            right: 0,
            border: '1px solid #512b2b',
            marginRight: '-2rem',
            borderRadius: '50%',
            background: 'white',
            cursor: "pointer",
          }}
        >
          <img
            style={{
              height: '5rem',
              width: '5rem',
              paddingTop: '10px',
              paddingBottom: '10px',
              paddingRight: '15px',
            }}
            src="shovel.svg"
            alt="Shovel"
          />
        </div>
      </header>
    </>
  )
}

export default GraveyardPage
