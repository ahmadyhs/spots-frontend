'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Card from '../components/listingCard'

const Eksplorasi = () => {
  const router = useRouter();
  
  const [token, setToken] = useState(null);
  const [spaceResult, setSpaceResult] = useState(null);
  const authorization = "Bearer " + token;
  const header = {'Authorization': authorization};

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('spotsToken') ? localStorage.getItem('spotsToken') : null);
    }

    const getData = async () =>{
      const data = await fetch ('https://api.spotscoworking.live/coworking-spaces', {headers: header})
      const json = await data.json();

      setSpaceResult(json.coworkingSpaces); 
    } 

    getData()
      .catch(error => {
        console.log('error', error);
        localStorage.removeItem('spotsToken');
        router.push('/');
      });
  },[])

  return (
    <div>
      <title>Eksplorasi</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
      </div>

      <p className='bg-white text-2xl text-[#17224D] py-8 pl-12 font-bold'>
        Cari Workspace
      </p>
      <div className="relative flex w-full flex-wrap">
        <input
          type="search"
          className="relative ml-12 block flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Cari Workspace"/>

        <button
          className="bg-[#17224D] mx-6 relative z-[2] rounded-full border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-green-500 focus:outline-none focus:ring-0"
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
          className="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
          Jarak
        </button>
        <button
          type="button"
          className="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
          Rating
        </button>
        <button
          type="button"
          className="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
          Terbaru
        </button>
        <button
          type="button"
          className="rounded-xl border-2 border-[#17224D] px-3 py-1 mx-2 font-medium text-neutral-800 hover:bg-neutral-100 active:bg-green-300">
        Populer
        </button>
      </div>
      
      {spaceResult && spaceResult.map(space =>{
        return(
          <Card
            key={space.location.space_id}
            id={space.location.space_id}
            name={space.name}
            price={space.price}
            place={space.location.address}
            image={space.coworking_space_images[0].image_url} />
          )
        })
      }
    </div>
  )
}

export default Eksplorasi