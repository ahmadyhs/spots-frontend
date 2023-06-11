'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const OwnerCoworking = () => {
    const router = useRouter();

    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token, 'Content-type': 'application/json'};
    
    const [spacesResult, setSpacesResult] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);
    
    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    }, [])

    useEffect(() => {  
        const getData = async () =>{
            const spaces = [];
            for(let i = 1; i<6; i++){
                const result = await fetch ('https://api.spotscoworking.live/coworking-spaces?page=' + i, {headers: header})
                const json = await result.json();
                const data = await json.coworkingSpaces;

                if(data.length === 0) break;

                for(let j = 0; ; j++){
                    if(data[j]) spaces.push(data[j]);
                    else break;
                }
            }
            setSpacesResult(spaces);
            setIsDataFetched(true);
        } 
        if(token && !spacesResult){
            getData()
            .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                router.push('/');
                toast.error('Anda belum login')
            });
        } 
    },[header])

    const blockColor = (status, space_id) => {
        if(status === 'APPROVED'){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-green-400'}>
                    {'Approved'}
                </div>
            )
        } else if(status === 'REJECTED'){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-red-400'}>
                    {'Rejected'}
                </div>
            )
        } else if(status === null){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-red-400'}>
                    {'Data Tidak Lengkap!'}
                </div>
            )
        } else {
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-yellow-400'}>
                    {'Pending'}
                </div>
            )
        }  
    }

    return (
        <main className="col-span-7 bg-white max-h-screen">
            <div className='flex justify-center h-1/12'>
                <p className='mt-10 text-black font-semibold text-3xl'>DATA COWORKING SPACE</p>
            </div>

            <div className='justify-center h-11/12 block overflow-x-scroll'>
                <table className="m-10 w-11/12 h-fit"> 
                    <thead className='border-[#3C4158] border-2 h-1/6 flex w-full'>
                        <tr className="bg-[#3C4158] text-center items-center flex w-full">
                            <th className="p-2 w-10">ID</th>
                            {/* <th className="p-2 w-1/12 border border-black">Owner ID</th> */}
                            <th className="p-2 w-36">Nama</th>
                            <th className="p-2 w-20">Harga Sewa</th>
                            <th className="p-2 w-10">Kapasitas</th>
                            <th className="p-2 w-36">Lokasi</th>
                            <th className="p-2 w-60">Foto</th>
                            <th className="p-2 w-40">Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-black border-[#3C4158] border-2 h-[70vh] flex flex-col items-center overflow-y-scroll w-full'>
                        {isDataFetched && !spacesResult  &&
                            <tr className='flex w-full'>
                                <td className='p-4 w-full'>
                                    Ambil data gagal!
                                </td>
                            </tr>
                        }

                        {isDataFetched && spacesResult.length === 0  &&
                            <tr className='flex w-full'>
                                <td className='p-4 w-full text-center'>
                                    Anda Belum Mendaftarkan Tempat Anda
                                </td>
                            </tr>
                        }

                        {isDataFetched && spacesResult.length !== 0 &&
                            spacesResult.map(spaces =>{
                            return(
                                <tr className='flex w-full' key={spaces.name}>
                                    <td className='p-2 w-10 border border-black'>
                                        {spaces.location && spaces.location.space_id}
                                        {!spaces.location && <p></p>}    
                                    </td>
                                    
                                    <td className='p-2 w-36 border border-black'>{spaces.name}</td>
                                    
                                    <td className='p-2 w-20 border border-black'>{spaces.price}</td>
                                    
                                    <td className='p-2 w-20 border border-black'>{spaces.capacity}</td>
                                    
                                    <td className='p-2 w-36 border border-black'>
                                        {spaces.location && spaces.location.address}
                                        {!spaces.location && <p>Tidak dideskripsikan</p>}
                                    </td>

                                    <td className='p-2 w-60 border border-black flex justify-center'>
                                        {spaces.coworking_space_images[0] &&
                                        <Image 
                                            alt="foto"
                                            src={spaces.coworking_space_images[0].image_url}  
                                            width={200} 
                                            height={200} />   
                                        }
                                        {!spaces.coworking_space_images[0] && <p>Belum upload foto</p>}
                                    </td>

                                    <td className='p-2 w-40 border flex justify-center items-center border-black'>
                                        {spaces.location && blockColor(spaces.status, spaces.location.space_id)}
                                        {!spaces.location && blockColor(null, 0)}
                                    </td>

                                    <td className='p-2 w-40 text-white flex justify-center items-center border border-black'>
                                        {spaces.location &&
                                        <Link className={'rounded-full text-center h-fit px-10 py-3 bg-[#17224D]'}
                                            href={'/owner/edit/' + spaces.location.space_id}>
                                            Edit
                                        </Link>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                            
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default OwnerCoworking