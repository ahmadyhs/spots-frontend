'use client'

import { Navbar } from '../Navbar';
import { useContext } from 'react';
import AuthContext from '../api/authContext';

const Profile = async () => {
  const context = useContext(AuthContext);
  const authorization = "Bearer " + context.token;
  const header = {'Authorization': authorization};

  let profileData = {};
  let picture = {};

  console.log(header)

  await fetch ('https://api.spotscoworking.live/tenants/profile', {headers: header})
  .then(response => response.text())
  .then(result => {
      let resultArray = JSON.parse(result);
      picture = (resultArray?.tenant?.avatar_url ?? '');
      profileData = resultArray?.tenant?.user;
  })
  .catch(error => console.log('error', error));

  return (
    <div className='bg-white'>
      <title>User Profile</title>
      <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
      <Navbar/>
      </div>

      <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
        User Profile
      </p>
      

      <div className="bg-teal-200 grid lg:grid-cols-3 py-20 items-center">
        <div className="right flex flex-col items-center">
          <div className='bg-white p-20 mt-10 rounded-full'>
            <img alt='profile-picture' src={picture}  width={172} height={172} />
          </div>
        </div>

        <div className="col-span-2">
          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-2xl font-bold'>Nama Depan</p>
            <p className='w-full text-[#17224D] text-2xl font-bold'>{(profileData?.first_name ?? '')}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-2xl font-bold'>Nama Belakang</p>
            <p className='w-full text-[#17224D] text-2xl font-bold'>{(profileData?.last_name ?? '')}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-2xl font-bold'>Email</p>
            <p className='w-full text-[#17224D] text-2xl font-bold'>{(profileData?.email ?? '')}</p>
          </div>

          <div className='grid grid-cols-2 items-center my-3'>
            <p className='w-full text-[#17224D] text-2xl font-bold'>Nomor Telepon</p>
            <p className='w-full text-[#17224D] text-2xl font-bold'>{(profileData?.phone_number ?? '')}</p>
          </div>
          <div className='flex items-center'>
            <a className=" bg-blue-950 border border-teal-200 hover:bg-blue-400 text-white font-semibold rounded-lg
                  px-20 py-3 m-auto mt-10" href='/profile/edit'>Edit</a>
          </div>     
        </div>
      </div>  
    </div>
  )
}

export default Profile