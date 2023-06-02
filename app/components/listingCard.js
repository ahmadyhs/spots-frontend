import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Card = ({
    id,
    name,
    price,
    place,
    image
}) => {
  const router = useRouter();
  //console.log(id);

  return( 
  <div className='flex bg-gray-100 p-2 my-5 mx-12 border border-[#17224D] rounded-xl'>
      <div className="w-2/5 py-5 px-5 flex justify-center">
        <img alt='room' src={image} className='max-h-full max-w-full' width={200} height={100} />
      </div>
      
      <div className='w-2/5'>
        <p className='text-xl text-[#17224D] px-2 py-4 font-bold'>
          {name}
        </p>
        <div className='flex items-center'>
          <Image alt='pin' src="/pin.png" className='scale-50' width={55} height={71} />
          <p className='text-gray-400 text-xl px-2'>
              {place}
          </p>
        </div>
        <div className='flex items-center'>
          <p className='text-gray-400 text-xl px-2'>Mulai dari</p>
          <p className='text-2xl font-bold text-teal-500 mt'>
              Rp {price}/Jam</p>
        </div>
      </div>
      
      <div className='w-1/5 px-2 flex items-center'>
        <div>
          <div className="block bg-teal-500 hover:bg-blue-400 text-white font-semibold rounded-full
            px-10 py-3 my-3 w-full text-center cursor-pointer" 
            onClick={() => router.push('/detail/${id}')}>Lihat Detail</div>
          <Link type="submit" className="block bg-blue-950 hover:bg-blue-400 text-white font-semibold rounded-full
            px-10 py-3 my-3 w-full text-center" href='/booking'>Booking</Link>
        </div>
      </div>
    </div>
  )
}
export default Card