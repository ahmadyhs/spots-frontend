'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import getProfile from "../api/getTenantProfile";

const UserButton = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [picture, setPicture] = useState('/blank.png');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));
  },[])

  useEffect(() => {
    const getPicture = async () => {
      const tenant = await getProfile(token);
      if(tenant) setPicture(tenant.avatar_url)
    }

    if(token) getPicture();
  },[token])

  const toggleOpen = useCallback( () => {
    setIsOpen((value) => (!value));
  }, [])

  const logout = async () => {
    const header = await {'Authorization': 'Bearer ' + token, 'Content-type': 'application/json'};
    await fetch('https://api.spotscoworking.live/auth/logout',{
      method: 'DELETE',
      headers: header
    })
    .then(response => response.text())
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log('error', error);
      toast.error('Token expire');
    });

    localStorage.removeItem('spotsToken');
    setToken(null);
    setIsOpen((value) => (!value));
    router.push('/');
    toast('Logout berhasil');
  }

  const profile = () => {
    router.push('/profile');
  }

  return ( 
    <div className='inline-flex'>
      <div className='lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col justify-center lg:h-auto'>
        
          {token && 
          <Image className="bg-white rounded-full p-1 cursor-pointer" src={picture} width={40} height={40} alt="user"
          onClick={toggleOpen}/>}
            
          {!token && 
          <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#19224E] font-bold justify-center bg-[#FFFFFF] hover:bg-green-600 hover:text-white' href='/login'>
            Login 
          </Link>}
        
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-fit bg-white overflow-hidden right-4 top-16 text-sm
        "> 
          <div className="flex flex-col cursor-pointer">
            <div 
              className="text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              onClick={profile}>
              Profile
            </div>
            <Link 
              className="text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              href='/list-transaksi'>
              Transaksi Anda
            </Link>
            <div 
              className="text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              onClick={logout}>
              Logout
            </div>
          </div>
        </div>
      )}

    </div>
   );
}
 
export default UserButton;