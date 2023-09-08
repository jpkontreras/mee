<script>
	import { page } from '$app/stores';

	const keyboardLayout = {
		fnKeys: 'Esc|F1|F2|F3|F4|F5|F6|F7|F8|F9|F10|F11|F12',
		rowone: '°|1|2|3|4|5|6|7|8|9|0|?|¿|←',
		rowtwo: '⇥|q|w|e|r|t|y|u|i|o|p|´|+|↵',
		rowthree: 'caps lock|a|s|d|f|g|h|j|k|l|{|}',
		rowfour: '⇧|z|x|c|v|b|n|m|,|.|-|▴|⇧',
		rowfive: 'ctrl|win|alt|space|alt gr|win|≡|◂|▾|▸|ctrl'
	};

	console.log({ page: $page.data.platform });
</script>

<div class="keyboard">
	{#each Object.entries(keyboardLayout) as [row, value]}
		{#each value.split('|') as key, i}
			<button class="key {row}" data-key={key} data-pos={i}> <div>{key}</div></button>
		{/each}
	{/each}
</div>

<style>
	.keyboard {
		display: grid;
		grid-template-columns: repeat(43, 10px);
		grid-auto-rows: 40px;
		gap: var(--size-1);
		background-color: var(--surface-4);
		padding: var(--size-3);
		border-radius: var(--radius-3);
		max-width: fit-content;
		border: var(--border-size-1) solid var(--gray-6);
		margin-left: auto;
		margin-right: 0;
	}
	.key {
		border: var(--border-size-1) solid var(--gray-4);
		grid-column: span 3;
		display: flex;
		justify-content: center;
		align-items: start;
		font-size: x-small;
		text-transform: capitalize;
		border-radius: var(--radius-2);
	}

	.key[data-key='F1'] {
		grid-column: 6/9;
	}
	.key[data-key='F5'] {
		grid-column: 19/22;
	}
	.key[data-key='F9'] {
		grid-column: 32/35;
	}
	.key[data-key='°'] {
		grid-column: 1/4;
	}
	.key[data-key='?'] {
		grid-column: span 2;
	}
	.key[data-key='¿'] {
		grid-column: span 2;
	}
	.key[data-key='←'] {
		grid-column: span 6;
	}
	.key[data-key='⇥'] {
		grid-column: span 4;
		font-size: medium;
	}
	.key[data-key='´'] {
		grid-column: span 2;
	}
	.key[data-key='+'] {
		grid-column: span 2;
	}
	.key[data-key='↵'] {
		grid-column: span 5 / -1;
		grid-row: span 2;
		font-size: large;
	}
	.key[data-key='caps lock'] {
		font-size: xx-small;
		grid-column: span 5;
	}
	.key[data-key='⇧'] {
		grid-column: span 4;
		font-size: medium;
	}
	.key[data-key='⇧'][data-pos='12'] {
		grid-column: span 7;
		font-size: medium;
	}
	.key[data-key='ctrl'] {
		grid-column: span 5;
	}
	.key[data-key='win'] {
		grid-column: span 4;
	}
	.key[data-key='space'] {
		grid-column: span 10;
	}
	.key[data-key='◂'],
	[data-key='▴'],
	[data-key='▾'],
	[data-key='▸'] {
		grid-column: span 2;
		font-size: large;
	}
</style>
