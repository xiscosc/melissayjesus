<script lang="ts">
	let {
		children,
		id = '',
		variant = 'default',
		class: className = ''
	} = $props<{
		children: any;
		id?: string;
		variant?: 'default' | 'beige' | 'white' | 'dark';
		class?: string;
	}>();

	const variants = {
		default: '',
		beige: 'bg-[#E8DEC9]',
		white: 'bg-white/50',
		dark: 'bg-[#751F19]'
	};
</script>

<section {id} class="py-24 {variants[variant as keyof typeof variants]} {className}">
	<div class="container mx-auto px-6">
		{@render children()}
	</div>
</section>
