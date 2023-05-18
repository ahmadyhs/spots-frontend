import Image from 'next/image'

export default function Login() {
    return (
      <body class="h-screen">
        <title>Login</title>
        <div class="overflow-hidden bg-white grid lg:grid-cols-2 h-full">
          <div class="bg-white right flex h-fit justify-center flex-col text-center">
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

          <div className="">
            <Image
            className="h-full w-full"
            src="/login.png"
            width={770} height={1024} priority/>           
          </div>
        </div>
      </body>
    )
}