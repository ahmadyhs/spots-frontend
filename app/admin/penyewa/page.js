import Image from 'next/image';

export default function Admin() {
    return (
        <body className="grid grid-cols-5">
            <aside className="bg-[#17224D] h-screen grid place-content-between">
                <div>
                    <div class="right flex flex-col items-center">
                        <div class="right flex flex-col items-center mt-10">
                            <Image src="/spots.png"  width={200} height={200} />
                        </div>
                    </div>
                    <p className='text-center m-5 text-3xl mb-10'>Admin</p>
                    <button className="bg-slate-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Penyewa</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Penyedia</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Transaksi</button>
                    <button className="bg-blue-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">Data Coworking</button>
                </div>

                <div className='mb-10'>
                    <div className='flex flex-col items-center'>
                        <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">← Keluar</button>
                    </div>
                </div>
            </aside>
            

            <main className="col-span-4 bg-white">
                <div className='flex justify-center'>
                    <p className='mt-10 text-black font-semibold text-3xl'>DATA PENYEWA</p>
                </div>

                <div className='flex justify-center'>
                    <table className="m-10 w-11/12"> 
                        <thead>
                            <tr className="bg-[#3C4158] text-center">
                                <th className="p-2 w-1/12 border border-black">ID</th>
                                <th className="p-2 w-2/12 border border-black">Nama Depan</th>
                                <th className="p-2 w-2/12 border border-black">Nama Belakang</th>
                                <th className="p-2 w-4/12 border border-black">Email</th>
                                <th className="p-2 w-3/12 border border-black">Nomor Telepon</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-black">
                                <td className="p-2 border border-black"></td>
                                <td className="p-2 border border-black"></td>
                                <td className="p-2 border border-black"></td>
                                <td className="p-2 border border-black"></td>
                                <td className="p-2 border border-black"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-evenly">
                    <button className="bg-green-500 text-black font-semibold p-3 w-1/12 hover:bg-green-600 active:bg-green-700">Tambah</button>
                    <button className="bg-yellow-300 text-black font-semibold p-3 w-1/12 hover:bg-yellow-400 active:bg-yellow-500">Edit</button>
                    <button className="bg-red-500 text-black font-semibold p-3 w-1/12 hover:bg-red-600 active:bg-red-700">Hapus</button>
                </div>
            </main>
            
        </body>
    )
}