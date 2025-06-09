import { component$, useContext } from '@qwik.dev/core';
// import { Image } from 'qwik-image';
import HeroSwiper from '~/components/hero-swiper/HeroSwiper';
import { APP_STATE } from '~/constants';

import CollectionSlider from '~/components/collection-slider/CollectionSlider';
import AdBanners from '~/components/ad-banners/AdBanners';
import CollectionCard from '~/components/collection-card/CollectionCard';
import CollectionSliderQui from '~/components/collection-slider-qui/CollectionSliderQui';

export default component$(() => {
	const collections = useContext(APP_STATE).collections;

	const promoMessages = [
		{ id: 1, message: 'Free Shipping On Orders Over 5000 LKR' },
		{ id: 2, message: 'Shop More, Save More: Free Shipping Over $100!' },
		{ id: 3, message: 'Buy One, Get One 50% Off!' },
		{ id: 4, message: 'Limited Edition Release – Shop Now!' },
		{ id: 5, message: 'Holiday Sale – Up to 60% Off!' },
	];

	return (
		<div>
			{/* <div class="relative h-[600px]">
				<div class="absolute inset-0 overflow-hidden">
					<Image
						layout="fullWidth"
						class="h-full md:w-full"
						width="800"
						height="600"
						src={HOMEPAGE_IMAGE}
						alt="Background header photo of bicycle taken by Mikkel Bech"
					/>
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 mix-blend-overlay" />
				</div>
				<div class="absolute inset-0 bg-gray-900 opacity-50" />
				<div class="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
					<div class="relative bg-zinc-800 bg-opacity-0 rounded-lg p-0">
						<h1 class="text-6xl text-transparent bg-clip-text font-extrabold tracking-normal lg:text-6xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
							{$localize`Vendure Qwik Starter`}
						</h1>
					</div>

					<p class="mt-4 text-2xl text-white">
						{$localize`A headless commerce storefront starter kit built with`}{' '}
						<a
							href="https://www.vendure.io"
							target="_blank"
							class="text-blue-300 hover:text-blue-500"
						>
							Vendure
						</a>{' '}
						&{' '}
						<a
							href="https://qwik.builder.io/"
							target="_blank"
							class="text-[#4092ff] hover:text-red-500"
						>
							Qwik
						</a>
					</p>
				</div>
			</div> */}

			{/* <Hero /> */}
			{/* <HeroEmbla /> */}
			<HeroSwiper />

			<section class="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
				<div class="mt-4 flow-root">
					<div class="-my-2">
						<div class="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
							<div class="sm:px-6 lg:px-8 xl:px-0 pb-4">
								<h2 class="text-2xl font-light tracking-tight text-gray-900">{$localize`Shop by Category`}</h2>
							</div>
							{/* <div class="grid w-full justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8"> */}
							{/* <div class="swiper" ref={swiperRef}>
									<div class="swiper-wrapper ">
										{collections.map((collection) =>
											collection.featuredAsset ? (
												<div key={collection.id} class="swiper-slide">
													<CollectionCard collection={collection} />
												</div>
											) : null
										)}
									</div>
								</div> */}
							{/* <div class=""> */}
							{/* {collections.map((collection ) =>
									// <div  key={collection.id} class="w-full flex justify-center items-center">
									// 	<h1>{collection.message}</h1>
									// </div>
									collection.featuredAsset ? (
										<CollectionCard key={collection.id} collection={collection} />
									) : // <div key={collection.id}>{collection.name}</div>
									null
								)} */}
							{/* </div>  */}
							{/* <div class='w-full '>
								<p>fdjfldjfldsfjdlskjfsd fjdskljflkdsjf sdfkjfkldsjflkdjflkdjf jlkjkfjdfdlflhgdfjd ddsjflkdsjfldhfahf </p>
							</div>
							<div class='w-full '>
								<p>fdjfldjfldsfjdlskjfsd fjdskljflkdsjf sdfkjfkldsjflkdjflkdjf jlkjkfjdfdlflhgdfjd ddsjflkdsjfldhfahf </p>
							</div>
							<div class='w-full '>
								<p>fdjfldjfldsfjdlskjfsd fjdskljflkdsjf sdfkjfkldsjflkdjflkdjf jlkjkfjdfdlflhgdfjd ddsjflkdsjfldhfahf </p>
							</div>
							// </div> */}
							<div class="w-full">
								{/* <CollectionSlider collections={collections} /> */}
								<CollectionSliderQui />
								<AdBanners />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});
