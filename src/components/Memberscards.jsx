import React from 'react'
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';



const Memberscards = () => {
	return (
		<div className='w-full py-[10rem] bg-white px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				<div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
					<p className='text-center text-4xl font-bold'>$149</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
						<p className='py-2 border-b mx-8'>1 Granted User</p>
						<p className='py-2 border-b mx-8'>Send up to 2 GB</p>
					</div>
					<button className='bg-[#00df9a] text-black w-[200px] font-bold rounded-md mx-auto my-6 px-6 py-3'>Start Trail</button>
				</div>
				<div className='w-full shadow-xl bg-slate-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
					<p className='text-center text-4xl font-bold'>$149</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
						<p className='py-2 border-b mx-8'>1 Granted User</p>
						<p className='py-2 border-b mx-8'>Send up to 2 GB</p>
					</div>
					<button className='bg-black text-[#00df9a] w-[200px] font-bold rounded-md mx-auto my-6 px-6 py-3'>Start Trail</button>
				</div>
				<div className='w-full shadow-xl flex flex-col p-4 my-8 md:my-0  rounded-lg hover:scale-105 duration-300'>
					<img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
					<h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
					<p className='text-center text-4xl font-bold'>$149</p>
					<div className='text-center font-medium'>
						<p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
						<p className='py-2 border-b mx-8'>1 Granted User</p>
						<p className='py-2 border-b mx-8'>Send up to 2 GB</p>
					</div>
					<button className='bg-[#00df9a] text-black w-[200px] font-bold rounded-md mx-auto my-6 px-6 py-3'>Start Trail</button>
				</div>
			</div>

			{/* <cards />
			<cards /> */}

		</div>
	)
}

export default Memberscards