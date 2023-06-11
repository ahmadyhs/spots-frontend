'use client'

import { useEffect, useState } from 'react';

const AdminPenyewa = () => {
    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token};
    
    const [tenantsResult, setTenantsResult] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);
    
    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    }, [])

    useEffect(() => {  
        const getData = async () =>{
            const data = await fetch (' https://api.spotscoworking.live/admin/tenants', {headers: header})
            const json = await data.json();
            const tenants = json.tenants;

            setTenantsResult(tenants);
            setIsDataFetched(true);
        } 
        if(token && !tenantsResult){
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
        <main className="col-span-7 bg-white max-h-screen">
            <div className='flex justify-center h-2/12'>
                <p className='mt-10 text-black font-semibold text-3xl'>DATA PENYEWA</p>
            </div>

            <div className='justify-center h-10/12 block overflow-x-scroll'>
                <table className="m-10 w-11/12 h-fit"> 
                    <thead className='border-[#3C4158] border-2 flex w-full'>
                        <tr className="bg-[#3C4158] items-center text-center flex w-full">
                            <th className="p-2 w-1/12 ">ID</th>
                            <th className="p-2 w-2/12 ">Nama Depan</th>
                            <th className="p-2 w-2/12 ">Nama Belakang</th>
                            <th className="p-2 w-4/12 ">Email</th>
                            <th className="p-2 w-3/12 ">Nomor Telepon</th>
                        </tr>
                    </thead>

                    <tbody className='text-black border-[#3C4158] border-2 h-[70vh] flex flex-col items-center overflow-y-scroll w-full'>
                        {isDataFetched && tenantsResult &&
                            tenantsResult.map(tenants =>{
                            return(
                                <tr className='flex w-full' key={tenants.tenant_id}>
                                    <td className='p-4 w-1/12 border text-center border-black'>{tenants.tenant_id}</td>
                                    <td className='p-4 w-2/12 border border-black'>{tenants.user.first_name}</td>
                                    <td className='p-4 w-2/12 border border-black'>{tenants.user.last_name}</td>
                                    <td className='p-4 w-4/12 border border-black'>{tenants.user.email}</td>
                                    <td className='p-4 w-3/12 border border-black'>{tenants.user.phone_number}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default AdminPenyewa