import { Navbar } from '../Navbar'
import Image from 'next/image';
import Footer from "../Footer";
;

export default function eksplor() {
    return (
      <body className='bg-white'>
        <title> Eksplorasi</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
          <Navbar/>
        </div>

        <p className='bg-white text-2xl text-[#17224D] py-8 pl-12 font-bold'>
          Cari Workspace
        </p>
        <div class="relative flex w-full flex-wrap">
          <input
            type="search"
            class="relative ml-12 block flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Cari Workspace"/>

          <button
            class="bg-[#17224D] mx-6 relative z-[2] rounded-full border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-green-500 focus:outline-none focus:ring-0"
            type="button"
            id="">
            Cari
          </button>
        </div>

        <div className='flex py-2 my-5 items-center'>
          <p className='text-[#17224D] pl-12 mr-4 font-bold'>
            Urutkan berdasarkan </p>
          <button
            type="button"
            class="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
            Jarak
          </button>
          <button
            type="button"
            class="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
            Rating
          </button>
          <button
            type="button"
            class="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
            Terbaru
          </button>
          <button
            type="button"
            class="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
          Populer
          </button>
        </div>
        
        
        <div className='flex bg-gray-100 p-2 my-5 mx-12 border border-[#17224D] rounded-xl'>
          <div className="w-2/5 py-5 px-5 flex justify-center">
            <Image src="/room.png" className='max-h-full max-w-full' width={200} height={100} />
          </div>
          
          <div className='w-2/5'>
            <p className='text-xl text-[#17224D] px-2 py-4 font-bold'>
              RuangMeeting.ID
            </p>
            <div className='flex items-center'>
              <Image src="/pin.png" className='scale-50' width={55} height={71} />
              <p className='text-gray-400 text-xl px-2'>Bandung</p>
            </div>
            <div className='flex items-center'>
              <p className='text-gray-400 text-xl px-2'>Mulai dari</p>
              <p className='text-2xl font-bold text-teal-500 mt'>Rp 350.000/Jam</p>
            </div>
          </div>
          
          <div className='w-1/5 px-2 flex items-center'>
            <div>
              <button type="submit" class="block bg-teal-500 hover:bg-blue-400 text-white font-semibold rounded-full
                px-10 py-3 my-3 w-full">Lihat Detail</button>
              <button type="submit" class="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
                px-10 py-3 my-3 w-full">Booking</button>
            </div>
          </div>
        </div>

        <div className='flex bg-gray-100 p-2 my-5 mx-12 border border-[#17224D] rounded-xl'>
          <div className="w-2/5 py-5 px-5 flex justify-center">
            <Image src="/room2.png" className='max-h-full max-w-full' width={200} height={100} />
          </div>
          
          <div className='w-2/5'>
            <p className='text-xl text-[#17224D] px-2 py-4 font-bold'>
              Cowork
            </p>
            <div className='flex items-center'>
              <Image src="/pin.png" className='scale-50' width={55} height={71} />
              <p className='text-gray-400 text-xl px-2'>Sukabumi</p>
            </div>
            <div className='flex items-center'>
              <p className='text-gray-400 text-xl px-2'>Mulai dari</p>
              <p className='text-2xl font-bold text-teal-500 mt'>Rp 250.000/Jam</p>
            </div>
          </div>
          
          <div className='w-1/5 px-2 flex items-center'>
            <div>
              <button type="submit" class="block bg-teal-500 hover:bg-blue-400 text-white font-semibold rounded-full
                px-10 py-3 my-3 w-full">Lihat Detail</button>
              <button type="submit" class="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
                px-10 py-3 my-3 w-full">Booking</button>
            </div>
          </div>
        </div>

        </body>
  )
}