<script>
	import { fly } from 'svelte/transition';
	import Keyboard from '$lib/components/keyboard.svelte';

	let ms = 1000;
	let title = 'jmarchant';
	let show = false;
</script>

<header>
	{#if show}
		<a href="#" class="brand" transition:fly={{ x: -100, delay: ms }}
			>[
			{#each title.split('') as char, i}
				<span>{char}</span>
			{/each}

			]</a
		>
	{/if}
	<nav>
		<ul>
			<li on:click={() => (show = true)}>SHOW</li>
		</ul>
	</nav>
</header>

<main>
	<svelte:component this={Keyboard} />
</main>

<style>
	:global(body) {
		margin-inline: auto;
		margin-top: var(--size-2);
		max-width: var(--size-layout);
	}

	ul {
		list-style-type: none;
	}

	nav {
	}

	main {
		margin-block: var(--size-10);
	}
	header {
		display: flex;
		justify-content: space-between;
	}

	.brand {
		font-family: 'Jura';
		font-size: var(--font-size-5);
		font-weight: 600;
		width: 0px;
		color: var(--text-2);
		text-decoration: none;
		white-space: nowrap;
	}

	@media (--md-n-below) {
	}
</style>
