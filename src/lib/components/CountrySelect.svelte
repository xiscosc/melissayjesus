<script lang="ts">
	import countries from 'world-countries';

	let { value = $bindable('+34'), class: className = '' } = $props<{
		value?: string;
		class?: string;
	}>();

	// Sort countries by calling code and filter out those without calling codes
	const sortedCountries = countries
		.filter((country) => country.idd?.root && country.idd?.suffixes?.length > 0)
		.map((country) => ({
			code: country.idd.root + country.idd.suffixes[0],
			name: country.name.common,
			flag: country.flag,
			cca2: country.cca2
		}))
		.sort((a, b) => {
			const codeA = parseInt(a.code.replace('+', ''));
			const codeB = parseInt(b.code.replace('+', ''));
			return codeA - codeB;
		});
</script>

<select
	bind:value
	class="w-20 rounded-md border-2 border-[#212E21] px-1 py-3 text-sm focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19] sm:w-24 sm:px-2 sm:text-base {className}"
>
	{#each sortedCountries as country}
		<option value={country.code}>
			{country.flag}
			{country.code}
		</option>
	{/each}
</select>
