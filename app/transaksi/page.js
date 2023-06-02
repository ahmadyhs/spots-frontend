import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar';

export default function Transaction() {
    return (
      <div className='bg-white'>
        <title>Transaksi</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
          <Navbar/>
        </div>

        <div className='bg-white'>
          <div className="bg-gray-200 grid w-11/12 m-auto rounded-xl border-dashed border-2 border-black lg:grid-cols-2 py-5 items-center">  
            <div className="px-10">
              <p className='text-black font-bold text-2xl my-6'>Detail Transaksi</p>

              <form action="#" method="">
                <div className='flex justify-between my-3'>
                  <p className='text-black font-semibold w-2/6 text-lg'>Nama Coworking Space</p>
                  <p className='text-black font-semibold text-center w-1/6 text-lg'>:</p>
                  <p id="" className='text-black font-semibold w-3/6 text-lg'>RuangMeeting.id</p>             
                </div>
                
                <div className='flex justify-between my-3'>
                  <p className='text-black font-semibold w-2/6 text-lg '>Tanggal</p>
                  <p className='text-black font-semibold text-center w-1/6 text-lg'>:</p>
                  <p id="" className='text-black font-semibold w-3/6 text-lg'>Selasa, 1 November 2023</p>             
                </div>

              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Waktu Sewa</p>
                <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>14:00 - 16:00</p>             
              </div>

              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Lama Sewa</p>
                <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>1 Jam</p>             
              </div>

              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Biaya Sewa</p>
                <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>Rp 250.000</p>             
              </div>

              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Biaya Aplikasi</p>
                <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>Rp 5.000</p>             
              </div>
              <hr className='border-black'></hr>
              <div className='flex justify-between my-3'>
                <p className='text-black font-semibold w-2/6 text-lg'>Total Pembayaran</p>
                <p className='text-black font-semibold w-1/6 text-center text-lg'>:</p>
                <p id="" className='text-black font-semibold w-3/6 text-lg'>Rp 229.500</p>             
              </div>
                
              </form>        
            </div>

            <div className="right flex flex-col items-center">
              <div className='p-2 mt-10 '>
                <Image alt='room' src="/room.png"  width={500} height={500} />
              </div>
            </div>
          </div> 

          <div className="bg-gray-200 grid w-11/12 m-auto rounded-xl border-dashed border-2 border-black py-2 items-center mt-5">  
            <div className="px-10">
              <p className='text-black font-bold text-2xl my-2'>Pilih Metode Pembayaran</p>
              <div className='flex justify-between'>
                <div className='flex my-5'>
                  <input type="checkbox" className='mx-5'></input>
                  <Image alt='Gopay' src="/gopay.png" width={214} height={47}/>
                </div>

                <div className='flex my-5'>
                  <input type="checkbox" className='mx-5'></input>
                  <Image alt='Mandiri' src="/mandiri.png" width={183} height={53}/>
                </div>

                <div className='flex my-5'>
                  <input type="checkbox" className='mx-5'></input>
                  <Image alt='BNI' src="/bni.png" width={163} height={53}/>
                </div>

              </div>
            </div>
          </div> 

          <div className='flex items-center'>
            <button type="submit" className="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
                          px-20 py-3 m-auto mt-5 text-center">Bayar</button>

            <Link type="submit" className="block bg-white border border-blue-950 hover:bg-blue-400 text-blue-950 font-semibold rounded-full
                          px-20 py-3 m-auto mt-5 text-center" href='/booking'>Batal</Link>
          </div>
        </div>
      </div>
    )
}