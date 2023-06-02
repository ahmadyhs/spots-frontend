'use client'

import Image from 'next/image'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthContext from "../api/authContext";

const Login = () => {
  const router = useRouter();
  const context = useContext(AuthContext)

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
      context.user = data.email;
      if (token.accessToken) {
        context.token = token.accessToken;
        console.log("Login Berhasil!");
        router.push('/');
    }
    })
    .catch(error => console.log('error', error));
  }

  return (
    <div className="h-screen">
      <title>Login</title>
      <div className="overflow-hidden bg-white grid lg:grid-cols-2 h-full">
        <div className="bg-white right flex h-fit justify-center flex-col text-center">
          <Image className="mx-auto scale-75" src="/spots-blue.png"
          width={575} height={477} alt='logo' priority/>

          <h2 className="text-black text-xl font-semibold text-center mb-10">Masuk ke akun Anda!</h2>
          
          <form action="" method=""
              onSubmit={ e => {
                e.preventDefault();
                login();
              }
            }>
            <div>
              <input type='text' placeholder="Email Anda" 
              className="border rounded-xl w-11/12 py-2 text-center text-black m-3" required
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div className="mt-4">
              <input type='password' placeholder="Password Anda"
              className="border rounded-xl w-11/12 py-2 text-center text-black m-3" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            {/* <div class="flex justify-between mx-10">
            
              <a href="" class="text-right font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Lupa Password?</a>
            </div> */}

            <div className='flex justify-between mx-20 mb-10'>
              <button type="submit" className="block bg-blue-950 border hover:bg-blue-400 text-white font-semibold rounded-lg
                    px-20 py-3 mt-6">
                Masuk
              </button>        
              <a className="block bg-gray-100 border hover:bg-blue-400 text-blue-950 font-semibold rounded-lg
                    px-20 py-3 mt-6"
                    href='/signup'>  
                  Daftar
              </a>   
            </div>
          </form>
        </div>

        <div className="">
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