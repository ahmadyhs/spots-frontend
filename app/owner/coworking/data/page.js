import Image from 'next/image';

export default function CoworkingData() {
    return (
        <body className="grid grid-cols-5">
            <aside className="bg-blue-500 h-full grid place-content-between">
                <div>
                    <div className="right flex flex-col items-center">
                        <div className="right flex flex-col items-center mt-10">
                            <Image alt='logo' src="/spots.png"  width={200} height={200} />
                        </div>
                    </div>
                    <p className='text-center m-5 text-3xl mb-10'>Coworking Space</p>
                    <button className="bg-teal-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-800 active:bg-slate-500">Data Coworking</button>
                    <button className="bg-slate-700 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-800 active:bg-slate-500">Data Transaksi Coworking</button>
                </div>

                <div className='mb-10'>
                    <div className='flex flex-col items-center'>
                        <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">← Keluar</button>
                    </div>
                </div>
            </aside>
            

            <main className="col-span-4 bg-white">
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA COWORKING SPACE</p>
                </div>

                <div className='border-dashed border-2 mx-20 my-4'>
                    <div className='flex justify-center'>
                        <div className='w-9/12'>
                            <p className='text-[#17224D] font-bold text-xl mt-5'>Data Coworking Space</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center'>
                            <p className='text-black text-xl w-4/12'>Nama Coworking Space</p>
                            <input type="text" id="" name="" required
                                    className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center'>
                            <p className='text-black text-xl w-4/12'>Deskripsi</p>
                            <input type="text" id="" name="" required
                                    className="border rounded-xl w-8/12 h-20 py-2 text-center m-5"/>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center'>
                            <p className='text-black text-xl w-4/12'>Harga</p>
                            <input type="text" id="" name="" required
                                    className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center'>
                            <p className='text-black text-xl w-4/12'>Kapasitas</p>
                            <input type="text" id="" name="" required
                                    className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center'>
                            <p className='text-black text-xl w-4/12'>Lokasi</p>
                            <input type="text" id="" name="" required
                                    className="border rounded-xl w-8/12 py-2 text-center m-5"/>
                        </div>
                    </div>
                </div>

                <div className='border-dashed border-2 mx-20 my-4'>    
                    <div className='flex justify-center'>
                        <div className='w-9/12'>
                            <p className='text-[#17224D] font-bold text-xl mt-5'>Data Foto Coworking Space</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-center h-fit'>
                            <p className='text-black text-xl w-4/12'>KTP</p>
                            <div className='rounded-xl w-8/12 m-5 h-fit'>
                                <Image alt='room' className='h-20 w-fit' src="/room.png" height={344} width={531} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-dashed border-2 mx-20 my-4'>    
                    <div className='flex justify-center mb-10'>
                        <div className='w-9/12'>
                            <p className='text-[#17224D] font-bold text-xl mt-5'>Data Fasilitas Coworking Space</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-9/12 flex justify-center items-start'>
                            <p className='text-black text-xl w-4/12'>Fasilitas</p>
                            <div className='rounded-xl h-20 w-8/12 m-5 flex'>
                                <div className='w-6/12'>
                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> Wifi</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> TV</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> Air Mineral</label>
                                    </div>
                                </div>
                                
                                <div className='w-6/12'>
                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> Proyektor</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> Flipchart</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" id="" name="" value=""/>
                                        <label className='text-black' for=""> Sound System</label>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="flex justify-evenly">
                    <button className="bg-green-500 text-black font-semibold p-3 w-1/12 hover:bg-green-600 active:bg-green-700 mb-5">Submit</button>
                </div>
            </main>
            
        </body>
    )
}