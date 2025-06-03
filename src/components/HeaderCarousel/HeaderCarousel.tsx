import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
	useStyles$(styles);

	const isAutoplaySig = useSignal(false);

	useVisibleTask$(() => {
		isAutoplaySig.value = true;
	});

	const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

	return (
		<>
			<Carousel.Root
				class="carousel-root"
				gap={0}
				autoPlayIntervalMs={2500}
				bind:autoplay={isAutoplaySig}
			>
				<Carousel.Scroller class="carousel-scroller">
					{colors.map((color, index) => (
						<Carousel.Slide key={color} class="carousel-slide secondary">
							{color}
							<div>{index === 1 && <button>I stop autoplay on focus!</button>}</div>
						</Carousel.Slide>
					))}
				</Carousel.Scroller>
			</Carousel.Root>
		</>
	);
});
// internal
import styles from './carousel.css?inline';
