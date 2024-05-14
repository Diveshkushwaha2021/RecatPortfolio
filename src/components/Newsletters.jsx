import React from 'react'

const Newsletters = () => {
	return (
		<div className='w-full py-16 text-white px-4'>
			<div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
				<div className='lg:col-span-2 my-4'>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
					<p>Sign up to our newletter and stay up to date.</p>
				</div>
				<div className='my-4'>
					<div className='flex flex-col sm:flex-row items-center justify-between'>
						<input className='rounded-md h-[40px] pl-2 w-full' type="email" placeholder='Enter Email' />
						<button className='bg-[#00df9a] rounded-md h-[40px] w-[150px] text-black ml-4  my-6 px-6 py-2'>Notify Mef</button>
					</div>
					<p className='text-white float-right'>We care bout the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
				</div>
			</div>
		</div>
	)
}

export default Newsletters