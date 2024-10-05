'use client'
import React from "react";
import { FaHeart } from "react-icons/fa";

import PropTypes from "prop-types";
import Search from "./Search";
import { useState } from "react";

const Product = ({ product,handleClickFavorites }) => {
	
	return (
		<div className="col-span-12 md:col-span-6 lg:col-span-4">
			<div className="bg-white dark:bg-slate-800 shadow border dark:border-slate-700 rounded-xl p-4 pb-0">
				<div className="bg-gray-100 dark:bg-slate-700 rounded flex justify-center items-center min-h-[265px] relative p-12 w-full">
					{product.isNew && (
						<h6 className="bg-cyan-400 text-white absolute top-4 left-0 rounded-r-md px-6 py-2 mb-0 font-medium">
							New
						</h6>
					)}
					<button
  onClick={() => handleClickFavorites(product.id)}
  className="absolute top-2.5 right-2.5 bg-white dark:bg-slate-800 rounded-full text-base flex justify-center items-center space-x-2 px-4 py-2 cursor-pointer shadow-lg hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
>
  {product.isFavorite ? (
    <FaHeart className="text-gray-500" />
  ) : (
    <FaHeart className="text-red-600" />
  )}
  <span className="text-gray-800 dark:text-white">
    Favorite
  </span>
</button>

					<img src={product.image} alt="" className="max-w-full h-auto" />
					<button className="absolute bottom-4 right-0 rounded-l-md bg-blue-600 text-white hover:bg-opacity-90 font-bold py-2 px-6">
						Add to cart
					</button>
				</div>
				<div className="py-6 px-1">
					<div className="flex justify-between items-center">
						<div>
							<a href="#!">
								<h6 className="hover:text-blue-600 text-[17px] font-medium mb-1">
									{product.name}
								</h6>
							</a>
							
						</div>
						<div>
							<p className="text-3xl font-bold">${product.price}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.shape({
	
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		isNew: PropTypes.bool.isRequired,
	
	}).isRequired,
	
};

const ProductPage = () => {
	const products = [
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_1.png",
			name: "Baby Truck",
			rating: 4.5,
			price: 676,
			isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_2.png",
			name: "Rocket",
			rating: 3.5,
			price: 349,
			  isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
			name: "Toy Car",
			rating: 4,
			price: 199,
			  isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_4.png",
			name: "Superhero Action Figure",
			rating: 4.2,
			price: 499,
			isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_5.png",
			name: "Building Blocks",
			rating: 4.8,
			price: 149,
			  isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_6.png",
			name: "Plush Bear",
			rating: 4.6,
			price: 249,
			  isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_7.png",
			name: "Dollhouse",
			rating: 4.4,
			price: 899,
			isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_8.png",
			name: "Remote Control Helicopter",
			rating: 4.1,
			price: 599,
			  isFavorite: true,
		},
		{
			id: crypto.randomUUID(),
			image: "https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_3.png",
			name: "Art Set",
			rating: 4.7,
			price: 349,
			  isFavorite: true,
		},
	];
	const [filteredProducts, setFilteredProducts] = useState(products);

	function handleClickSearch(searchText){
        setFilteredProducts(filteredProducts.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase())));
    }

	function handleClickFavorites(id){
        setFilteredProducts(filteredProducts.map((product)=>{
            if(product.id === id){
				product.isFavorite =!product.isFavorite;
            }
            return product
        }))
    }

	return (
		<section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			{/* shapes */}
			<div className="absolute top-0 right-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape2.png"
					alt=""
				/>
			</div>
			<div className="absolute top-1/2 left-0">
				<img
					src="https://cdn.easyfrontend.com/pictures/ecommerce/grid_9_shape1.png"
					alt=""
				/>
			</div>

			<div className="relative px-4 sm:px-20">
				<h2 className="text-3xl md:text-5xl font-bold leading-tight ">
					Popular Products
				</h2>
				<Search onSearch={handleClickSearch}/>
				<div className="grid grid-cols-12 gap-6 mt-12">
					{filteredProducts.map((product, index) => (
						<Product key={index} product={product} handleClickFavorites={handleClickFavorites} />
					))}
				</div>
			</div>
		</section>
	);
};
export default ProductPage;


