import Image from 'next/image'

export default function login() {
    return (
      <body class="max-h-screen">
        <title>Login</title>
        <div class="bg-white grid lg:grid-cols-2 h-screen">
          <div class="bg-white right flex flex-col text-center">
            <Image className="mx-auto scale-75" src="/spots-blue.png"
            width={575} height={477} priority/>

            <h2 class="text-black text-xl font-semibold text-center mb-10">Masuk ke akun Anda!</h2>
            
            <form action="#" method="POST">
              <div>
                <input type="email" name="" id="" placeholder="Email Anda" 
                className="border rounded-xl w-11/12 py-2 text-center m-3" autofocus autocomplete required></input>
              </div>

              <div class="mt-4">
                <input type="password" name="" id="" placeholder="Password Anda" minlength="6" 
                className="border rounded-xl w-11/12 py-2 text-center m-3" required></input>
              </div>

              <div class="flex justify-between mx-10">
                <span className="flex">
                  <input type="checkbox" id="remember" name="remember" className="m-2"></input>
                  <p className="text-black font-semibold">Ingat Saya</p>
                </span>
                <a href="#" class="text-right font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Lupa Password?</a>
              </div>

              <div className='flex justify-between mx-20'>
                <button type="submit" class="block bg-blue-950 border hover:bg-blue-400 text-white font-semibold rounded-lg
                      px-20 py-3 mt-6">Masuk</button>        
                <button type="submit" class="block bg-gray-100 border hover:bg-blue-400 text-blue-950 font-semibold rounded-lg
                      px-20 py-3 mt-6">Daftar</button>   
              </div>
            </form>
          </div>

          <div className="w-screen">
            <Image
            className="bg-cover h-screen w-1/2"
            src="/login.png"
            width={770} height={1024} priority/>           
          </div>
        </div>
      </body>
    )
}