'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const UpdateDatadiri = () => {
    const router = useRouter();
    
    const [token, setToken] = useState(null);
    const header = {'Authorization': "Bearer " + token};

    const [image, setImage] = useState(null);
    const [nik, setNik] = useState('');
    const [bankName, setBankName] = useState('');
    const [cardNumber, setCardNumber] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem('spotsToken'));
    },[])

    const submitData = () => {
        const formData = new FormData();
        
        formData.append('ktpURL', image);
        formData.append('bankName', bankName);
        formData.append('nik', nik);
        formData.append('cardNumber', cardNumber);
        
        const updateOwner = async () => {
            const data = await fetch ('https://api.spotscoworking.live/owners/info', {
                method: 'PUT',
                headers: header,
                body: formData
            })
            const json = await data.json();

            if(!json.message){
                router.push('/owner');
                toast.success('Update berhasil');
            } else {
                router.refresh();
                toast.error(json.message);
            }
            
        }

        if(token){
            updateOwner()
                .catch(error => {
                console.log('error', error);
                localStorage.removeItem('spotsToken');
                router.push('/');
                toast.error('Update gagal')
            })
        }
    }

    return (
        <main className="col-span-7">
            {/* <aside className="bg-[#17224D] h-screen grid place-content-between">
                <div>
                    <div className="right flex flex-col items-center">
                        <div className="right flex flex-col items-center mt-10">
                            <Image alt='logo' src="/spots.png"  width={200} height={200} />
                        </div>
                    </div>
                    <p className='text-center m-5 text-3xl mb-10'>Owner</p>
                    <button className="bg-slate-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Owner</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Tambah Coworking Space</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Coworking Space</button>
                </div>

                <div className='mb-10'>
                    <div className='flex flex-col items-center'>
                        <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">← Keluar</button>
                    </div>
                </div>
            </aside> */}
            

            <form className="block"
                onSubmit={
                    e => {
                        e.preventDefault();
                        submitData();
                    }
                }>
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA OWNER</p>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nama Bank</p>
                        <input type="text" id="" name="" 
                            className="border rounded-xl w-8/12 py-2 text-center m-5 text-black"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                            required
                            />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nomor Kartu </p>
                        <input type="text" id="" name=""
                            className="border rounded-xl w-8/12 py-2 text-center m-5 text-black"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                            />
                    </div>
                </div>
                
                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>NIK</p>
                        <input type="text" id="" name="" 
                                className="border rounded-xl w-8/12 py-2 text-center m-5 text-black"
                                value={nik}
                                onChange={(e) => setNik(e.target.value)}
                                required
                                />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>KTP</p>
                        <div className='bg-slate-400 rounded-xl h-20 w-8/12 border-dashed border-2 m-5'>
                            <input type="file" id="" name="" 
                                className="p-6 h-full w-full text-black"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                                />
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <button className="w-fit text-center bg-green-500 text-black font-semibold p-3 mt-4 hover:bg-green-600 active:bg-green-700"
                        type='submit'>
                        Submit
                    </button>
                </div>
            </form>
            
        </main>
    )
}
export default UpdateDatadiri