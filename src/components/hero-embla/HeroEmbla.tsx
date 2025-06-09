import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

export default component$(() => {
	const emblaRef = useSignal<HTMLElement>();

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

	useVisibleTask$(() => {
		if (emblaRef.value) {
			const options = { loop: true, speed: 500, autoplay: true, delay: 500 };
			const plugins = [Autoplay()];

			EmblaCarousel(emblaRef.value, options, plugins);
		}
	});

	return (
		<div class="embla" ref={emblaRef}>
			<div class="embla__container" style="display: flex;">
				{bannerData.map((banner) => (
					<div class="embla__slide" key={banner.id}>
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
