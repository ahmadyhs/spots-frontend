import Image from 'next/image'
import Footer from "./Footer"
import Navbar from './Navbar'

export default function landing() {
    return (
    <main className=" flex w-full flex-col bg-white items-center justify-between">
      <title>Spots</title>
      <Image className="scale-x-100"
        src="/TXT.png" width={1920} height={658} priority alt='office'/>
      <section className='w-full'>
        <div className='absolute w-full items-center px-4 top-4 bg-transparent'>
          <Navbar />
        </div>
        <div className="max-h-screen relative overflow-hidden w-screen shadow-lg cursor-pointer">
        </div>
      </section>
      
      <section className="bg-[#027FFF] w-full border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
         Mengapa Harus Spots?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/shield.png"
              className="mx-auto w-auto h-auto"
              width={100}
              height={24}
              alt='shield'
            />
            <br></br>
              <p className="text-gray-800 text-base px-6 mb-5 text-center">
              Website terproteksi SSL dan pembayaran dilakukan melalui Payment Gateway terpercaya untuk menjamin keamanan transaksi.              </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/search.png"
              className="mx-auto w-auto h-auto"
              width={100}
              height={24}
              alt='search'
            />
            <br></br>
              <p className="text-gray-800 text-base px-6 mb-5 text-center">
              Kemudahan dalam mencari Coworking Space sesuai kebutuhan dengan fitur-fitur menarik, seperti pencarian berdasarkan jarak, detail informasi, dan lainnya.              </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/tag.png"
              className="mx-auto w-auto h-auto"
              width={100}
              height={24}
              alt='tag'
            />
            <br></br>
              <p className="text-gray-800 text-base px-6 mb-5 text-center">
              Harga sewa yang kompetitif dengan tambahan promo-promo menarik.               </p>
          </div>
        </div>

        <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/operator.png"
              className="mx-auto w-auto h-auto"
              width={100}
              height={24}
              alt='operator'
            />
            <br></br>
              <p className="text-gray-800 text-base px-6 mb-5 text-center">
              Customer Service kami akan siap membantu jika ada kendala saat pemesanan tempat ataupun hal lainnya.              </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white-50 dark:bg-white-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 ml-10 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#027FFF] ">Cari Coworking Space Sesuai Kebutuhanmu!</h2>
            <p className="mb-8 font-light lg:text-xl">Kami menghubungkanmu kepada penyedia Coworking Space terbaik hanya dengan jentikan jari. Buat pertemuan tak terlupakan bersama kolegamu menggunakan bantuan jasa kami yang mudah dan aman. </p>
          </div>
          <Image className="mx-auto scale-75" src="/login.png" width={770} height={1024} alt='hands' priority/>  
        </div>
      </div>
    </section>
    
    <section className="bg-[#19E8E0] w-full py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Bagaimana Alurnya?
        </h2>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
          <div className="flex-1 bg-[#19E8E0]  overflow-hidden  border-hidden">
            <br></br>
            <Image
                src="/city.png"
                className="mx-auto w-auto"
                width={100}
                height={24}
                alt='city'
              />
              <br></br>
            <div className="w-full font-bold text-center text-xl text-gray-800 px-6">
            Cari Tempat Favoritmu              </div>
            <p className="text-gray-800 text-base text-center px-6 mb-5">
            Pertama, cari Coworking Space sesuai kebutuhanmu.              </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-[#19E8E0]  overflow-hidden ">
            <br></br>
            <Image 
            src="/calender.png" 
            className="mt-4 mx-auto w-auto"
            width={100} 
            height={24}
            alt='calender'/>
             <br></br>
            <div className="w-full font-bold text-center text-xl text-gray-800 px-6">
            Lakukan Pemesanan              
            </div>
            <p className="text-gray-800 text-center text-base px-6 mb-5">
            Kedua, booking melalui website serta bayar menggunakan metode yang dipilih.</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-[#19E8E0]  overflow-hidden ">
          <br></br>
          <Image
                src="/people.png"
                className="mt-6 mx-auto w-auto"
                width={100}
                height={24}
                alt='people'
              />
          <br></br>
          <div className="w-full font-bold text-center text-xl text-gray-800 px-6">
            Nikmati Pengalaman Terbaikmu!              
          </div>
          <p className="text-gray-800 text-base text-center px-6 mb-5">
            Ketiga, cek status penyewaanmu dan bersiap untuk pengalaman terbaik.              </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </main>
    )
}