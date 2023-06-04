'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'react-hot-toast'
import { FaWindowClose } from 'react-icons/fa'

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  const login = async () => {
    const data = {email, password}
    await fetch('https://api.spotscoworking.live/auth/login',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: JSON.stringify(data)
      })
    .then(response => response.text())
    .then(result => {
      const token= JSON.parse(result);
      if (token.accessToken) {
        localStorage.setItem('spotsToken', token.accessToken);
        router.push('/');
        toast.success('Login berhasil');
    }
    })
    .catch(error => {
      console.log('error', error)
      toast.error('Akun atau password salah')
    });
  }

  return (
    <div className="h-screen">
      <title>Login</title>
      <Toaster/>
      <FaWindowClose 
        className='bg-blue-950 absolute top-4 left-4 w-5 h-5 cursor-pointer'
        onClick={
          e => {
            e.preventDefault();
            router.push('/');
          }
        }/>
      <div className=" bg-white grid lg:grid-cols-2 h-screen">
        <div className="bg-white right flex h-screen justify-center flex-col text-center">
          <Image className="mx-auto my-0" src="/spots-blue.png"
          width={424} height={350} alt='logo' priority/>

          <h2 className="text-black text-xl font-semibold text-center mb-10">Masuk ke akun Anda!</h2>
          
          <form action="" method=""
              onSubmit={ e => {
                e.preventDefault();
                login();
              }
            }>
            <div>
              <input type='text' placeholder="Email Anda" 
              className="border rounded-xl w-11/12 py-2 text-center text-black mx-3 my-1" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="mt-4">
              <input type='password' placeholder="Password Anda"
              className="border rounded-xl w-11/12 py-2 text-center text-black mx-3 my-1" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <div className='flex justify-between mx-20 mb-10'>
              <button type="submit" className="block bg-blue-950 border hover:bg-blue-400 text-white font-semibold rounded-lg
                    xl:px-20 px-12 py-3 mt-6">
                Masuk
              </button>        
              <a className="block bg-gray-100 border hover:bg-blue-400 text-blue-950 font-semibold rounded-lg
                    xl:px-20 px-12 py-3 mt-6"
                    href='/signup'>  
                  Daftar
              </a>   
            </div>
          </form>
        </div>

        <div className="md:visible invisible">
          <Image
          className="h-full w-full"
          src="/login.png"
          width={770} height={1024} alt='cowork' priority/>           
        </div>
      </div>
    </div>
  )
}

export default Login;