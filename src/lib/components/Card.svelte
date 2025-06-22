<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div class="group">
	<div
		class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1 {className}"
	>
		{@render children()}
	</div>
</div>
