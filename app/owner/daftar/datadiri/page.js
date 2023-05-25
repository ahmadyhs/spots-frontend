import Image from 'next/image';

export default function Datadiri() {
    return (
        <body className="grid grid-cols-5">
            <aside className="bg-[#17224D] h-screen grid place-content-between">
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
            </aside>
            

            <main className="col-span-4 bg-white">
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA OWNER</p>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nama Depan</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nama Belakang</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Email</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nomor Telepon</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nomor Bank</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>Nomor Kartu </p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>
                
                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>NIK</p>
                        <input type="text" id="" name="" required
                                className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-8/12 flex justify-center items-center'>
                        <p className='text-black text-xl w-4/12'>KTP</p>
                        <div className='rounded-xl h-20 w-8/12 border-dashed border-2 m-5'>
                            <p className='bg-slate-100 p-2 text-black absolute my-4 ml-10'>Pilih File</p>
                            <p className='text-black absolute my-6 ml-40 overflow-hidden'>silakan klik di sini</p>
                            <input type="file" id="" name="" required
                                    className="opacity-0 h-full w-full"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <button className="bg-green-500 text-black font-semibold p-3 w-1/12 hover:bg-green-600 active:bg-green-700">Submit</button>
                </div>
            </main>
            
        </body>
    )
}