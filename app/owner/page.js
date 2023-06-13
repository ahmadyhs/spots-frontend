'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Owner = () => {
    const router = useRouter();

    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token};

    const [profile, setProfile] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);
  
    useEffect(() => {
      setToken(localStorage.getItem('spotsToken'));
    }, [])
  
    useEffect(() => {  
      const getData = async () =>{
        const data = await fetch ('https://api.spotscoworking.live/owners/info', {headers: header})
        const json = await data.json();
        const owner = json.owner;
  
        setProfile(owner);
        setIsDataFetched(true);
      } 
      if(token && !profile){
        getData()
          .catch(error => {
            console.log('error', error);
            localStorage.removeItem('spotsToken');
            router.push('/');
            toast.error('Anda belum login')
          });
      } 
    },[header])

    return (
        <main className="md:col-span-6 col-span-8 bg-white max-h-screen">
            <div className='h-screen overflow-auto'>
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA OWNER</p>
                </div>

                {isDataFetched && profile &&
                <div className='border-dashed border-2 border-black p-4 mx-10 mb-4 rounded-xl'>
                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nama Depan</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2"> 
                                {profile.user.first_name}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nama Belakang</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.last_name}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-10/12 flex text-xl text-black  justify-center items-center'>
                            <p className='w-4/12'>Email</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.email}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nomor Telepon</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.phone_number}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>NIK</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.nik && profile.nik}
                                {!profile.nik && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Bank</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.bank_name && profile.bank_name}
                                {!profile.bank_name && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nomor Kartu</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.card_number && profile.card_number}
                                {!profile.card_number && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Balance</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                Rp. {profile.balance}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>KTP</p>
                            :
                            <div className="flex justify-center rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.ktp_picture &&
                                    <Image
                                    alt='ktp'
                                    src={profile.ktp_picture}
                                    height={300}
                                    width={300}/>
                                }
                                {!profile.ktp_picture && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Status</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.status}
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>    
        </main>
    )
}

export default Owner