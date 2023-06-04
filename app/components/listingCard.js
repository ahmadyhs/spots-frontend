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
  <div className='flex bg-gray-100 p-2 my-5 mx-12 border border-[#17224D] rounded-xl'>
      <div className="w-2/5 p-5 flex justify-center">
        <img alt='room' src={image} className='max-h-full max-w-full rounded-xl' width={300} height={200} />
      </div>
      
      <div className='w-2/5 grid items-center py-8'>
        <p className='text-xl text-[#17224D] px-2 py-4 font-bold'>
          {name}
        </p>
        <div className='flex items-center'>
          <Image alt='pin' src="/pin.png" className='scale-50' width={55} height={71} />
          <p className='text-gray-400 text-xl px-2'>
              {place}
          </p>
        </div>
        <div className='flex items-center pb-4'>
          <p className='text-gray-400 text-xl px-2'>Mulai dari</p>
          <p className='text-2xl font-bold text-teal-500 mt'>
              Rp {price}/Jam</p>
        </div>
      </div>
      
      <div className='w-1/5 px-2 flex items-center'>
        <div>
          <Link className="block bg-teal-500 hover:bg-blue-400 text-white font-semibold rounded-full
              px-10 py-3 my-3 w-full text-center cursor-pointer" 
              href={'/detail/' + id}>
            Lihat Detail
          </Link>

          <Link className="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
              px-10 py-3 my-3 w-full text-center" 
              href={'/booking/' + id}>
            Booking
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card