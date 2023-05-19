import Image from 'next/image';

export default function Datadiri() {
    return (
        <body className="grid grid-cols-5">
            <aside className="bg-[#17224D] h-screen grid place-content-between">
                <div>
                    <div class="right flex flex-col items-center">
                        <div class="right flex flex-col items-center mt-10">
                            <Image src="/spots.png"  width={200} height={200} />
                        </div>
                    </div>
                    <p className='text-center m-5 text-3xl mb-10'>Owner</p>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Owner</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Tambah Coworking Space</button>
                    <button className="bg-slate-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Coworking Space</button>
                </div>

                <div className='mb-10'>
                    <div className='flex flex-col items-center'>
                        <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">← Keluar</button>
                    </div>
                </div>
            </aside>
            

            <main className="col-span-4 bg-white">
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>LIST COWORKING SPACE</p>
                </div>

                <div className='bg-white flex justify-center my-5'>
                    <table className='w-11/12'>
                        <thead>
                            <tr className='w-full text-center bg-[#17224D] font-bold'>
                                <th className='w-2/6'>Nama Coworking Space</th>
                                <th className='w-2/6'>ID Coworking Space</th>
                                <th className='w-2/6'>Dashboard</th>
                            </tr>
                        </thead>
                        <tbody className='font-semibold text-center text-black bg-gray-300'>
                            <tr className=''>
                                <td>RuangMeeting.id</td>
                                <td>2001</td>
                                <td className='p-4'>
                                    <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>Cowork</td>
                                <td>2002</td>
                                <td className='p-4'>
                                    <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>Xwork</td>
                                <td>2003</td>
                                <td className='p-4'>
                                    <div className='text-teal-300 rounded-full px-6 py-3 bg-[#17224D]'>Dashboard</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </main>
            
        </body>
    )
}