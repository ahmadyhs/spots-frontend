import Image from 'next/image'

export default function Signup(){
    return(
        <div>
            <title>Sign Up</title>

            <div className="bg-blue-950 grid lg:grid-cols-2 h-screen">  
                <div className='m-auto'>
                    <Image src="/spots.png"
                    width={735} height={691} priority/>
                </div>
                <div className="bg-white right flex flex-col justify-evenly"> 
                    <div className="text-center py-10 text-black"> 
                        <h1 className="text-xl font-bold mb-2">Registrasi Akun</h1>
                        <p>Isi data diri Anda!</p>
                        <form action="/api/form" method="post">
                            <div>
                                <input type="text" id="nama_lengkap" name="nama_lengkap" placeholder="Nama Lengkap" required 
                                className="border rounded-xl w-10/12 py-2 text-center m-5"/>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder="Alamat Email" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"/>
                            </div>
                            <div>
                                <input type="password" id="sandi" name="sandi" placeholder="Kata Sandi" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"/>
                            </div>
                            <div>
                                <input type="password" id="ulang_sandi" name="ulang_sandi" placeholder="Ulangi Kata Sandi" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"/>
                            </div>
                            <div>
                                <input type="text" id="nomor_telepon" name="nomor_telepon" placeholder="Nomor Telepon" required
                                className="border rounded-xl w-10/12 py-2 text-center m-5"/>
                            </div>
                        </form>
                        <button className="bg-blue-950 text-white rounded-2xl py-3 px-20 font-bold m-5">Daftar Akun</button>
                    </div>
                </div>
            </div>
        </div>
    )
}