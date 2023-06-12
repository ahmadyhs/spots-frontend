'use client'

import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

const ListTransaksi = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [token, setToken] = useState(null);
    
    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
        if(searchParams.get('order_id')) {
        } else {
            router.push('/');
        }
    }, [])

    useEffect(() => {  
        if(token){
            if(searchParams.get('order_id')) bookingCallback(searchParams.get('order_id'));
        }
    },[token])

    const bookingCallback = (booking_id) => {
        const callbackDetail = async () =>{
            const header = await {'Authorization': 'Bearer ' + token};
            const data = await fetch ('https://api.spotscoworking.live/bookings?order_id=' + booking_id, 
                {headers: header})
            const json = await data.json();
            console.log(json);

            router.push('/list-transaksi');
            toast.success('Transaksi berhasil');
        } 

        if(token){
            callbackDetail()
                .catch(error => {
                console.log('error', error);
                //localStorage.removeItem('spotsToken');
                toast.error('Konfirmasi gagal');
                router.push('/');
            });
        } else router.push('/');
    }

    return (
        <div className='bg-white'>
            <title>Booking Callback</title>

            <div className='p-10 text-center text-black'>Konfirmasi Pembayaran...</div>
        
        </div>
    )
}

export default ListTransaksi