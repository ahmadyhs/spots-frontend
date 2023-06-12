'use client'

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Booking = (
  params
) => {
  const router = useRouter();
  const id = params.params.spaceId; 

  const [token, setToken] = useState(null);
  const header = {'Authorization': 'Bearer ' + token, 'Content-type': 'application/json'};

  const [isDataFetched, setIsDataFetched] = useState(false);

  const [space, setSpace] = useState(null);
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('spotsToken'));

    const getData = async () => {
      const data = await fetch ('https://api.spotscoworking.live/coworking-spaces/' + id)
      const json = await data.json();

      setSpace(json.coworkingSpace);
      setIsDataFetched(true);
    }

    getData()
      .catch(error => {
        console.log('error', error);
      })
  },[])

  const checkout = () => {
    if(endHour-startHour < 1) {
      setStartHour('');
      setEndHour('');
      document.getElementById("startHour").value = '';
      document.getElementById("endHour").value = '';

      toast.error('Lama sewa tidak sesuai!');
    } else submitBooking();
  }

  const submitBooking = () => {
    const totalPrice = space.price * (endHour - startHour);
    const data = {date, startHour, endHour, totalPrice};

    const postBooking = async () =>{
      const res = await fetch ('https://api.spotscoworking.live/bookings/' + id + '/book', {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
      })
      const intoJson = await res.json();
      const bookingData = await intoJson.data;
      const bookingDetail = await bookingData.booking;

      const spaceName = space.name;
      const bookDuration = endHour - startHour;
      const spacePrice = space.price;
      const path = '/transaksi?bookingId=' + bookingDetail.booking_id + 
        '&date=' + date +
        '&start=' + startHour +
        '&end=' + endHour +
        '&name=' + spaceName +
        '&spacePrice=' + spacePrice +
        '&spaceId=' + id;
      
      router.push(path);
    }

    postBooking()
      .catch(error => {
        console.log('error', error);
        localStorage.removeItem('spotsToken');
        toast.error('Login terlebih dahulu!')
        router.push('/');
      })
  }

  return (
    <div className='bg-white'>
      <title>Booking</title>

      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
      </div>

      <p className='bg-white text-3xl text-[#17224D] pt-8 pl-12 font-bold'>
        Pesan Workspace
      </p>
      
      <p className='bg-white text-l text-black pt-4 pb-8 pl-12'>Mohon cek ulang data yang dimasukkan</p>

      { isDataFetched &&
      <form action="" method=""
      className="grid w-11/12 m-auto mb-5 rounded-xl border-dashed border-2 border-black lg:grid-cols-2 py-5 items-center"
        onSubmit={
          e => {
            e.preventDefault();
            checkout();
          }
        }>
        <div className="px-10 py-5">
          <p className='text-black font-bold text-2xl my-6'>Data Booking</p>
          <div className='flex justify-between my-3'>
            <p className='text-black font-semibold text-lg'>
              Nama Coworking Space
            </p>
            <p className='text-black font-semibold text-lg mx-4'>
              :
            </p>
            <p id="" className='text-black font-semibold text-lg'>
              {space && space.name}
            </p>             
          </div>

            <p className='text-black font-semibold text-lg'>Tanggal</p>
            <div className='flex flex-row items-center'>
              <input type="date" name="" id=""  
                className="bg-transparent border border-[#17224D] rounded-2xl w-full py-2 px-4 bg-slate-100 text-left text-black my-3" 
                placeholder='Pilih Tanggal' 
                required
                onChange={(e) => setDate(e.target.value)}>
              </input>
            </div>

            <div className='flex justify-between'>
              <p className='text-black font-semibold text-lg'>Jam Masuk</p>
              <p className='text-black font-semibold text-lg'>Jam Keluar</p>
            </div>

            <div className='flex justify-between'>
              <div className='flex w-full flex-row items-center pr-4'>
                <input type="number" id="startHour"
                  className="bg-transparent border border-[#17224D] rounded-2xl py-2 px-4 bg-slate-100 text-left w-full text-black my-3 "
                  placeholder='Pilih Waktu Masuk'
                  min="8" max="21"
                  required
                  onChange={(e) => setStartHour(e.target.value)}>
                </input>
              </div>
              <div className='flex w-full flex-row items-center pl-4'>
                <input type="number" id="endHour"
                  className="bg-transparent border border-[#17224D] rounded-2xl py-2 px-4 bg-slate-100 text-left w-full text-black my-3"
                  placeholder='Pilih Waktu Keluar' 
                  min="9" max="22"
                  required
                  onChange={(e) => setEndHour(e.target.value)}>    
                </input>
              </div>
            </div>
        </div>

        <div className="right flex flex-col items-center">
          <div className='px-10 md:pr-10 mt-10 rounded-full'>
            {space &&
              <Image alt='room' 
              src={space.coworking_space_images[0].image_url}  
              className='rounded-xl'
                width={500} height={500} />
              }
          </div>
          <button type="submit" className="block bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-full
              px-20 py-3 m-auto mt-10 text-center" href='/transaksi'>
            Submit Booking</button>
        </div>
      </form>        
      }
    </div>
  )
}

export default Booking