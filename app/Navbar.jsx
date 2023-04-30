import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className='flex items-center w-screen flex-wrap bg-[#17224D] p-3 '>
        <Link className='inline-flex items-center p-2 mr-4 ' href='/'>
        </Link>
        <button className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          
        </button>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' href='/'>
                Daftarkan Ruangan
            </Link>
            <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' href='/'>
                Workspace 
            </Link>
            <Link  className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' href='/'>
                Bantuan
            </Link>
            <Link className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-[#19224E] font-bold items-center justify-center bg-[#FFFFFF] hover:text-white' href='/login'>
                Login 
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};