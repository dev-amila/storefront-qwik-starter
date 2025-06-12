import { $, component$, useSignal } from '@qwik.dev/core';
// import { APP_STATE } from '~/constants';
import { Image } from 'qwik-image';
import { NewsletterModal } from '../news-letter-modal/NewsLetterModal';
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
// } from 'lucide';
// Feather icons replaced with inline SVGs for Qwik compatibility
const Facebook = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		viewBox="0 0 24 24"
	>
		<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.28l.72-4h-4V7a1 1 0 0 1 1-1h3z" />
	</svg>
);
const Twitter = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		viewBox="0 0 24 24"
	>
		<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-4.18 1.81-6.29 2.29A4.48 4.48 0 0 0 3 7.5v1A10.66 10.66 0 0 1 1 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
	</svg>
);
const Instagram = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		viewBox="0 0 24 24"
	>
		<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
	</svg>
);
const Linkedin = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		viewBox="0 0 24 24"
	>
		<rect x="2" y="9" width="4" height="12" />
		<circle cx="4" cy="4" r="2" />
		<rect x="8" y="9" width="8" height="12" />
		<path d="M16 9v-2a4 4 0 0 1 8 0v2" />
	</svg>
);
const Youtube = () => (
	<svg
		width="20"
		height="20"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		viewBox="0 0 24 24"
	>
		<path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.48C18.88 4 12 4 12 4s-6.88 0-8.6.48A2.78 2.78 0 0 0 1.46 6.42 29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.94C5.12 20 12 20 12 20s6.88 0 8.6-.48a2.78 2.78 0 0 0 1.94-1.94A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
		<polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
	</svg>
);

