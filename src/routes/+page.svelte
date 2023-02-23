<script>
    import { browser } from "$app/environment"; 
    import { onMount } from 'svelte';

    onMount(async () => {
    if (browser) {
        const { Buffer } = await import('buffer')
        window.Buffer = Buffer
    }
    })
    
    import ccxt from "ccxt"
    console.log(ccxt.exchanges, '3rm')
    // var ccxt = require ('ccxt')
    // console.log('foo')
    onMount(() => {
        // console.log(ccxt.exchanges, '3rm')
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
