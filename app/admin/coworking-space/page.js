'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AdminCoworking = () => {
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

    const approveTempat = (space_id, approval) => {
        let status = {};

        if(approval === true){
            status = {"spaceStatus": "APPROVED"};
        } 
        else {
            status = {"spaceStatus": "REJECTED"};
        }

        const verify = async () =>{
            const data = await fetch ('https://api.spotscoworking.live/admin/coworking-space/' + space_id + '/verify', {
                method: 'PUT',
                headers: header,
                body: JSON.stringify(status)
            })
            const json = await data.json();
    
            location.reload();
            toast.success('Space Approved');
        } 
    
        if(token){
            verify()
                .catch(error => {
                console.log('error', error);
                toast.error('Gagal');
            });
        }
    }

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
        } else if (space_id === 0) {
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-red-400'}>
                    {'Tidak ada id!'}
                </div>
            )
        }  else {
            return (
                <>
                    <div className={'cursor-pointer my-2 text-center rounded-full px-6 py-3 bg-yellow-400'}
                        onClick={
                            e => {
                                e.preventDefault();
                                approveTempat(space_id, true);
                            }
                        }
                        >
                        {'Approve'}
                    </div>

                    <div className={'cursor-pointer my-2 text-center rounded-full px-6 py-3 bg-red-400'}
                        onClick={
                            e => {
                                e.preventDefault();
                                approveTempat(space_id, false);
                            }
                        }
                        >
                        {'Reject'}
                    </div>
                </>
            )
        }
    }

    return (
        <main className="lg:col-span-7 md:col-span-6 col-span-8 bg-white max-h-screen">
            <div className='flex justify-center h-1/12'>
                <p className='mt-10 text-black font-semibold text-center text-3xl'>DATA COWORKING SPACE</p>
            </div>

            <div className='justify-center h-11/12 block overflow-x-scroll'>
                <table className="mx-10 mt-10 w-11/12 h-fit"> 
                    <thead className='border-[#3C4158] border-2 h-1/6 flex w-full'>
                        <tr className="bg-[#3C4158] text-center items-center flex w-full">
                            <th className="p-2 xl:w-1/12 w-10">ID</th>
                            {/* <th className="p-2 w-1/12 border border-black">Owner ID</th> */}
                            <th className="p-2 xl:w-2/12 w-36">Nama</th>
                            <th className="p-2 xl:w-2/12 w-28">Harga Sewa</th>
                            <th className="p-2 xl:w-1/12 w-20">Kapasitas</th>
                            <th className="p-2 xl:w-1/12 w-36">Lokasi</th>
                            <th className="p-2 xl:w-3/12 w-60">Foto</th>
                            <th className="p-2 xl:w-2/12 w-40">Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-black border-[#3C4158] border-2 h-[70vh] flex flex-col items-center overflow-y-scroll w-full'>
                        {isDataFetched && spacesResult &&
                            spacesResult.map(spaces =>{
                            return(
                                <tr className='flex w-full' key={spaces.name}>
                                    <td className='p-2 xl:w-1/12 w-10 border border-black'>
                                        {spaces.location && spaces.location.space_id}
                                        {!spaces.location && <p></p>}    
                                    </td>
                                    <td className='p-2 xl:w-2/12 w-36 border border-black'>{spaces.name}</td>
                                    <td className='p-2 xl:w-2/12 w-28 border border-black'>Rp. {spaces.price}</td>
                                    <td className='p-2 xl:w-1/12 w-20 border border-black'>{spaces.capacity}</td>
                                    <td className='p-2 xl:w-1/12 w-36 border border-black'>
                                        {spaces.location && spaces.location.address}
                                        {!spaces.location && <p>Tidak dideskripsikan</p>}
                                    </td>
                                    <td className='p-2 xl:w-3/12 w-60 border border-black flex justify-center'>
                                        {spaces.coworking_space_images[0] &&
                                        <Image 
                                            alt="foto"
                                            src={spaces.coworking_space_images[0].image_url}  
                                            width={200} 
                                            height={200} />   
                                        }
                                        {!spaces.coworking_space_images[0] && <p>Belum upload foto</p>}
                                    </td>
                                    <td className='p-2 xl:w-2/12 w-40 border grid items-center border-black'>
                                        {spaces.location && blockColor(spaces.status, spaces.location.space_id)}
                                        {!spaces.location && blockColor(spaces.status, 0)}
                                    </td>
                                </tr>
                            )
                        })}
                            
                        {isDataFetched && !spacesResult  &&
                            <tr className='flex w-full'>
                                <td className='p-4 w-full'>
                                    Ambil data gagal!
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default AdminCoworking