export default component$(() => {
	const modalVisible = useSignal(false);
	const closeModal = $(() => {
		modalVisible.value = false;
	});

	// const collections = useContext(APP_STATE).collections.filter(
	// 	(item) => item.parent?.name === '__root_collection__' && !!item.featuredAsset
	// );

	// const navigation = {
	// 	support: [
	// 		{ name: $localize`Help`, href: '#' },
	// 		{ name: $localize`Track order`, href: '#' },
	// 		{ name: $localize`Shipping`, href: '#' },
	// 		{ name: $localize`Returns`, href: '#' },
	// 	],
	// 	company: [
	// 		{ name: $localize`About`, href: '#' },
	// 		{ name: $localize`Blog`, href: '#' },
	// 		{ name: $localize`Corporate responsibility`, href: '#' },
	// 		{ name: $localize`Press`, href: '#' },
	// 	],
	// };

	return (
		<footer class="border-t border-orange-300">
			<div class="max-w-7xl mx-auto pt-12 px-4 sm:px-6 lg:pt-16 lg:px-8 ">
				{/* <div class="xl:grid xl:grid-cols-3 xl:gap-8">
					<div class="grid grid-cols-2 gap-8 xl:col-span-2">
						<div class="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">{$localize`Shop`}</h3>
								<ul class="mt-4 space-y-4">
									{collections.map((collection) => (
										<li key={collection.id}>
											<a
												class="text-base text-gray-500 hover:text-gray-600"
												href={`/collections/${collection.slug}`}
												key={collection.id}
											>
												{collection.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div class="mt-12 md:mt-0">
								<h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
									{$localize`Support`}
								</h3>
								<ul class="mt-4 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<a href={item.href} class="text-base text-gray-500 hover:text-gray-600">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div class="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
									{$localize`Company`}
								</h3>
								<ul class="mt-4 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a href={item.href} class="text-base text-gray-500 hover:text-gray-600">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div class="mt-8 xl:mt-0">
						<h3 class="text-sm font-semibold text-gray-500 tracking-wider uppercase">
							{$localize`Subscribe to our newsletter`}
						</h3>
						<p class="mt-4 text-base text-gray-500">
							{$localize`Be the first to know about exclusive offers & deals.`}
						</p>
						<div class="mt-4 sm:flex sm:max-w-md">
							<label id="email-subscription" class="sr-only">
								Email address
							</label>
							<input
								type="email"
								autoComplete="email"
								required
								class="input-text"
								placeholder={$localize`Enter your email`}
								aria-labelledby="email-subscription"
							/>
							<div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
								<button class="btn-primary" onClick$={() => {}}>
									{$localize`Subscribe`}
								</button>
							</div>
						</div>
					</div>
				</div>
					 */}
				<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div class="flex flex-col space-y-6">
						<a href="/">
							<Image
								src="/logo.svg"
								alt="Logo"
								class=" "
								width={150}
								height={100}
								layout="constrained"
							/>
						</a>

						<div class="text-sm text-purple-800">
							<p>No. 464C, Pannipitiya Road,</p>
							<p>Pelawatte, Battaramulla.</p>
						</div>

						<div>
							<p class="text-sm text-purple-800 font-semibold">HOTLINE</p>
							<p class="text-xl text-purple-800 font-bold">+94 11 2 866 676</p>
						</div>

						<div class="flex space-x-4">
							<a href="#" class="text-purple-800 hover:text-purple-600">
								<Facebook />
							</a>
							<a href="#" class="text-purple-800 hover:text-purple-600">
								<Twitter />
							</a>
							<a href="#" class="text-purple-800 hover:text-purple-600">
								<Instagram />
							</a>
							<a href="#" class="text-purple-800 hover:text-purple-600">
								<Linkedin />
								<aedin size={20} />
							</a>
							<a href="#" class="text-purple-800 hover:text-purple-600">
								<Youtube />
							</a>
						</div>
					</div>
					<div class="flex flex-col space-y-4">
						<button class="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
							<svg
								class="w-5 h-5 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
									fill="currentColor"
								/>
							</svg>
							<span>Showroom Locator</span>
						</button>

						<button class="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
							<svg
								class="w-5 h-5 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
									fill="currentColor"
								/>
							</svg>
							<span>Showroom Login</span>
						</button>

						<button class="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
							<svg
								class="w-5 h-5 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.1 17H7.1C6.6 17 6.1 16.6 6.1 16C6.1 15.4 6.5 15 7.1 15H14.1C14.6 15 15.1 15.4 15.1 16C15.1 16.6 14.6 17 14.1 17ZM16.9 13H7.1C6.6 13 6.1 12.6 6.1 12C6.1 11.4 6.5 11 7.1 11H16.9C17.4 11 17.9 11.4 17.9 12C17.9 12.6 17.4 13 16.9 13ZM16.9 9H7.1C6.6 9 6.1 8.6 6.1 8C6.1 7.4 6.5 7 7.1 7H16.9C17.4 7 17.9 7.4 17.9 8C17.9 8.6 17.4 9 16.9 9Z"
									fill="currentColor"
								/>
							</svg>
							<span>Service Center Locator</span>
						</button>

						<button class="flex items-center space-x-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-50">
							<svg
								class="w-5 h-5 text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20 8H4V6H20V8ZM20 18H4V12H20V18ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM12 13H7V15H12V13Z"
									fill="currentColor"
								/>
							</svg>
							<span>Track your Order</span>
						</button>
					</div>

					<div class="grid grid-cols-3 col-span-2 gap-4">
						{/* About column */}
						<div class=" md:row-span-2">
							<h3 class="font-semibold text-lg mb-4">About</h3>
							<ul class="space-y-2 text-sm">
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										About Us
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										Careers
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										Contact Us
									</a>
								</li>
								<li>
									<button
										onClick$={() => (modalVisible.value = true)}
										class="text-gray-700 hover:text-purple-800"
									>
										Subscribe Newsletter
									</button>

									{modalVisible.value && (
										<NewsletterModal title="Subscribe to our Newsletter" close={closeModal}>
											<div q:slot="content">
												<div>
													<form action="">
														<div class="mb-4">
															<label for="email" class="block text-sm font-medium text-gray-700">
																Email address
															</label>
															<input
																type="email"
																id="email"
																name="email"
																required
																class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-400 focus:ring-orange-500 sm:text-sm"
																placeholder="Enter your email"
															/>
														</div>
														<div class="flex justify-end">
															<button
																type="submit"
																class="inline-flex items-center px-4 py-2 bg-orange-400 text-white font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
															>
																Subscribe
															</button>
														</div>
													</form>
												</div>
											</div>
										</NewsletterModal>
									)}
								</li>
							</ul>
						</div>

						{/* Help column */}
						<div class="">
							<h3 class="font-semibold text-lg mb-4">Help</h3>
							<ul class="space-y-2 text-sm">
								<li>
									<a href="/faq" class="text-gray-700 hover:text-purple-800">
										FAQs
									</a>
								</li>
								{/* <li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										How To Buy
									</a>
								</li> */}
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										Shipping & Delivery
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										Warranty Information
									</a>
								</li>
								<li>
									<a href="#" class="text-gray-700 hover:text-purple-800">
										Return Products
									</a>
								</li>
							</ul>
						</div>

						{/* Policies column */}
						<div class="">
							<h3 class="font-semibold text-lg mb-4">Policies</h3>
							<ul class="space-y-2 text-sm">
								<li>
									<a href="/policy/privacy" class="text-gray-700 hover:text-purple-800">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="/policy/replacement" class="text-gray-700 hover:text-purple-800">
										Replacement Policy
									</a>
								</li>
								<li>
									<a href="/policy/refund" class="text-gray-700 hover:text-purple-800">
										Refund Policy
									</a>
								</li>
								<li>
									<a href="/policy/return" class="text-gray-700 hover:text-purple-800">
										Return Policy
									</a>
								</li>
								<li>
									<a
										href="/policy/terms-and-conditions"
										class="text-gray-700 hover:text-purple-800"
									>
										Terms and Conditions
									</a>
								</li>
							</ul>
							<div class="">
								{/* <a href="/service"> */}
								<Image
									src="/customer-care.svg"
									alt="Call for Service"
									width={200}
									height={300}
									layout="constrained"
									class="py-2 object-contain"
								/>
								{/* </a> */}
							</div>
						</div>
						{/* <div class=" col-span-3 flex items-center justify-centere">
                <Image
                  src="/customer-care.svg"
                  alt="Call for Service"
                  width={200}
                  height={300}
                  // fill
                  class="py-2 object-contain"
                />
            </div> */}
					</div>
				</div>
				<div class="w-full mt-8 border-t border-orange-300">
					{/* <div class="w-full mt-8 border-t border-[var(--primary-orange)]"> */}
					<div class="container mx-auto px-8 py-3 flex flex-col sm:flex-row justify-between items-center">
						<div class="text-sm text-gray-600 mb-3 sm:mb-0">
							Copyright © 2024 Click2Buy. All Rights Reserved.
						</div>

						<div class="flex items-center">
							<span class="text-sm text-gray-600 mr-3">We Are Accepting</span>
							<div class="flex space-x-2">
								<div class="h-8 w-12 bg-black rounded flex items-center justify-center">
									<Image
										src="/assets/images/bankcards/payhere.png"
										alt="Apple Pay"
										width={30}
										height={20}
										class="h-5 w-auto"
										layout="constrained"
									/>
								</div>
								<Image
									src="/assets/images/bankcards/koko.png"
									alt="Visa"
									width={30}
									height={20}
									class="h-5 w-auto"
									layout="constrained"
								/>
								<div>
									<Image
										src="/assets/images/bankcards/visa.webp"
										alt="Discover"
										width={30}
										height={20}
										class="h-5 w-auto"
										layout="constrained"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
});
