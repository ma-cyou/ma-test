<script lang="ts">
	import Header from '$shared/components/Header.svelte';
	import '@/app.scss';

	let { children } = $props();
</script>

<Header profile={false} />
{@render children()}
