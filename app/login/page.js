import Image from 'next/image'

export default function login() {
    return (
        <body class="max-h-screen">
  <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="md:w-1/2 px-5">
        <h2 class="text-2xl font-bold text-[#002D74]">Masuk ke akun anda</h2>
        <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
          <span class = "ml-4">Login with Google</span>
        </button>
        <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-500" />
          <p class="text-center text-sm">atau</p>
          <hr class="border-gray-500" />
        </div>
        <form class="mt-6" action="#" method="POST">
          <div>
            <input type="email" name="" id="" placeholder="Email Anda" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
          </div>

          <div class="mt-4">
            <input type="password" name="" id="" placeholder="Password Anda" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 
                  focus:bg-white focus:outline-none" required></input>
          </div>

          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>

          <button type="submit" class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Masuk</button>
                
        </form>

       

      
        <div class="text-sm flex justify-between items-center mt-3">
          <button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Daftar</button>
        </div>
      </div>

      <div class="w-1/2 md:block hidden ">
                <Image
                className="rounded-2xl"
                src="/login.jpg"
                width={1280}
            height={760}
          priority
                />
                  
                </div>
      </div>

  </section>
  </body>
    )
}