'use client'

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../Navbar';
import { useEffect, useState } from 'react';

const Detail = (
  params
) => {
  const id = params.params.spaceId; 
  const [space, setSpace] = useState(null);
  
  const [isDataFetched, setIsDataFetched] = useState(false);
  
  useEffect(() => {
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

  return (
    <div className='bg-white'>
      <title>Detail</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
      </div>

      {isDataFetched &&
      <div className='bg-white'>
        <div className='grid w-11/12 m-auto'>
          <p className='text-[#17224D] font-bold text-2xl mx-10 my-6'>
            {space && space.name}
          </p>
        </div>
        <div className="grid w-11/12 m-auto rounded-xl py-5">  
          <div className="md:px-10 flex  justify-center">
            {space &&
              <Image alt='room' 
              src={space.coworking_space_images[0].image_url} 
              className='w-full rounded-xl' width={531} height={344} />
            }
          </div>

          {/* <div className="col-span-1 right flex flex-col items-center pr-10">
            <div className='mb-2'>
            <Image alt='room' src="/room2.png" width={480} height={200} />
            </div>
            <div className='my-2 '>
            <Image alt='room' src="/room3.png" width={480} height={200} />
            </div>
            <div className='mt-2 '>
            <Image alt='room' src="/room4.png" width={480} height={200} />
            </div>
          </div> */}
        </div> 

        <div className="grid w-11/12 m-auto rounded-xl md:grid-cols-3 py-2">  
          <div className="rounded-xl bg-gray-200 border border-1 border-black md:col-span-2 p-5 md:ml-10 md:mr-2 mt-5 mb-3">
            <div className='flex'>
              <p className='text-[#17224D] font-semibold text-xl'>Tentang</p>
              <p className='text-gray-400 mx-2 font-semibold text-xl'>Coworking Space</p>
            </div>
            <p className='mt-2 font-medium text-gray-600'>
              {space && space.description}  
            </p>
          </div>
          <div className="rounded-xl bg-gray-200 border border-1 border-black md:col-span-1 right p-5 md:ml-2 md:mr-10 mt-5 mb-3">
            <p className='text-[#17224D] font-bold text-xl'>Harga</p>
            <p className='text-2xl font-bold text-teal-500 mt'>
              Rp {space && space.price}/Jam
            </p>
          </div>
        </div>

        <div className="grid w-11/12 m-auto rounded-xl md:grid-cols-3 py-2">  
          <div className="rounded-xl bg-gray-200 border border-1 border-black md:col-span-2 p-5 md:ml-10 md:mr-2 mt-5 mb-3">
            <p className='text-[#17224D] font-semibold text-xl mb-2'>Fasilitas</p>
            <ul className='list-disc ml-10 text-gray-600 font-medium'>
              <li>
                {space && space.capacity} Kursi
              </li>
              {space && space.coworking_space_facilities.map(fac =>{
                return(
                    <li key={fac.facility.facility_id}> 
                      {fac.facility.name}
                    </li>
                  )
                })
              }
            </ul>
            <p className='text-[#17224D] font-semibold text-xl mt-2'>Lokasi</p>
            <div className='flex items-center'>
              <Image alt='pin' src="/pin.png" className='scale-50' width={55} height={71} />
              <p className='mt-2 font-medium text-gray-600'>
                {space && space.location.address}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-gray-200 border border-1 border-black md:col-span-1 right p-5 md:ml-2 md:mr-10 mt-5 mb-3">
            <p className='text-[#17224D] font-bold text-xl mb-2'>Jam Operasional</p>
            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Senin</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Selasa</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Rabu</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Kamis</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Jumat</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Sabtu</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <div className='flex justify-between items-center'>
              <p className='font-medium text-gray-600'>Minggu</p>
              <p className='text-l font-bold text-teal-500'>08.00 - 22.00</p>
            </div>

            <hr className="my-5 border-gray-500" />

            <Link type="submit" className="flex justify-center bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
                px-20 py-3 m-auto mt-5 text-center" href={'/booking/' + id}>
              Booking
            </Link>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Detail