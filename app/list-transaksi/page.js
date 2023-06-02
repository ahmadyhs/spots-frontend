import Navbar from '../Navbar';

    export default function ListTransaksi() {
    return (
        <body className='bg-white'>
        <title>Riwayat Transaksi</title>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
            <Navbar/>
        </div>
        
        <p className='text-center bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
            Daftar Transaksi</p>
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
        
        </body>
    )
}