'use client'

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Transaction = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [token, setToken] = useState(null);
  const authorization = "Bearer " + token;
  const header = {'Authorization': authorization, 'Content-type': 'application/json'};
  
  const props = {
    bookingId : searchParams.get('bookingId'),
    spaceName: searchParams.get('name'),
    date: searchParams.get('date'),
    startHour: searchParams.get('start'),
    endHour: searchParams.get('end'),
    bookDuration: searchParams.get('end') - searchParams.get('start'),
    spacePrice: searchParams.get('spacePrice'),
    totalPrice: (searchParams.get('end') - searchParams.get('start')) * searchParams.get('spacePrice')
  };
  
  const payment = () => {
    const data = {'bookingId': props.bookingId}
    
    const postPayment = async () =>{
      const res = await fetch ('https://api.spotscoworking.live/payments/booking',{
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
      })
      const intoJson = await res.json();
      const paymentInfo = intoJson.snapRes;
      const paymentURL = paymentInfo.redirect_url;
      
      router.push(paymentURL);
    }

    postPayment()
      .catch(error => {
        console.log('error', error);
        localStorage.removeItem('spotsToken');
        toast.error('Login terlebih dahulu')
        router.push('/');
      })
  }

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));
  }, [])

  return (
    <div className='bg-white'>
      <title>Transaksi</title>

      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
      </div>

      <form className='my-10'
        onSubmit={
          e => {
            e.preventDefault();
            payment();
          }
        }>
        <div className="bg-gray-200 grid w-11/12 m-auto rounded-xl border-dashed border-2 border-black lg:grid-cols-2 py-5 items-center">  
          <div className="px-10">
            <p className='text-black font-bold text-2xl my-6'>Detail Transaksi</p>
              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Nama Coworking Space</p>
                <p className='text-black font-semibold text-center w-1/6 text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>
                  {props.spaceName}
                </p>             
              </div>
              
              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg '>Tanggal</p>
                <p className='text-black font-semibold text-center w-1/6 text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>
                  {props.date}
                </p>             
              </div>

            <div className='flex justify-between my-3'>
              <p className='text-black font-semibold w-2/6 text-lg'>Waktu Sewa</p>
              <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
              <p id="" className='text-black font-semibold w-3/6 text-lg'>
                {props.startHour}:00 - {props.endHour}:00
              </p>             
            </div>

            <div className='flex justify-between my-3'>
              <p className='text-black font-semibold w-2/6 text-lg'>Lama Sewa</p>
              <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
              <p id="" className='text-black font-semibold w-3/6 text-lg'>
                {props.bookDuration} Jam
              </p>             
            </div>

            <div className='flex justify-between my-3'>
              <p className='text-black font-semibold w-2/6 text-lg'>Biaya Sewa</p>
              <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
              <p id="" className='text-black font-semibold w-3/6 text-lg'>
                Rp {props.spacePrice}
              </p>             
            </div>

            <hr className='border-black'></hr>
            <div className='flex justify-between my-3'>
              <p className='text-black font-semibold w-2/6 text-lg'>Total Pembayaran</p>
              <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
              <p id="" className='text-black font-semibold w-3/6 text-lg'>
                Rp {props.totalPrice}
              </p>             
            </div>    
          </div>

          <div className="right flex flex-col items-center">
            <div className='p-2 mt-10 '>
              <Image alt='room' src="/room.png"  width={500} height={500} />
            </div>
          </div>
        </div> 

        {token &&
        <div className='flex items-center first-line:'>
          <button type="submit" className="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
            px-20 py-3 m-auto mt-8 text-center">Bayar</button>

          <Link type="submit" className="block bg-white border border-blue-950 hover:bg-blue-400 text-blue-950 font-semibold rounded-full
            px-20 py-3 m-auto mt-5 text-center" 
            href='/eksplorasi'>
              Batal
          </Link>
        </div>
        }

      </form>
    </div>
  )
}

export default Transaction