'use client'

import {signIn} from 'next-auth/react'

export default function LoginBtn(){
  return(
    <button className='text-white text-lg font-bold mx-5' onClick={()=>{signIn()}}>sign in</button>
  )
}