'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const TransactionList = () => {
    const router = useRouter();

    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token, 'Content-type': 'application/json'};
    
    const [transactionResult, setTransactionResult] = useState(null);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    }, [])

    useEffect(() => {  
        const getData = async () =>{
            const result = await fetch ('https://api.spotscoworking.live/bookings/history', {headers: header})
            const json = await result.json();
            const booking = await json.bookings;

            setTransactionResult(booking);
            setIsDataFetched(true);
        } 
        if(token && !transactionResult){
            getData()
            .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                router.push('/');
                toast.error('Anda belum login')
            });
        } 
    },[header])

    const blockColor = (status) => {
        if(status === 'settlement'){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-green-400'}>
                    {'Approved'}
                </div>
            )
        } else if(status === 'expire'){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-red-400'}>
                    {'Expire'}
                </div>
            )
        } else if(status === null){
            return (
                <div className={'rounded-full text-center px-6 py-3 bg-red-400'}>
                    {'Belum bayar'}
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
                            <th className="p-2 w-40">ID</th>
                            <th className="p-2 w-36">Nama Space</th>
                            <th className="p-2 w-28">Tanggal</th>
                            <th className="p-2 w-28">Jumlah Pembayaran</th>
                            <th className="p-2 w-28">Metode Pembayaran</th>
                            <th className="p-2 w-32">Status</th>
                        </tr>
                    </thead>

                    <tbody className='text-black border-[#3C4158] border-2 h-[70vh] flex flex-col items-center overflow-y-scroll w-full'>
                        {isDataFetched && !transactionResult  &&
                            <tr className='flex w-full'>
                                <td className='p-4 w-full'>
                                    Ambil data gagal!
                                </td>
                            </tr>
                        }

                        {isDataFetched && transactionResult.length === 0  &&
                            <tr className='flex w-full'>
                                <td className='p-4 w-full text-center'>
                                    Belum ada transaksi tercatat
                                </td>
                            </tr>
                        }

                        {isDataFetched && transactionResult.length !== 0 &&
                            transactionResult.map(transaction =>{
                            return(
                                <tr className='flex w-full' key={transaction.booking_id}>
                                    <td className='p-2 w-40 border border-black'>
                                        {transaction.booking_id}
                                    </td>
                                    
                                    <td className='p-2 w-36 border border-black'>
                                        {transaction.coworking_space.name}
                                    </td>
                                    
                                    <td className='p-2 w-28 border border-black'>
                                        {transaction.date}
                                    </td>
                                    
                                    <td className='p-2 w-28 border border-black'>
                                        {transaction.payment && 'Rp. ' + transaction.payment.amount}
                                        {!transaction.payment && <p>Belum dibayar</p>}
                                    </td>
                                    
                                    <td className='p-2 w-28 border border-black'>
                                        {transaction.payment && transaction.payment.method}
                                        {!transaction.payment && <p>Belum dibayar</p>}
                                    </td>

                                    <td className='p-2 w-32 border flex justify-center items-center border-black'>
                                        {transaction.payment && blockColor(transaction.payment.status)}
                                        {!transaction.payment && blockColor(null)}
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

export default TransactionList