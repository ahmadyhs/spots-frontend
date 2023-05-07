import Image from 'next/image';

function Footer() {
	return (
		<>
			<div className="bg-[#17224D] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-4 ">
                <div>
          <Image src="/SPOTS-white.svg" height={420} width={220}/>
        </div>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#FFFFFF] font-bold text-2xl pb-4">Follow Us</p>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Facebook
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Instagram
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Twitter
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Youtube
						</li>
					</ul>
				</div>
				<div className="p-4">
					<ul>
						<p className="text-[#FFFFFF] font-bold text-2xl pb-4">Support</p>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						+021 2038 157
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						SCBD, Jakarta
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						No. 87 (SPOTS)
						</li>
						<li className="text-[#FFFFFF] text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
						customer.support@spots.id 
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-black-10 font-semibold">
                Copyright © 2023 SPOTS. All rights reserved.
				</h1>
			</div>
		</>
	);
}

export default Footer;