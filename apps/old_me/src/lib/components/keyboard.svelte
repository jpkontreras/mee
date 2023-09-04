<script>
	import { page } from '$app/stores';

	/**
	 * @typedef {object} KeyboardLayout
	 * @property {string} row1
	 * @property {string} row2
	 * @property {string} row3
	 * @property {string} row4
	 * @property {string} row5
	 * @property {string} functionKeys
	 * @property {string} navigationKeys
	 */

	/** @type {KeyboardLayout} */

	/** @type {string}*/
	const baseKeys = 'qwertyuiop|asdfghjkl|zxcvbnm';

	const macOSKeyboardLayout = {
		row1: '`|1|2|3|4|5|6|7|8|9|0|-|=',
		row2: 'Tab|q|w|e|r|t|y|u|i|o|p|[|]',
		row3: "Caps Lock|a|s|d|f|g|h|j|k|l|;|'|Enter",
		row4: 'Shift|z|x|c|v|b|n|m|,|.|/|Shift',
		row5: 'Fn|Ctrl|Alt|Cmd|Space|Cmd|Alt|Ctrl',
		functionKeys: 'F1|F2|F3|F4|F5|F6|F7|F8|F9|F10|F11|F12',
		navigationKeys: '↑|↓|←|→'
	};

	const phoneKeyboardLayout = {
		row1: '1234567890',
		row2: 'qwertyuiop',
		row3: 'asdfghjkl',
		row4: 'zxcvbnm'
	};
	const keyboardLayout = {
		fnKeys: 'Esc|F1|F2|F3|F4|F5|F6|F7|F8|F9|F10|F11|F12',
		rowone: '°|1|2|3|4|5|6|7|8|9|0|?|¿|←',
		rowtwo: 'tab|q|w|e|r|t|y|u|i|o|p|´|+|↵',
		rowthree: 'caps lock|a|s|d|f|g|h|j|k|l|{|}',
		rowfour: '⇧|z|x|c|v|b|n|m|,|.|-|⇧|▴',
		rowfive: 'ctrl|win|alt|space|altgr|win|≡|ctrl|◂|▾|▸'
	};

	console.log({ page: $page.data.platform });
</script>

<div class="keyboard">
	{#each Object.entries(keyboardLayout) as [row, value]}
		{#each value.split('|') as key}
			<div class="key {row}" data-key={key}>{key}</div>
		{/each}
	{/each}
</div>

<style>
	.keyboard {
		display: grid;
		grid-template-columns: repeat(56, 12px);
		grid-auto-rows: 20px;
		place-items: stretch;
		gap: var(--size-1);
		border-radius: var(--radius-6);
	}

	.key {
		border: var(--border-size-1) solid var(--gray-3);
		grid-column: span 3;
		display: flex;
		justify-content: center;
		align-items: start;
		font-size: x-small;
	}

	.key[data-key='F1'] {
		grid-column: 7/11;
	}
	.key[data-key='F5'] {
		grid-column: 24/28;
	}
	.key[data-key='F9'] {
		grid-column: 41/45;
	}
	.key[data-key='°'] {
		grid-column: 1/4;
	}
	.key[data-key='←'] {
		grid-column: span 5;
	}
	.key[data-key='tab'] {
		grid-column: span 6;
	}
	.key[data-key='↵'] {
		grid-column: span 6 / -1;
		grid-row: span 2;
	}

	.key[data-key='caps lock'] {
		font-size: xx-small;
		grid-column: span 6;
	}
	/* .key[data-key='F1'] {
		grid-column: 8/12;
	}
	.key[data-key='F5'] {
		grid-column: 28/32;
	}
	.key[data-key='F9'] {
		grid-column: 48/52;
	}

	.key[data-key='←'] {
		grid-column: span 10;
	}
	.key[data-key='tab'] {
		grid-column: span 4;
	}
	.key[data-key='caps lock'] {
		grid-column: span 4;
	}
	.key[data-key='shift'] {
		grid-column: span 3;
	}

	.key[data-key='ctrl'] {
		grid-column: span 2;
	}
	.key[data-key='alt'] {
		grid-column: span 2;
	}
	.key[data-key='space'] {
		grid-column: span 4;
	}
	.key[data-key='altgr'] {
		grid-column: span 2;
	} */
</style>
