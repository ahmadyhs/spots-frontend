import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function Detail() {
    return (
      <div className='bg-white'>
        <title>Detail</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
          <Navbar/>
        </div>

        <div className='bg-white'>
          <div className='grid w-11/12 m-auto'>
            <p className='text-[#17224D] font-bold text-2xl mx-10 my-6'>RuangMeeting.ID</p>
          </div>
          <div className="grid w-11/12 m-auto rounded-xl lg:grid-cols-3 py-5">  
            <div className="col-span-2 px-10 flex  justify-center">
                <Image alt='room' src="/room.png" className='w-full' width={531} height={344} />
            </div>

            <div className="col-span-1 right flex flex-col items-center pr-10">
              <div className='mb-2'>
                <Image alt='room' src="/room2.png" width={480} height={200} />
              </div>
              <div className='my-2 '>
                <Image alt='room' src="/room3.png" width={480} height={200} />
              </div>
              <div className='mt-2 '>
                <Image alt='room' src="/room4.png" width={480} height={200} />
              </div>
            </div>
          </div> 

          <div className="grid w-11/12 m-auto rounded-xl lg:grid-cols-3 py-2">  
            <div className="rounded-xl bg-gray-200 border border-1 border-black col-span-2 p-5 ml-10 mr-2 my-5">
              <div className='flex'>
                <p className='text-[#17224D] font-semibold text-xl'>Tentang</p>
                <p className='text-gray-400 mx-2 font-semibold text-xl'>Coworking Space</p>
              </div>
              <p className='mt-2 font-medium text-gray-600'>RuangMeeting.ID menyediakan banyak pilihan ruangan untuk berbagai keperluan dengan fasilitas yang lengkap.</p>
            </div>
            <div className="rounded-xl bg-gray-200 border border-1 border-black col-span-1 right p-5 ml-2 mr-10 my-5">
              <p className='text-[#17224D] font-bold text-xl'>Harga</p>
              <p className='text-2xl font-bold text-teal-500 mt'>Rp 350.000/Jam</p>
            </div>
          </div>

          <div className="grid w-11/12 m-auto rounded-xl lg:grid-cols-3 py-2">  
            <div className="rounded-xl bg-gray-200 border border-1 border-black col-span-2 p-5 ml-10 mr-2 my-5">
              <p className='text-[#17224D] font-semibold text-xl mb-2'>Fasilitas</p>
              <ul className='list-disc mx-5 text-gray-600 font-medium'>
                <li>120 Kursi</li>
                <li>Air Conditioner</li>
                <li>Wifi</li>
                <li>TV</li>
                <li>Furniture Pilihan</li> 
              </ul>
              <p className='text-[#17224D] font-semibold text-xl mt-2'>Lokasi</p>
              <div className='flex items-center'>
                <Image alt='pin' src="/pin.png" className='scale-50' width={55} height={71} />
                <p className='mt-2 font-medium text-gray-600'>Jalan Sesama No.123, Kota Bandung</p>
              </div>
            </div>
            <div className="rounded-xl bg-gray-200 border border-1 border-black col-span-1 right p-5 ml-2 mr-10 my-5">
              <p className='text-[#17224D] font-bold text-xl mb-2'>Jam Operasional</p>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Senin</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Selasa</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Rabu</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Kamis</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Jumat</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Sabtu</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className='font-medium text-gray-600'>Minggu</p>
                <p className='text-l font-bold text-teal-500'>08.00 - 10.00</p>
              </div>

              <hr className="my-5 border-gray-500" />

              <Link type="submit" className="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
                        px-20 py-3 m-auto mt-5 text-center" href='/booking'>Booking</Link>
            </div>
          </div>
        </div>
      </div>
    )
}