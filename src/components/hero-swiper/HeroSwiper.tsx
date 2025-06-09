import { component$, useVisibleTask$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default component$(() => {
	useVisibleTask$(() => {
		Swiper.use([Autoplay]);
		new Swiper('.swiper', {
			loop: true,
			slidesPerView: 1,
			//   spaceBetween: 16,
			// breakpoints: {
			// 	768: {
			// 		slidesPerView: 2,
			// 	},
			// 	1024: {
			// 		slidesPerView: 4,
			// 	},
			// },
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
		});
	});

	const bannerData = [
		{
			id: 1,
			image: '/banner1.png',
			imageMobile: '/banner-mobile1.png',
			alt: 'Banner 1',
			link: '',
		},
		{
			id: 2,
			image: '/banner2.png',
			imageMobile: '/banner-mobile2.png',
			alt: 'Banner 2',
			link: '',
		},
		{
			id: 3,
			image: '/banner3.png',
			imageMobile: '/banner-mobile3.png',
			alt: 'Banner 3',
			link: '',
		},
	];

	return (
		<div class="swiper">
			<div class="swiper-wrapper ">
				{bannerData.map((banner) => (
					<div key={banner.id} class="swiper-slide">
						<div class="md:m-4">
							<img
								src={banner.image}
								alt={banner.alt}
								class="w-full md:rounded-2xl"
								style={{ width: '100%' }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
});
