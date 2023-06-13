import Image from 'next/image';
import Link from 'next/link';

const Card = ({
    id,
    name,
    price,
    place,
    image
}) => {

  return( 
  <div className='md:flex bg-white p-2 my-5 mx-12 border-2 border-[#17224D] rounded-xl drop-shadow-md'>
      <div className="md:w-2/5 p-5 flex justify-center">
        <img alt='room' src={image} className='max-h-full max-w-full rounded-xl' width={300} height={200} />
      </div>
      
      <div className='md:w-2/5 md:grid items-center py-8 mx-5'>
        <p className='text-xl text-[#17224D] px-2 py-4 font-bold'>
          {name}
        </p>
        <div className='flex items-center'>
          <Image alt='pin' src="/pin.png" className='scale-50' width={55} height={71} />
          <p className='text-gray-400 text-xl px-2'>
              {place}
          </p>
        </div>
        <div className='lg:flex items-center pb-4'>
          <p className='text-gray-400 text-xl px-2'>Mulai dari</p>
          <p className='text-2xl font-bold text-teal-500 px-2'>
              Rp {price}/Jam</p>
        </div>
      </div>
      
      <div className='md:w-1/5 px-2 flex md:items-center'>
        <div className='md:block flex justify-center items-center w-full'>
          <Link className="md:block flex justify-center bg-teal-500 hover:bg-blue-400 text-white font-semibold rounded-full
              lg:px-10 py-3 my-3 md:mx-0 mx-4 md:w-full w-2/5 text-center cursor-pointer" 
              href={'/detail/' + id}>
            Detail
          </Link>

          <Link className="md:block flex justify-center bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
              lg:px-10 py-3 my-3 md:mx-0 mx-4 md:w-full w-2/5 text-center" 
              href={'/booking/' + id}>
            Booking
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card