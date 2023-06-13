'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Card from '../components/listingCard'

const Eksplorasi = () => {
  // const router = useRouter();
  
  const [spaceResult, setSpaceResult] = useState(null);
  const [keyWord, setKeyWord] = useState('');

  useEffect(() => {
    const getData = async () =>{
      const spaces = [];
      for(let i = 1; i<6; i++){
          const result = await fetch ('https://api.spotscoworking.live/coworking-spaces?page=' + i)
          const json = await result.json();
          const data = await json.coworkingSpaces;

          if(data.length === 0) break;

          for(let j = 0; ; j++){
              if(data[j]) spaces.push(data[j]);
              else break;
          }

      }
      setSpaceResult(spaces);
    } 

    getData()
      .catch(error => {
        console.log('error', error);
      });
  },[])

  const search = () => {
    const getSearchData = async () =>{
      const data = await fetch ('https://api.spotscoworking.live/coworking-spaces?search=' + keyWord)
      const json = await data.json();

      setSpaceResult(json.coworkingSpaces);
    } 
  
    getSearchData()
      .catch(error => {
        console.log('error', error);
      });
  }

  return (
    <div>
      <title>Eksplorasi</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
      </div>

      <p className='bg-white text-2xl text-[#17224D] py-8 pl-12 font-bold'>
        Cari Workspace
      </p>
      <form className="relative mb-8 flex w-full flex-wrap"
        onSubmit={ e => {
            e.preventDefault();
            search();
          }
        }>
        <input
          type="text"
          className="relative ml-12 sm:mr-0 mr-12 block flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-5 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
          placeholder="Cari Workspace"
          value={keyWord}
          onChange={(e) => setKeyWord(e.target.value)}/>

        <button
          className="bg-[#17224D] sm:ml-3 sm:mt-0 ml-12 mt-2 mr-12 relative z-[2] rounded-full border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-green-500 focus:outline-none focus:ring-0"
          type="submit"
          >
          Cari
        </button>
      </form>
      {spaceResult && (spaceResult.length === 0) && (keyWord !== '') &&
        <p className='text-neutral-800 text-center text-xl mt-6'>
          Tidak ada Coworking Space yang cocok dengan kata kunci
        </p>}

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