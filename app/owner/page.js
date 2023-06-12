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
            <div>
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA OWNER</p>
                </div>

                {isDataFetched && profile &&
                <>
                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nama Depan</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2"> 
                                {profile.user.first_name}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nama Belakang</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.last_name}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-8/12 flex text-xl text-black  justify-center items-center'>
                            <p className='w-4/12'>Email</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.email}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nomor Telepon</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.user.phone_number}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>NIK</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.nik && profile.nik}
                                {!profile.nik && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Bank</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.bank_name && profile.bank_name}
                                {!profile.bank_name && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Nomor Kartu</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.card_number && profile.card_number}
                                {!profile.card_number && <>Anda Belum Update Datadiri!</>}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Balance</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                Rp. {profile.balance}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
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
                        <div className='w-8/12 text-xl text-black flex justify-center items-center'>
                            <p className='w-4/12'>Status</p>
                            :
                            <div className="rounded-xl w-8/12 py-2 text-center m-2">
                                {profile.status}
                            </div>
                        </div>
                    </div>
                </>
                }
            </div>    

                {/* <div className='bg-white flex justify-center my-5'>
                <table className='w-11/12'>
                        <thead>
                        <tr className='w-full text-center bg-[#17224D] font-bold'>
                                <th className='w-2/6'>Nama Coworking Space</th>
                                <th className='w-2/6'>ID Coworking Space</th>
                                <th className='w-2/6'>Dashboard</th>
                                </tr>
                                </thead>
                                <tbody className='font-semibold text-center text-black bg-gray-300'>
                                <tr className=''>
                                <td>RuangMeeting.id</td>
                        <td>2001</td>
                        <td className='p-4'>
                        <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                        </td>
                        </tr>
                        <tr className=''>
                        <td>Cowork</td>
                        <td>2002</td>
                        <td className='p-4'>
                        <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                        </td>
                            </tr>
                            <tr className=''>
                            <td>Xwork</td>
                            <td>2003</td>
                            <td className='p-4'>
                                    <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                </div> */}
        </main>
    )
}

export default Owner