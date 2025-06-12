import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export default component$(() => {
	useVisibleTask$(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		if (typeof window !== 'undefined') {
			ScrollTrigger.create({
				trigger: '.fade-in',
				start: 'top 60%',
				toggleActions: 'play none none reverse',
				onEnter: () => {
					gsap.from('.fade-in > div', {
						opacity: 0,
						y: 30,
						duration: 0.3,
						stagger: 0.2,
					});
				},
			});
			ScrollTrigger.create({
				trigger: '.zoom-in',
				start: 'top 60%',
				toggleActions: 'play none none reverse',
				onEnter: () => {
					gsap.from('.zoom-in', {
						scale: 0.5,
						opacity: 0,
						duration: 0.3,
						ease: 'power2.out',
					});
				},
			});
		}
	});

	return (
		<div class="flex">
			<div class="w-full">
				<h2 class="text-2xl  font-bold mb-4">Recommended Products</h2>
				<div class="flex flex-col  md:flex-row md:gap-0 gap-4">
					<div class="flex-none w-64 bg-gray-100  shadow-sm mr-6">
						<img
							src={`./assets/images/advertiesment/flashsale.png`}
							alt={`Product `}
							class="w-full rounded-lg h-full  zoom-in object-cover"
						/>
					</div>
					<div class=" flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  fade-in">
						{[...Array(8)].map((_, index) => (
							<div key={index} class="border  rounded-lg shadow-lg">
								<img
									src={`/eniko-kis.jpg`}
									alt={`Product ${index + 1}`}
									class="w-full  rounded-t-lg  object-cover "
								/>
								<div class="flex flex-col p-2 items-start">
									<h3 class="text-lg font-medium">Product {index + 1}</h3>
									<p class="text-gray-600">$19.99</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
});
