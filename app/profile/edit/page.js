import Image from 'next/image';
import { Navbar } from '../../Navbar';

export default function Edit() {
    return (
      <body className='bg-white'>
        <title>Edit Profile</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
        </div>

        <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
          User Profile
        </p>
        

        <div class="bg-teal-200 grid lg:grid-cols-3 py-20 items-center">
          <div class="right flex flex-col items-center">
            <div className='bg-white p-20 mt-10 rounded-full'>
              <Image src="/person.png"  width={172} height={172} />
            </div>
          </div>

          <div className="col-span-2">
          <form action="#" method="POST">
              <div className='flex flex-row items-center'>
                <p className='w-3/12 text-[#17224D] text-2xl font-bold'>First Name</p>
                <input type="text" name="" id=""  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" autofocus autocomplete required></input>
              </div>

              <div className='flex flex-row items-center'>
                <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Last Name</p>
                <input type="text" name="" id=""  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" autofocus autocomplete required></input>
              </div>

              <div className='flex flex-row items-center'>
                <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Email</p>
                <input type="email" name="" id=""  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10" autofocus autocomplete required></input>
              </div>

              <div className='flex flex-row items-center'>
                <p className='w-3/12 text-[#17224D] text-2xl font-bold'>Phone Number</p>
                <input type="number" name="" id=""  
                className="bg-transparent border border-[#17224D] rounded-2xl w-10/12 py-2 text-center text-black my-3 mr-10
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" autofocus autocomplete required></input>
              </div>
              <button type="submit" class="block bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-lg
                      px-20 py-3 m-auto mt-10">Edit</button>
            </form>        
          </div>
        </div>  
      </body>
    )
}