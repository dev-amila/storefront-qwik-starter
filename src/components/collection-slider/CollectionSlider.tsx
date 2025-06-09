import { component$, useSignal, useVisibleTask$ } from '@qwik.dev/core';
// import { APP_STATE } from '~/constants';

import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Collection } from '~/generated/graphql';
import CollectionCardSlider from '../collection-card-slider/CollectionCardSlider';

interface IProps {
	collections: Collection[];
}

export default component$(({ collections }: IProps) => {
	const swiperRef = useSignal<HTMLDivElement>();
	// const collections = useContext(APP_STATE).collections;

	useVisibleTask$(() => {
		if (swiperRef.value && !swiperRef.value.classList.contains('swiper-initialized')) {
			new Swiper(swiperRef.value, {
				modules: [Autoplay],
				loop: true,
				slidesPerView: 6,
				breakpoints: {
					768: { slidesPerView: 4 },
					1024: { slidesPerView: 6 },
				},
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
			});
		}
	});
	return (
		// <>
		// 	<div class="swiper" ref={swiperRef}>
		// 		<div class="swiper-wrapper ">
		// 			{collections.map((collection: Collection) =>
		// 				collection.featuredAsset ? (
		// 					<div key={collection.id} class="swiper-slide">
		// 						<CollectionCardSlider collection={collection} />
		// 					</div>
		// 				) : null
		// 			)}
		// {/* <div class="swiper-slide"> one </div>
		// <div class="swiper-slide"> two  </div>
		// <div class="swiper-slide"> three </div>
		// <div class="swiper-slide"> four </div>
		// <div class="swiper-slide"> five </div>
		// <div class="swiper-slide"> six </div>
		// <div class="swiper-slide"> seven </div>
		// <div class="swiper-slide"> eight  </div>
		// <div class="swiper-slide"> night </div>
		// <div class="swiper-slide"> ten </div>
		// <div class="swiper-slide"> eleven </div> */}

		// 	{/* </div>
		// 	</div>
		// </> */}
		<div class="w-full flex justify-center items-center">
			<div class="swiper" ref={swiperRef}>
				<div class="swiper-wrapper">
					{collections.map((collection: Collection) =>
						collection.featuredAsset ? (
							<div key={collection.id} class="swiper-slide">
								<CollectionCardSlider collection={collection} />
								{/* <div>
								<p>{collection.name}</p>
							</div> */}
							</div>
						) : null
					)}
				</div>
			</div>
		</div>
	);
});
