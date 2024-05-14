import React from 'react';
import { FaFacebookSquare, FaInstagram, FaGithubSquare, FaTwitterSquare, FaDribbbleSquare } from 'react-icons/fa'

const Footer = () => {
	return (

		<div className='max-w-[1240px] py-16 px-4 mx-auto grid lg:grid-cols-3 gap-3 text-gray-300	'>
			<div className='w-[320px]'>
				<h1 className='w-full text-2xl font-bold text-[#00df9a]'>Footer.</h1>
				<p className='my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditiis ipsa, quos dolores, magni labore et cum maxime laudantium vel laborum unde, quisquam nemo eveniet numquam dolorem commodi ex nihil.</p>
				<div className='flex gap-4 md:w-[75%] my-6 justify-between'>
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaGithubSquare size={30} />
					<FaTwitterSquare size={30} />
					<FaDribbbleSquare size={30} />
				</div>
			</div>
			<div className='lg:col-span-2 flex justify-between mt-6'>
				<div>
					<h6 className='font-medium text-gray-400'>Solutions</h6>
					<ul>
						<li className='py-2 text-sm'>Analytics</li>
						<li className='py-2 text-sm'>Marketing</li>
						<li className='py-2 text-sm'>Commerce</li>
						<li className='py-2 text-sm'>Insights</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400'>Support</h6>

					<ul>
						<li className='py-2 text-sm'>Pricing</li>
						<li className='py-2 text-sm'>Documentation</li>
						<li className='py-2 text-sm'>Guides</li>
						<li className='py-2 text-sm'>API Status</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400'>Complany</h6>
					<ul>
						<li className='py-2 text-sm'>About</li>
						<li className='py-2 text-sm'>Blog</li>
						<li className='py-2 text-sm'>Jobs</li>
						<li className='py-2 text-sm'>Press</li>
						<li className='py-2 text-sm'>Carrers</li>
					</ul>
				</div>
				<div>
					<h6 className='font-medium text-gray-400'>Legal</h6>
					<ul>
						<li className='py-2 text-sm'>Claim</li>
						<li className='py-2 text-sm'>Policy</li>
						<li className='py-2 text-sm'>Term</li>
					</ul>
				</div>
			</div>
		</div>

	)
}

export default Footer