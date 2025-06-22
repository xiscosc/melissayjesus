<script lang="ts">
	let { time, title, description } = $props<{
		time: string;
		title: string;
		description: string;
	}>();
</script>

<div class="flex items-start space-x-6">
	<div
		class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
	>
		<span class="text-lg font-bold text-[#E8DEC9]">{time}</span>
	</div>
	<div class="flex-1 rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-6">
		<h3 class="mb-2 text-xl font-bold text-[#212E21]">{title}</h3>
		<p class="text-[#6A7B67]">{description}</p>
	</div>
</div>
