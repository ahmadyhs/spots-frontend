import Image from 'next/image';
import { Navbar } from '../Navbar';

export default function Booking() {
    return (
      <body className='bg-white'>
        <title>Booking</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
          <Navbar/>
        </div>

        <p className='bg-white text-3xl text-[#17224D] pt-8 pl-12 font-bold'>
          Pesan Workspace
        </p>
        
        <p className='bg-white text-l text-black pt-4 pb-8 pl-12'>Mohon cek ulang data yang dimasukkan</p>

        <div className=''>
          <div class="grid w-11/12 m-auto rounded-xl border-dashed border-2 border-black lg:grid-cols-2 py-5 items-center">  
            <div className="px-10 py-5">
              <p className='text-black font-bold text-2xl my-6'>Data Booking</p>
              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold text-lg'>Nama Coworking Space</p>
                <p className='text-black font-semibold text-lg'>:</p>
                <p id="" className='text-black font-semibold text-lg'>RuangMeeting.id</p>             
              </div>

              <form action="#" method="">
                <div className='flex flex-row items-center'>
                  <input type="date" name="" id=""  
                  className="bg-transparent border border-[#17224D] rounded-2xl w-full py-2 px-4 bg-slate-100 text-left text-black my-3" 
                  placeholder='Pilih Tanggal' autofocus autocomplete required></input>
                </div>

                <div className='flex justify-between'>
                  <div className='flex w-full flex-row items-center pr-4'>
                    <input type="time" name="" id=""  
                    className="bg-transparent border border-[#17224D] rounded-2xl py-2 px-4 bg-slate-100 text-left w-full text-black my-3 "
                    placeholder='Pilih Waktu Masuk' autofocus autocomplete required></input>
                  </div>
                  <div className='flex w-full flex-row items-center pl-4'>
                    <input type="time" name="" id=""  
                    className="bg-transparent border border-[#17224D] rounded-2xl py-2 px-4 bg-slate-100 text-left w-full text-black my-3"
                    placeholder='Pilih Waktu Keluar' autofocus autocomplete required></input>
                  </div>
                </div>
                
                <div className='flex flex-row items-center'>
                  <input type="number" name="" id=""  
                  className="bg-transparent border border-[#17224D] rounded-2xl w-full py-10 px-4 bg-slate-100 text-left text-black my-3"
                  placeholder='Catatan Bagi Penyedia' autofocus autocomplete required></input>
                </div>
              </form>        
            </div>

            <div class="right flex flex-col items-center">
              <div className='p-2 mt-10 rounded-full'>
                <Image src="/room.png"  width={500} height={500} />
              </div>
              <button type="submit" class="block bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-full
                        px-20 py-3 m-auto mt-10">Submit Booking</button>
            </div>
          </div>  
        </div>
      </body>
    )
}