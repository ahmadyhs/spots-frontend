'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
//import { useContext } from 'react';
//import AuthContext from '../api/authContext';

const Profile = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const authorization = "Bearer " + token;
  const header = {'Authorization': authorization};

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [picture, setPicture] = useState('');

  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));
  }, [])

  useEffect(() => {  
    const getData = async () =>{
      const data = await fetch ('https://api.spotscoworking.live/tenants/profile', {headers: header})
      const json = await data.json();
      const user = json.tenant.user;

      setFirstName(user.first_name);
      setLastName(user.last_name);
      setPhoneNumber(user.phone_number);
      setEmail(user.email);
      setPicture(json.tenant.avatar_url);

      setIsDataFetched(true);
    } 
    if(token){
      getData()
        .catch(error => {
          console.log('error', error);
          localStorage.removeItem('spotsToken');
          router.push('/');
          toast.error('Anda belum login')
        });
    } 
  },[header])

  return  (
    <div className='bg-white'>
      <title>User Profile</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
      <Navbar/>
      </div>

      <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
        User Profile
      </p>
      
      { isDataFetched && 
      <div className="bg-teal-200 grid lg:grid-cols-3 my-10 py-20 items-center">
        <div className="right flex flex-col items-center">
          <div className='bg-slate-100 p-8 m-6 rounded-2xl'>
            <Image 
            alt='profile-picture' 
            className='rounded-xl'
            src={picture || "/person.png"}  
            width={200} height={200} />
          </div>
        </div>

        <div className="md:col-span-2 mx-8 p-6 bg-slate-100 rounded-xl">
          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-xl font-bold'>Nama Depan</p>
            <p className='w-full text-[#17224D] text-xl font-bold'>{firstName}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-xl font-bold'>Nama Belakang</p>
            <p className='w-full text-[#17224D] text-xl font-bold'>{lastName}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-xl font-bold'>Email</p>
            <p className='w-full text-[#17224D] text-xl font-bold'>{email}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-xl font-bold'>Nomor Telepon</p>
            <p className='w-full text-[#17224D] text-xl font-bold'>{phoneNumber}</p>
          </div>
          <div className='flex items-center'>
            <Link className=" bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-lg
              px-20 py-3 m-auto mt-10" 
              href='/profile/edit'>
                Edit
              </Link>
          </div>     
        </div>
      </div>  
      }
    </div>
  )
}

export default Profile