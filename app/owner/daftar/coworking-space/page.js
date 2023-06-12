'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const AddCoworkingSpace = () => {
    const router = useRouter();
    
    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token};

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [capacity, setCapacity] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
    const [facilities, setFacilities] = useState({
        languages: [],
        response: [],
      });

    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    },[])

    const submitData = () => {
        const formData = new FormData();
        
        formData.append('name', name);
        formData.append('description', desc);
        formData.append('price', price);
        formData.append('capacity', capacity);
        formData.append('address', address);
        formData.append('spaceURLs', image);
        formData.append('latitude', '-5');
        formData.append('longitude', '100');
        formData.append('facilities', facilities.response.join());
        
        const addSpace = async () => {
            const data = await fetch ('https://api.spotscoworking.live/coworking-spaces', {
                method: 'POST',
                headers: header,
                body: formData
            })
            const json = await data.json();

            if(json.message === 'Add coworking space success'){
                router.push('/owner/coworking-space');
                toast.success(json.message);
            } else {
                toast(json.message);
            }
            
        }

        if(token){
            addSpace()
                .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                router.push('/');
                toast.error('Tambah space gagal')
            })
        }
    }

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { languages } = facilities;
         
        if (checked) {
          setFacilities({
            languages: [...languages, value],
            response: [...languages, value],
          });
        }
        else {
          setFacilities({
            languages: languages.filter((e) => e !== value),
            response: languages.filter((e) => e !== value),
          });
        }
    }

    return (
        <main className="md:col-span-6 col-span-8 bg-white max-h-screen">
            <form className="block"
                onSubmit={
                    e => {
                        e.preventDefault();
                        submitData();
                    }
                }>
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl text-center'>DAFTAR COWORKING SPACE</p>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nama Tempat</p>
                        <input type="text" id="" name="" 
                            className="border rounded-xl w-8/12 py-2 text-center my-3 mx-5 text-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Deskripsi</p>
                        <input type="text" id="" name=""
                            className="border rounded-xl w-8/12 py-2 text-center my-3 mx-5 text-black"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            required
                            />
                    </div>
                </div>
                
                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Harga per jam</p>
                        <input type="number" id="" name="" 
                                className="border rounded-xl w-8/12 py-2 text-center my-3 mx-5 text-black"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Kapasitas orang</p>
                        <input type="number" id="" name="" 
                                className="border rounded-xl w-8/12 py-2 text-center my-3 mx-5 text-black"
                                value={capacity}
                                onChange={(e) => setCapacity(e.target.value)}
                                required
                                />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Alamat Kota</p>
                        <input type="text" id="" name="" 
                                className="border rounded-xl w-8/12 py-2 text-center my-3 mx-5 text-black"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Foto</p>
                        <div className='bg-slate-400 rounded-xl h-20 w-8/12 border-dashed border-2 my-3 mx-5'>
                            <input type="file" id="" name="" 
                                className="p-6 h-full w-full text-black"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                                />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 grid grid-cols-6 text-black justify-center items-center'>
                        <p className='col-span-6 mb-6 text-xl w-4/12'>Fasilitas tempat</p>
                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="1"
                            onChange={handleChange}
                        />
                        <label className="">
                            WiFi
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="2"
                            onChange={handleChange}
                        />
                        <label className="">
                            AC
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="3"
                            onChange={handleChange}
                        />
                        <label className="">
                            Proyektor
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="4"
                            onChange={handleChange}
                        />
                        <label className="">
                            Stop Kontak
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="5"
                            onChange={handleChange}
                        />
                        <label className="">
                            TV LED
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="6"
                            onChange={handleChange}
                        />
                        <label className="">
                            Air Mineral
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="7"
                            onChange={handleChange}
                        />
                        <label className="">
                            Kursi Tambahan
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="8"
                            onChange={handleChange}
                        />
                        <label className="">
                            Flipchart
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="9"
                            onChange={handleChange}
                        />
                        <label className="">
                            Sound System
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="10"
                            onChange={handleChange}
                        />
                        <label className="">
                            Ruang Tunggu
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="11"
                            onChange={handleChange}
                        />
                        <label className="">
                            Parkir Mobil
                        </label>

                        <input name="" id=""
                            className=""
                            type="checkbox"
                            value="12"
                            onChange={handleChange}
                        />
                        <label className="">
                            Parkir Motor
                        </label>
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <button className="w-fit text-center bg-green-500 text-black font-semibold p-3 m-4 hover:bg-green-600 active:bg-green-700"
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            
        </main>
    )
}

export default AddCoworkingSpace