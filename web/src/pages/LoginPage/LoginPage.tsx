import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const LoginPage = () => {
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await logIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <div className="row flex flex-center">
        <div className="col-6 form-widget">
          <h1 className="header">Supabase + RedwoodJS</h1>
          <p className="description">Sign in via magic link with your email below</p>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleLogin(email)
              }}
              className={'button block'}
              disabled={loading}
            >
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </div>
      </div>


      {/*<h1>*/}
      {/*  Hello, we use passwordless login, so enter your email and you will get*/}
      {/*  magic link to get valid session*/}
      {/*</h1>*/}
      {/*<form>*/}
      {/*  <input*/}
      {/*    type="email"*/}
      {/*    placeholder="email address"*/}
      {/*    required*/}
      {/*    value={email}*/}
      {/*    onChange={(e) => setEmail(e.target.value)}*/}
      {/*  />*/}
      {/*</form>*/}
      {/*{!isAuthenticated && (*/}
      {/*  <button*/}
      {/*    className="text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded"*/}
      {/*    disabled={!email.length && !isAuthenticated}*/}
      {/*    onClick={handleSignup}*/}
      {/*  >*/}
      {/*    SignUp*/}
      {/*  </button>*/}
      {/*)}*/}
    </>
  )
}

export default LoginPage
