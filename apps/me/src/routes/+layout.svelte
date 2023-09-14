<script>
	import Nav from '$lib/components/nav/nav.svelte';
	import Brand from '$lib/components/nav/brand.svelte';
	import '../app.postcss';
</script>

<header>
	<Brand />
	<Nav />
</header>

<slot />

<style>
	:global(body > div:first-child) {
		margin-inline: auto;
		max-width: var(--size-layout);
		display: grid;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: var(--size-4);
		background-color: var(--surface-3);
		padding-block: var(--size-fluid-1);
	}
	@media (--sm-n-below) {
		:global(body > div:first-child) {
			margin-inline: auto;
		}
	}
</style>
