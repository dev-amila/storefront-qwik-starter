import { component$, useVisibleTask$ } from '@builder.io/qwik';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AdBanner } from './AdBanner';
import { AdBannerSimple } from './AdBannerSimple';

export default component$(() => {
	useVisibleTask$(() => {
		AOS.init({});
	});

	return (
		<div class="w-full max-w-7xl mx-auto md:px-4 px-0 mt-7">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
				<div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100" class="w-full h-full">
					<AdBanner
						title="Special Summer Sale!"
						description="Get up to 50% off on all premium products. Limited time offer."
						ctaText="Shop Now"
						targetUrl="/summer-sale"
						imageSrc="/assets/images/advertiesment/adimage2.webp"
						backgroundColor="bg-gradient-to-r from-orange-500 to-pink-500"
					/>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100" class="w-full h-full">
					<AdBannerSimple
						alt="Special Summer Sale!"
						targetUrl="/summer-sale"
						imageSrc="/assets/images/advertiesment/adimage3.png"
					/>
				</div>
			</div>
		</div>
	);
});
