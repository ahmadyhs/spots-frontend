
import { Navbar } from '../../Navbar';

export default function Edit() {
  return (
    <div className='bg-white'>
      <title>Edit Profile</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
      <Navbar/>
      </div>

      <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
        Edit Profile
      </p>
      

      <div className="bg-teal-200 grid py-20 items-center">

        <div className="px-20">
          <form action="" method="">
            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nama Depan</p>
              <input type="text" id="namaDepan"  
              className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nama Belakang</p>
              <input type="text" id="namaBelakang"  
              className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Email</p>
              <input type="email" id="email"  
              className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" ></input>
            </div>

            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Nomor Telepon</p>
              <input type="number" id="noTel"  
              className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" ></input>
            </div>
            
            <div className='flex flex-row items-center'>
              <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Foto</p>
              <div className='rounded-xl bg-slate-400 h-20 w-8/12 border-dashed border-2 m-5'>
                  <p className='bg-slate-100 p-2 text-black absolute my-4 ml-10'>Pilih File</p>
                  <p className='text-black absolute my-6 ml-40 overflow-hidden'>silakan klik di sini</p>
                  <input type="file" id="picture" accept='image/*'
                          className="opacity-0 h-full w-full"/>
              </div>
            </div>
            
            <div className='flex justify-center'>
              <button type="submit" className="block bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-lg
                    px-20 py-3 m-auto mt-10">Submit</button>
              <a className="block bg-white border border-teal-200 hover:bg-blue-400 text-blue-950 font-semibold rounded-lg
                      px-20 py-3 m-auto mt-10" href='/profile'>Kembali</a>
            </div>
                                  
          </form>        
        </div>
      </div>  
    </div>
  )
}