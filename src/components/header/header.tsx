import { $, component$, useContext, useVisibleTask$, useSignal } from '@qwik.dev/core';
import { APP_STATE, CUSTOMER_NOT_DEFINED_ID } from '~/constants';
import { logoutMutation } from '~/providers/shop/account/account';
import { getActiveCustomerQuery } from '~/providers/shop/customer/customer';
import LogoutIcon from '../icons/LogoutIcon';
import MenuIcon from '../icons/MenuIcon';
import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import UserIcon from '../icons/UserIcon';
import SearchBar from '../search-bar/SearchBar';
import { Image } from 'qwik-image';
// import HeaderBanner from '../header-banner/HeaderBanner';

export default component$(() => {
	const appState = useContext(APP_STATE);
	const isOpen = useSignal(false);
	const dropdownRef = useSignal<HTMLElement>();
	const collections = useContext(APP_STATE).collections.filter(
		(item) => item.parent?.name === '__root_collection__' && !!item.featuredAsset
	);

	const totalQuantity =
		appState.activeOrder?.state !== 'PaymentAuthorized'
			? appState.activeOrder?.totalQuantity || 0
			: 0;

	useVisibleTask$(async () => {
		if (appState.customer.id === CUSTOMER_NOT_DEFINED_ID) {
			const activeCustomer = await getActiveCustomerQuery();
			if (activeCustomer) {
				appState.customer = {
					title: activeCustomer.title ?? '',
					firstName: activeCustomer.firstName,
					id: activeCustomer.id,
					lastName: activeCustomer.lastName,
					emailAddress: activeCustomer.emailAddress,
					phoneNumber: activeCustomer.phoneNumber ?? '',
				};
			}
		}
	});

	useVisibleTask$(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
				isOpen.value = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	const logout = $(async () => {
		await logoutMutation();
		// force hard refresh
		window.location.href = '/';
	});

	return (
		<div
			class={`bg-gradient-to-r from-blue-700 to-indigo-900 transform shadow-xl sticky top-0 z-10 animate-dropIn`}
		>
			{/* <HeaderBanner /> */}
			<header>
				<div class="bg-zinc-100 text-gray-600 py-3 shadow-inner text-center text-sm   xl:px-0">
					<div class="max-w-6xl mx-2 h-5 min-h-full md:mx-auto flex items-center justify-between my-1">
						<div class="flex justify-between items-center w-full">
							<div class=" ">
								<a href="/" class="text-gray-400 hover:text-gray-500">
									<Image layout="constrained" width="150" height="150" src="/logo.svg" alt="Logo" />
								</a>
							</div>
							<div class="flex mr-[60px] 2xl:mr-0">
								<a
									href={appState.customer.id !== CUSTOMER_NOT_DEFINED_ID ? '/account' : '/sign-in'}
									class="flex items-center space-x-1 pb-1 pr-2"
								>
									<UserIcon />
									<span class="mt-1 text-gray-700">
										{appState.customer.id !== CUSTOMER_NOT_DEFINED_ID
											? $localize`My Account`
											: $localize`Sign In`}
									</span>
								</a>
								{appState.customer.id !== CUSTOMER_NOT_DEFINED_ID && (
									<button onClick$={logout} class="text-gray-700">
										<div class="flex items-center cursor-pointer">
											<span class="mr-2">{$localize`Logout`}</span>
											<LogoutIcon />
										</div>
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-6xl mx-auto py-4 flex items-center justify-between sm:gap-4 ">
					<button
						class="block sm:hidden text-white"
						onClick$={() => (appState.showMenu = !appState.showMenu)}
					>
						<span class="sr-only">Menu</span>
						<MenuIcon />
					</button>
					{/* <h1 class="text-white w-10">

						<a href="/">
							<img src={`/cube-logo-small.webp`} width={40} height={31} alt="Vendure logo" />
						</a>
					</h1> */}
					{/* <div class="hidden space-x-4 sm:block">
						{collections.map((collection) => (
							<a
								class="text-sm md:text-base text-gray-200 hover:text-white"
								href={`/collections/${collection.slug}`}
								key={collection.id}
							>
								{collection.name}
							</a>
						))}
					</div> */}
					<div class="relative  inline-block text-left">
						<div class=" hidden sm:flex items-center justify-center " ref={dropdownRef}>
							<div class="relative inline-block">
								<button
									onClick$={() => (isOpen.value = !isOpen.value)}
									class="inline-flex group gap-3 justify-center w-full  shadow-sm pr-4 py-2 text-sm  text-white group-hover:text-orange-500"
								>
									<svg
										class="w-5 h-5 "
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
										/>
									</svg>
									All Categories
								</button>
							</div>
							<a href="/shop" class="text-white text-sm">
								Shop
							</a>

							{isOpen.value && (
								<div class="absolute left-0 top-[100%] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
									<div class="py-1">
										{collections.map((collection) => (
											<a
												class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												href={`/collections/${collection.slug}`}
												key={collection.id}
											>
												{collection.name}
											</a>
										))}
										{/* <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
										Account settings
									</a>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
										Support
									</a>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
										Sign out
									</a> */}
									</div>
								</div>
							)}
						</div>
					</div>
					<div class="flex-1  md:pr-8">
						<SearchBar />
					</div>
					<div class="">
						<button
							name="Cart"
							aria-label={`${totalQuantity} items in cart`}
							class="relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1"
							onClick$={() => (appState.showCart = !appState.showCart)}
						>
							<ShoppingBagIcon />
							{totalQuantity ? (
								<div class="absolute rounded-full -top-2 -right-2 bg-primary-600 w-6 h-6">
									{totalQuantity}
								</div>
							) : (
								''
							)}
						</button>
					</div>
				</div>
			</header>
		</div>
	);
});
