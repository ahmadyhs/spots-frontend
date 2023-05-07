import Image from 'next/image'
import { Navbar } from '../Navbar';

export default function landing() {
    return (
    <main className="flex w-full flex-col items-center justify-between p-24">
                 <Navbar />
                 <section>
                 <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                 <Image
                className="rounded-2xl"
                src="/login.jpg"
                width={1225}
            height={420}
                />
                	<div class="absolute top-14 left-14 px-6 py-4">
                 <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Spots Website Layanan Coworking Space
                 </h1>
                </div>
                </div>
                </section>
                 <section class="bg-[#19E8E0] border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
         Mengapa Harus Spots?
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Website terproteksi SSL dan pembayaran dilakukan melalui Payment Gateway terpercaya untuk menjamin keamanan transaksi.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Kemudahan dalam mencari Coworking Space sesuai kebutuhan dengan fitur-fitur menarik, seperti pencarian berdasarkan jarak, detail informasi, dan lainnya.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Harga sewa yang kompetitif dengan tambahan promo-promo menarik.               </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Customer Service kami akan siap membantu jika ada kendala saat pemesanan tempat ataupun hal lainnya.              </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[#FFFFFF] border-b py-8" >
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-[#027FFF]-800 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <div class="mb-3">
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3" />

    <button
      class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
      type="button"
      id="button-addon3"
      data-te-ripple-init>
      Cari
    </button>
  </div>
</div>
          </div>
        </div>    
    </div>
    </section>
                 <section class="bg-[#19E8E0] border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Bagaimana Alurnya?
        </h2>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
              Cari Tempat Favoritmu              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Pertama, cari Coworking Space sesuai kebutuhanmu.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
              Lakukan Pemesanan              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Kedua, booking melalui website serta bayar menggunakan metode yang dipilih.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full font-bold text-xl text-gray-800 px-6">
              Nikmati Pengalaman Terbaikmu!              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
              Ketiga, cek status penyewaanmu dan bersiap untuk pengalaman terbaik.              </p>
          </div>
        </div>
      </div>
    </section>
                 </main>
    )
}