<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<header>
	<nav />
</header>
<main>
	<slot />
</main>

<!-- #fa6400
#d94800
#b82a00
#980000
#7a0000
#5f0000 -->

<style>
	@import 'open-props/style';
	@import 'open-props/normalize.min.css';
	@import './../app.css';

	:global(body) {
		background-color: var(--sand-12);
	}

	nav {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		background-color: var(--sand-10);
	}

	main {
		color: var(--text-1-dark);
		display: grid;
		grid-template-columns: 1fr minmax(var(--size-15), 1fr) 1fr;
	}
</style>
