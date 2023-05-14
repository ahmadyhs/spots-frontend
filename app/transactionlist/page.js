import { Navbar } from '../Navbar'
import Footer from "../Footer";
;

export default function transactionList() {
    return (
         <body className='bg-white'>
        <div className='flex w-full flex-col items-center justify-between p-4 bg-white'>
        <Navbar/>
        </div>
        <p className='bg-white text-3xl text-[#17224D] py-8 pl-12 font-bold'>
         <center> Cari Workspace </center>
        </p>
        
        <Footer/>
        </body>
    )
}