'use client'

import { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

const Edit = () => {
  const router = useRouter();
  
  const [token, setToken] = useState(null);
  const authorization = "Bearer " + token;
  const header = {'Authorization': authorization};

  const [image, setImage] = useState(null);
  const [firstName, SetFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [noTel, setNoTel] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));
  },[])

  //useEffect(() => {
  const update = () => {
    const formData = new FormData();
    
    if(image !== null) formData.append('avatarURL', image);
    if(firstName !== '') formData.append('firstName', firstName);
    if(lastName !== '') formData.append('lastName', lastName);
    if(email !== '') formData.append('email', email);
    if(noTel !== '') formData.append('phoneNumber', noTel);
    
    const getData = async () => {
      await fetch ('https://api.spotscoworking.live/tenants/profile', {
        method: 'PUT',
        headers: header,
        body: formData
      })
      
      router.push('/profile');
      toast.success('Update berhasil');
    }

    getData()
    .catch(error => {
      console.log('error', error);
      localStorage.removeItem('spotsToken');
      router.push('/');
    })
  }
  //}, [header])

  // const postData = async () =>{

  //   await fetch ('https://api.spotscoworking.live/tenants/profile', {
  //     method: 'PUT',
  //     headers: header,
  //     body: formData
  //   })
  //   .then(response => response.text())
  //   .then(result => {
  //       router.push('/profile');
  //       toast.success('Update berhasil');
  //   })
  //   .catch(error => {
  //     console.log('error', error);
  //     localStorage.removeItem('spotsToken');
  //     router.push('/');
  //   });
  // }

  return (
    <div className='bg-white'>
      <title>Edit Profile</title>
      <Toaster/>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
      <Navbar/>
      </div>

      <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
        Edit Profile
      </p>
      

      <div className="bg-teal-200 grid py-20 items-center">

        <div className="px-20">
          <form action="" method="" 
            onSubmit={
              e => {
              e.preventDefault();
              update();
              }
            }>
            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nama Depan</p>
              <input 
                type="text" 
                id="namaDepan" 
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" 
                value={firstName}
                onChange={(e) => SetFirstName(e.target.value)}
              ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nama Belakang</p>
              <input 
                type="text" 
                id="namaBelakang"  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Email</p>
              <input 
                type="email" 
                id="email"  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nomor Telepon</p>
              <input 
                type="number" 
                id="noTel"  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10
                  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                value={noTel}
                onChange={(e) => setNoTel(e.target.value)}  
              ></input>
            </div>
            
            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Foto</p>
              <div className='rounded-xl bg-slate-400 h-20 w-8/12 border-dashed border-2 m-5'>
                <input 
                  type="file" 
                  id="file" 
                  accept='image/*'
                  className="p-6 h-full w-full"
                  onChange={(e) => setImage(e.target.files[0])}
                  />
              </div>
            </div>
            
            <div className='flex justify-center'>
              <button type="submit" className="block bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-lg
                  px-20 py-3 m-auto mt-10">
                Submit
              </button>
              <a className="block bg-white border border-teal-200 hover:bg-blue-400 text-blue-950 font-semibold rounded-lg
                  px-20 py-3 m-auto mt-10" href='/profile'>
                Kembali
              </a>
            </div>
                                  
          </form>        
        </div>
      </div>  
    </div>
  )
}

export default Edit