'use client'

import {useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation"

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userType, setUserType] = useState('TENANT');

    const router = useRouter(); 
    
    const register = async () => {
        const data = {email, password, confirmPassword,
            firstName, lastName, phoneNumber, userType}
        await fetch('http://localhost:4000/api/auth/register',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
             },
            body: JSON.stringify(data)
          })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return(
        <div>
            <title>Sign Up</title>

            <div className="bg-blue-950 grid lg:grid-cols-2 h-screen">  
                <div className='m-auto'>
                    <Image src="/spots.png" alt='logo'
                    width={735} height={691} priority/>
                </div>

                <div className="bg-white right flex flex-col justify-evenly"> 
                    <div className="text-center py-10 text-black"> 

                        <h1 className="text-xl font-bold mb-2">Registrasi Akun</h1>
                        <p>Isi data diri Anda!</p>

                        <form action='' method='' onSubmit={e =>{
                            e.preventDefault();
                            register();
                            router.push('/login');
                        }}>
                            <div>
                                <input type="text" placeholder="Nama Depan" required 
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}/>
                            </div>

                            <div>
                                <input type="text"  placeholder="Nama Belakang" required 
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}/>
                            </div>

                            <div>
                                <input type="email" placeholder="Alamat Email" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <input type="password" placeholder="Kata Sandi" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <div>
                                <input type="password" placeholder="Ulangi Kata Sandi" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>

                            <div>
                                <input type="text" placeholder="Nomor Telepon" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber (e.target.value)}/>
                            </div>

                            <div className='flex justify-evenly items-center'>
                                <p>Daftar Sebagai</p>
                                <select className="select select-bordered rounded-xl border-2 m-5 py-2 w-full max-w-xs text-center"
                                    required
                                    value={userType}
                                    onChange={(e) => setUserType(e.target.value)}>
                                    <option value="TENANT">Penyewa</option>
                                    <option value="OWNER">Penyedia</option>
                                </select>
                            </div>

                        <button type='submit' className="bg-blue-950 text-white rounded-2xl py-3 px-20 font-bold m-5">Daftar Akun</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;