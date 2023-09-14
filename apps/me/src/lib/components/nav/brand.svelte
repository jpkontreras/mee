<script lang="ts">
	let data = {
		me: 'jmarchant',
		born: 91,
		origin: [String.fromCodePoint(127757), String.fromCodePoint(127464, 127473)],
		langs: ['JS', 'HTML', 'CSS']
	};

	const replacer = (key: string, value: any) => {
		if (['origin', 'langs'].includes(key)) {
			return `[ ${value.join(', ')} ]`;
		}
		return value;
	};

	$: title = JSON.stringify(data, replacer, 2);
</script>

<div class="brand">
	<div class="type">{title}</div>
</div>

<style>
	.brand {
	}

	.type {
		font-weight: 600;
		font-family: 'Jura';
		overflow: hidden;
		white-space: pre;
		line-height: var(--font-lineheight-0);
	}

	@media (--sm-n-above) {
		.type {
			transition: 0.2s var(--ease-1);
			font-size: var(--font-size-4);
		}
	}

	@media (--sm-n-below) {
		.type {
			font-weight: 900;
			transition: 0.2s var(--ease-1);
			font-size: var(--font-size-0);
			line-height: var(--font-lineheight-2);
		}
	}
</style>
