<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

<div
	class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] {className}"
>
	{@render children()}
</div>
