'use client'

import {signOut} from 'next-auth/react'

export default function LoginBtn(){
  return(
    <button className='text-white text-lg font-bold mx-5' onClick={()=>{signOut()}}>sign out</button>
  )
}