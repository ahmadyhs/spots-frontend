'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useState } from "react";
import AuthContext from "../api/authContext";

const UserButton = () => {
  const router = useRouter();
  const context = useContext(AuthContext);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback( () => {
    setIsOpen((value) => (!value));
  }, [])

  const logout = () => {
    context.user = null;
    setIsOpen((value) => (!value));
    router.push('/');
  }

  const profile = () => {
    router.push('/profile');
  }

  return ( 
    <div className='hidden w-full lg:inline-flex lg:flex-row lg:w-auto'>
        <div className='lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col justify-center lg:h-auto'>
            {!context.user && 
              <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#19224E] font-bold justify-center bg-[#FFFFFF] hover:bg-green-600 hover:text-white' href='/login'>
                Login 
              </Link>}
            {context.user && 
              <Image className="bg-white rounded-full p-1" src={"/person.png"} width={40} height={40} alt="user"
              onClick={toggleOpen}/>}
        </div>
        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-1/12 min-w-1/12 bg-white overflow-hidden right-4 top-16 text-sm
          "> 
            <div className="flex flex-col cursor-pointer">
              <div className="text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                onClick={profile}>
                Profile
              </div>
              <div className="text-black px-4 py-3 hover:bg-neutral-100 transition font-semibold"
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