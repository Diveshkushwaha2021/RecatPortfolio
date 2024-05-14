import React from "react";
import laptop from "../assets/laptop.jpg"

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
				<div className="flex flex-col justify-center items-left">
					<p className="md:text-2xl text-xl font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
					<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
					<p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At consequuntur nam culpa, corporis nostrum quibusdam id! Minus, reiciendis tenetur doloribus, voluptate, totam quia fugit inventore aliquid nam vitae temporibus esse!</p>
					<button className="bg-[#000300] w-[200px] font-medium rounded-md h-[40px] my-6 mx-auto px-5 text-[#00df9a]">Get Started</button>
				</div>
			</div>
		</div>
	)
}

export default Analytics