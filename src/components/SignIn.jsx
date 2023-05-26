import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='flex justify-center w-screen'>
      <form className='flex flex-col gap-4 w-80'>
          <label>Email</label>
          <input type='email' className='p-2 rounded-sm' required />
          <label>Senha</label>
          <input type='password' className='p-2 rounded-sm' required />
        <input
          type='submit'
          value='Login'
          className='bg-blue-700 p-2 rounded-sm cursor-pointer'
        />
        <Link to='/signup'>Cadastre-se</Link>
      </form>
    </div>
  )
}
