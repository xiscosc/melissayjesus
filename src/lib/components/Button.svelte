<script lang="ts">
	let {
		children,
		onclick,
		variant = 'primary',
		class: className = '',
		...rest
	} = $props<{
		children: any;
		onclick?: () => void;
		variant?: 'primary' | 'secondary' | 'outline';
		class?: string;
		[key: string]: any;
	}>();

	const variants = {
		primary:
			'inline-flex transform items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] px-8 py-4 text-lg font-bold text-[#E8DEC9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#751F19]/80',
		secondary:
			'inline-flex transform items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] px-12 py-5 text-xl font-bold text-[#212E21] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E8DEC9]/90',
		outline:
			'inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#212E21]'
	};
</script>

<button {onclick} class="{variants[variant as keyof typeof variants]} {className}" {...rest}>
	{@render children()}
</button>
