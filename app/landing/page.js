import Image from 'next/image'
import { Navbar } from '../Navbar'
import Footer from "../Footer";
;

export default function landing() {
    return (
    <main className=" flex w-full flex-col items-center justify-between p-24">
                 <Navbar />
                 <section>
                 <div class="max-h-screen w- srelative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                 <Image
                className="mx-auto scale-100"
                src="/TXT.png"
                width={1225}
            height={420}
                />
                </div>
                </section>
                 <section class="bg-[#027FFF] border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
         Mengapa Harus Spots?
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/shield.png"
              className="mx-auto"
              width={100}
              height={24}
            />
            <br></br>
              <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Website terproteksi SSL dan pembayaran dilakukan melalui Payment Gateway terpercaya untuk menjamin keamanan transaksi.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/search.png"
              className="mx-auto"
              width={100}
              height={24}
            />
            <br></br>
              <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Kemudahan dalam mencari Coworking Space sesuai kebutuhan dengan fitur-fitur menarik, seperti pencarian berdasarkan jarak, detail informasi, dan lainnya.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/tag.png"
              className="mx-auto"
              width={100}
              height={24}
            />
            <br></br>
              <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Harga sewa yang kompetitif dengan tambahan promo-promo menarik.               </p>
          </div>
        </div>
        <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <br></br>
          <Image
              src="/operator.png"
              className="mx-auto"
              width={100}
              height={24}
            />
            <br></br>
              <p class="text-gray-800 text-base px-6 mb-5 text-center">
              Customer Service kami akan siap membantu jika ada kendala saat pemesanan tempat ataupun hal lainnya.              </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white-50 dark:bg-white-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-[#027FFF] ">Cari Coworking Space Sesuai Kebutuhanmu!</h2>
                    <p class="mb-8 font-light lg:text-xl">Kami menghubungkanmu kepada penyedia Coworking Space terbaik hanya dengan jentikan jari. Buat pertemuan tak terlupakan bersama kolegamu menggunakan bantuan jasa kami yang mudah dan aman. </p>
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
                <Image
            className="mx-auto scale-75"
            src="/login.png"
            width={770} height={1024} priority/>  
            </div>
            </div>
           </section>
                 <section class="bg-[#19E8E0] border-b py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Bagaimana Alurnya?
        </h2>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
          <div class="flex-1 bg-[#19E8E0]  overflow-hidden  border-hidden">
            <br></br>
          <Image
              src="/city.png"
              className="mx-auto"
              width={100}
              height={24}
            />
             <br></br>
              <div class="w-full font-bold text-center text-xl text-gray-800 px-6">
              Cari Tempat Favoritmu              </div>
              <p class="text-gray-800 text-base text-center px-6 mb-5">
              Pertama, cari Coworking Space sesuai kebutuhanmu.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-[#19E8E0]  overflow-hidden ">
           <br></br>
        <Image
              src="/calender.png"
              className="mx-auto"
              width={100}
              height={24}
            />
             <br></br>
              <div class="w-full font-bold text-center text-xl text-gray-800 px-6">
              Lakukan Pemesanan              </div>
              <p class="text-gray-800 text-center text-base px-6 mb-5">
              Kedua, booking melalui website serta bayar menggunakan metode yang dipilih.              </p>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div class="flex-1 bg-[#19E8E0]  overflow-hidden ">
        <br></br>
        <Image
              src="/people.png"
              className="mx-auto"
              width={100}
              height={24}
            />
             <br></br>
              <div class="w-full font-bold text-center text-xl text-gray-800 px-6">
              Nikmati Pengalaman Terbaikmu!              </div>
              <p class="text-gray-800 text-base text-center px-6 mb-5">
              Ketiga, cek status penyewaanmu dan bersiap untuk pengalaman terbaik.              </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
                 </main>
    )
}