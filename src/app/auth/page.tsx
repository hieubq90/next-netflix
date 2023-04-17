'use client'

import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

import { TextInput } from '~/components/common'

const Auth = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'))
  }, [])

  const login = useCallback(async () => {
    try {
      const ret = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      })
      if (ret && ret.ok) {
        router.push('/browse')
      }
    } catch (error) {
      console.log('Login Error', error)
    }
  }, [email, password, router])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      })
      login()
    } catch (error) {
      console.log('error', error)
    }
  }, [email, name, password, login])

  return (
    <div
      className="
        relative
        h-full
        w-full
        bg-[url('/imgs/hero.jpg')]
        bg-cover
        bg-fixed
        bg-center
        bg-no-repeat
      "
    >
      <div
        className="
          h-full
          w-full
          bg-black
          lg:bg-opacity-50
        "
      >
        {/* Navigation bar */}
        <nav className="px-12 py-5">
          <img
            src="/imgs/logo.png"
            alt="Logo"
            className="h-12"
          />
        </nav>
        <div className="flex justify-center">
          <div
            className="
              mt-2
              w-full
              self-center
              rounded-md
              bg-black
              bg-opacity-70
              px-16
              py-16
              lg:w-2/5
              lg:max-w-md
              "
          >
            <h2
              className="
              mb-8
              text-4xl
              font-semibold
              text-white
              "
            >
              {variant === 'login' ? 'Sign in' : 'Sign up'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant !== 'login' && (
                <TextInput
                  id="name"
                  value={name}
                  label="User's name"
                  onChange={(e: any) => setName(e.target.value)}
                  autoComplete="new-password"
                />
              )}
              <TextInput
                id="email"
                value={email}
                label="Email"
                type="email"
                onChange={(e: any) => setEmail(e.target.value.trim().toLowerCase())}
                autoComplete="new-password"
              />
              <TextInput
                id="password"
                value={password}
                label="Password"
                type="password"
                onChange={(e: any) => setPassword(e.target.value.trim())}
                autoComplete="new-password"
              />
            </div>
            <button
              onClick={variant === 'login' ? login : register}
              className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700"
            >
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>

            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80">
                <FcGoogle size={32} />
              </div>
              <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white transition hover:opacity-80">
                <FaFacebook
                  size={32}
                  color="#1B74E4"
                />
              </div>
            </div>

            <p className="mt-12 text-neutral-500">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account.'}
              <span
                className="ml-1 cursor-pointer font-semibold text-white hover:underline"
                onClick={toggleVariant}
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
