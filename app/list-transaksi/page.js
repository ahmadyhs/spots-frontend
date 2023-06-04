'use client'

import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';

const ListTransaksi = () => {
    const router = useRouter();

    const [token, setToken] = useState(null);
    const [transactionResult, setTransactionResult] = useState(null);

    const [isDataFetched, setIsDataFetched] = useState(false);
    
    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    }, [])

    useEffect(() => {  
        const getData = async () =>{
            const header = await {'Authorization': 'Bearer ' + token};
            const data = await fetch ('https://api.spotscoworking.live/bookings/history', {headers: header})
            const json = await data.json();

            setTransactionResult(json.bookings);

            setIsDataFetched(true);
        } 

        if(token){
            getData()
                .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                toast.error('Login terlebih dahulu!')
                router.push('/');
            });
        }
    },[token])

    const bookingCallback = (booking_id) => {
        const callback = async () =>{
            const header = await {'Authorization': 'Bearer ' + token};
            const data = await fetch ('https://api.spotscoworking.live/bookings?order_id=' + booking_id, 
                {headers: header})
            const json = await data.json();
            console.log(json)
        } 

        if(token){
            callback()
                .catch(error => {
                console.log('error', error);
                //localStorage.removeItem('spotsToken');
                toast.error('Konfirmasi gagal')
                router.refresh();
            });
        }
    }

    const blockColor = (status, booking_id) => {
        let color = 'bg-yellow-400';

        if(status === 'settlement'){
            color = 'bg-green-400';
            return (
                <div className={'rounded-full px-6 py-3 ' + color}>
                    {'Berhasil'}
                </div>
            )
        } else if(status === 'pending'){
            color = 'bg-orange-400';
            return (
                <div className={'rounded-full px-6 py-3 ' + color}>
                    {'Pending'}
                </div>
            )
        } else {
            return (
                <div className={'cursor-pointer rounded-full px-6 py-3 ' + color}
                    onClick={bookingCallback(booking_id)}
                >
                    {'Konfirmasi di sini'}
                </div>
            )
        }
    }

    return (
        <div className='bg-white'>
        <title>Riwayat Transaksi</title>
        <Toaster/>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
            <Navbar/>
        </div>

        <p className='text-center bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
            Daftar Transaksi</p>
        <div className='bg-white flex justify-center'>
            <table className='md:w-11/12 mb-10'>
                <thead>
                    <tr className='w-full text-center bg-[#17224D] font-bold'>
                        <th className='w-1/5'>Nomor Transaksi</th>
                        <th className='w-1/5'>Tanggal Transaksi</th>
                        <th className='w-1/5'>Nama Coworking Space</th>
                        <th className='w-1/5'>Harga</th>
                        <th className='w-1/5'>Status Trnsaksi</th>
                    </tr>
                </thead>
                <tbody className='font-semibold text-center text-xs md:text-base text-black bg-gray-300'>
                   {isDataFetched && transactionResult &&
                        transactionResult.map(transaction =>{
                           return(
                               <tr key={transaction.booking_id}>
                                <td className='px-2'>{transaction.booking_id}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.coworking_space.name}</td>
                                <td>
                                    {transaction.payment && 'Rp. '}
                                    {transaction.payment && transaction.payment.amount || 'belum dibayar'}
                                </td>
                                <td className='p-4'>
                                    {blockColor(transaction.payment && transaction.payment.status, transaction.booking_id)}
                                </td>
                            </tr>
                        )
                    })}
                        
                    {isDataFetched && (transactionResult.length === 0)  &&
                        <tr >
                            <td></td>
                            <td></td>
                            <td className='px-2'>
                                Anda belum pernah melakukan transaksi
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                     }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ListTransaksi