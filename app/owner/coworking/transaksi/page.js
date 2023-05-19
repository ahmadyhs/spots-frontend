import Image from 'next/image';

export default function CoworkingTransaction() {
    return (
        <body className="grid grid-cols-5">
            <aside className="bg-blue-500 h-screen grid place-content-between">
                <div>
                    <div class="right flex flex-col items-center">
                        <div class="right flex flex-col items-center mt-10">
                            <Image src="/spots.png"  width={200} height={200} />
                        </div>
                    </div>
                    <p className='text-center m-5 text-3xl mb-10'>Coworking Space</p>
                    <button className="bg-slate-700 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-800 active:bg-slate-500">Data Coworking</button>
                    <button className="bg-teal-500 w-full text-white text-left font-semibold p-3 my-1 hover:bg-blue-800 active:bg-slate-500">Data Transaksi Coworking</button>
                </div>

                <div className='mb-10'>
                    <div className='flex flex-col items-center'>
                        <button className="rounded border border-white bg-transparent w-5/6 text-white text-left font-semibold p-3 my-1 hover:bg-blue-600 active:bg-slate-500">← Keluar</button>
                    </div>
                </div>
            </aside>
            

            <main className="col-span-4 bg-white">
                <div className='flex justify-center'>
                    <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA TRANSAKSI</p>
                </div>
                <div className='bg-white flex justify-center'>
                    <table className='w-11/12'>
                        <thead>
                            <tr className='w-full text-center bg-[#17224D] font-bold'>
                                <th className='w-1/5'>Nomor Transaksi</th>
                                <th className='w-1/5'>Tanggal Transaksi</th>
                                <th className='w-1/5'>Nama Coworking Space</th>
                                <th className='w-1/5'>Harga</th>
                                <th className='w-1/5'>Status Trnsaksi</th>
                            </tr>
                        </thead>
                        <tbody className='font-semibold text-center text-black bg-gray-300'>
                            <tr className=''>
                                <td>TNS-221030</td>
                                <td>30 Oktober 2023</td>
                                <td>RuangMeeting.id</td>
                                <td>Rp. 229.500</td>
                                <td className='p-4'>
                                    <div className='rounded-full px-6 py-3 bg-orange-400'>Menunggu Konfirmasi</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>TNS-220720</td>
                                <td>20 Juli 2023</td>
                                <td>Cowork</td>
                                <td>Rp. 150.000</td>
                                <td className='p-4'>
                                    <div className='rounded-full px-6 py-3 bg-green-400'>Transaksi Berhasil</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>TNS-220602</td>
                                <td>30 Juni 2022</td>
                                <td>Xwork</td>
                                <td>Rp. 350.500</td>
                                <td className='p-4'>
                                    <div className='rounded-full px-6 py-3 bg-green-400'>Transaksi Berhasil</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>TNS-220427</td>
                                <td>3 April 2023</td>
                                <td>Ruangku</td>
                                <td>Rp. 300.000</td>
                                <td className='p-4'>
                                    <div className='rounded-full px-6 py-3 bg-red-400'>Transaksi Gagal</div>
                                </td>
                            </tr>
                            <tr className=''>
                                <td>TNS-220202</td>
                                <td>2 Agustus 2022</td>
                                <td>Ruang Kita</td>
                                <td>Rp. 200.000</td>
                                <td className='p-4'>
                                    <div className='rounded-full px-6 py-3 bg-green-400'>Transaksi Berhasil</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                
            </main>
            
        </body>
    )
}