import { component$ } from '@qwik.dev/core';
import { Image } from 'qwik-image';
import Price from './Price';

export default component$(
	({ productAsset, productName, slug, priceWithTax, currencyCode, collection }: any) => {
		// console.log(id);

		return (
			<div class=" relative flex flex-col items-center justify-between w-full max-w-xs  bg-white border border-gray-50 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300">
				<a class="flex flex-col mx-auto" href={`/products/${slug}/`}>
					<Image
						layout="fixed"
						class=" flex-grow rounded-t-lg object-cover aspect-[7/8]"
						width="200"
						height="200"
						src={productAsset?.preview + '?w=300&h=400&format=webp'}
						alt={`Image of: ${productName}`}
					/>
					<div class="absolute m-1 left-1  p-1 text-sm font-medium  bg-blue-500 text-white rounded  ">
						{collection}
					</div>
					{/* <div class="h-2" /> */}
					<div class="flex w-full flex-col items-start justify-between p-2">
						<div class="text-sm text-gray-700">{productName}</div>
						<Price
							priceWithTax={priceWithTax}
							currencyCode={currencyCode}
							forcedClass="text-sm text-green-500  text-gray-900"
						/>
					</div>
				</a>
				<div class="flex px-2 py-2 w-full gap-1 justify-between items-center">
					<button
						onClick$={(e) => {
							e.stopPropagation();
						}}
						class="card-btn group flex flex-1 bg-orange-500 hover:bg-blue-600 text-white items-center justify-center gap-1 md:flex-1 p-2 shadow-sm rounded-md transition-colors text-sm"
					>
						<span class="flex card-btn-span">Buy Now</span>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-wallet"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
							<path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
						</svg>
					</button>

					<button
						onClick$={(e) => {
							e.stopPropagation();
						}}
						class="group flex-none flex p-2 items-center justify-center  bg-white  hover:bg-orange-500 shadow-lg  rounded-md transition-colors"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus text-gray-500 group-hover:text-white"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
							<path d="M12.5 17h-6.5v-14h-2" />
							<path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
							<path d="M16 19h6" />
							<path d="M19 16v6" />
						</svg>
					</button>
				</div>
			</div>
		);
	}
);
