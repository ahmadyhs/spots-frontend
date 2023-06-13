'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const AdminPenyedia = () => {
    const router = useRouter();

    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token, 'Content-type': 'application/json'};
    
    const [ownersResult, setOwnersResult] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);
    
    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    }, [])

    useEffect(() => {  
        const getData = async () =>{
            const data = await fetch ('https://api.spotscoworking.live/admin/owners', {headers: header})
            const json = await data.json();
            const owners = json.owners;

            setOwnersResult(owners);
            setIsDataFetched(true);
        } 
        if(token && !ownersResult){
            getData()
            .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                router.push('/');
                toast.error('Anda belum login')
            });
        } 
    },[header])

    const approvePenyewa = (owner_id, approval) => {
        let status = {};

        if(approval === true){
            status = {"ownerStatus": "APPROVED"};
        } 
        else {
            status = {"ownerStatus": "REJECTED"};
        }

        const verify = async () =>{
            const data = await fetch ('https://api.spotscoworking.live/admin/owners/' + owner_id + '/verify', {
                method: 'PUT',
                headers: header,
                body: JSON.stringify(status)
            })
            const json = await data.json();
    
            location.reload();
            toast.success('Success');
        } 
    
        if(token){
            verify()
                .catch(error => {
                console.log('error', error);
                toast.error('Gagal');
            });
        }
    }

    const blockColor = (status, owner_id) => {
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
        } else {
            return (
                <>
                    <div className={'cursor-pointer text-center rounded-full px-6 py-3 bg-yellow-400'}
                        onClick={
                            e => {
                                e.preventDefault();
                                approvePenyewa(owner_id, true);
                            }
                        }
                        >
                        {'Approve'}
                    </div>

                    <div className={'cursor-pointer my-2 text-center rounded-full px-6 py-3 bg-red-400'}
                        onClick={
                            e => {
                                e.preventDefault();
                                approvePenyewa(owner_id, false);
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
            <div className='flex justify-center h-2/12'>
                <p className='mt-10 text-black font-semibold text-3xl'>DATA PENYEDIA</p>
            </div>

            <div className='justify-center h-8/12 block overflow-x-scroll'>
                <table className="mx-10 mt-10 w-11/12 h-fit"> 
                    <thead className='border-[#3C4158] border-2 flex w-full'>
                        <tr className="bg-[#3C4158] items-center text-center flex w-full">
                            <th className="p-2 w-10">ID</th>
                            <th className="p-2 w-20">Nama Depan</th>
                            <th className="p-2 w-20">Nama Belakang</th>
                            <th className="p-2 w-52">Email</th>
                            <th className="p-2 w-32">Nomor Telepon</th>
                            <th className="p-2 w-20">Bank</th>
                            <th className="p-2 w-28">Nomor Kartu</th>
                            <th className="p-2 w-40">NIK</th>
                            <th className="p-2 w-56">KTP</th>
                            <th className="p-2 w-40">Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-black border-[#3C4158] border-2 h-[67vh] flex flex-col overflow-y-scroll w-full'>
                        {isDataFetched && ownersResult &&
                            ownersResult.map(owners =>{
                            return(
                                <tr className='flex w-full' key={owners.owner_id}>
                                    <td className='p-2 w-10 border border-black'>{owners.owner_id}</td>
                                    <td className='p-2 w-20 overflow-auto border border-black'>{owners.user.first_name}</td>
                                    <td className='p-2 w-20 overflow-auto border border-black'>{owners.user.last_name}</td>
                                    <td className='p-2 w-52 overflow-auto border border-black'>{owners.user.email}</td>
                                    <td className='p-2 w-32 border border-black'>{owners.user.phone_number}</td>
                                    <td className='p-2 w-20 border border-black'>{owners.bank_name}</td>
                                    <td className='p-2 w-28 border border-black'>{owners.card_number}</td>
                                    <td className='p-2 w-40 border border-black'>{owners.nik}</td>
                                    <td className='p-2 w-56 border border-black'>
                                        {owners.ktp_picture &&
                                        <Image 
                                            alt="ktp"
                                            src={owners.ktp_picture}  
                                            width={200} 
                                            height={200} />   
                                        }
                                        {!owners.ktp_picture && <p>Belum upload foto</p>}
                                    </td>
                                    <td className='p-2 w-40 border grid items-center border-black'>
                                        {blockColor(owners.status, owners.owner_id)}
                                    </td>
                                </tr>
                            )
                        })}
                            
                        {isDataFetched  && !ownersResult && 
                            <tr className='flex w-screen'>
                                <td className='p-4 w-full'></td>
                            </tr>
                        }

                        {!isDataFetched  &&
                            <tr className='flex w-screen'>
                                <td className='p-4 w-full'></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default AdminPenyedia