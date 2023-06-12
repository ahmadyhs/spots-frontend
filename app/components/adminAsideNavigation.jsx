'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { BiAlignRight } from 'react-icons/bi'
import { useMediaQuery } from "react-responsive"

const Aside = () => {
  const router = useRouter();
  //const path = usePathname();
  const [token, setToken] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isNotPhone = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));
  },[])

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
    router.push('/');
    toast('Logout berhasil');
  }

  return ( 
    <aside className="lg:col-span-1 md:col-span-2 col-span-8 bg-[#17224D] md:h-screen md:grid block w-full place-content-between">
      {!isNotPhone &&
        <div className="md:flex block w-full bg-[#17224D] relative h-12">
          <Image 
            className="absolute top-3 left-3"
            alt='logo' 
            src="/SPOTS-white-icon.svg"  
            width={25} height={25} />
          <BiAlignRight 
            className="absolute top-4 right-4 border-white border-2 scale-150 bg-[#17224D]"
            onClick={toggleOpen}/>
        </div>
      }

      {(isOpen || isNotPhone) &&
        <>
        <div>
            <div className="right flex flex-col items-center">
                <div className="right flex flex-col items-center mt-10">
                    <Image 
                      alt='logo' 
                      src="/spots.png"  
                      width={200} height={200} />
                </div> 
            </div>
            <p className='text-center m-5 text-3xl mb-10'>Admin</p>
            <Link className="block bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500"
              href='/admin/penyewa'>
              Data Penyewa
            </Link>
            <Link className="block bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500"
              href='/admin/penyedia'>
              Data Penyedia
            </Link>
            <Link className="block bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500"
              href='/admin/coworking-space'>
              Data Coworking
            </Link>
        </div>

        <div className='mb-10'>
            <div className='flex md:flex-col justify-center items-center'>
                <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500"
                  onClick={
                    e => {
                      e.preventDefault();
                      logout();
                    }
                  }>← Keluar</button>
            </div>
        </div>
        </>
      }
    </aside>
   );
}
 
export default Aside