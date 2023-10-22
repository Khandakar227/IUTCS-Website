<script lang="ts">
  import { Link } from "svelte-routing";
  import type { RegCountByEvent } from "../types";
    import Loader from "./Loader.svelte";
    export let loading = true;
    export let totalRegistrationCount = 0;
    export let regCountByEvent:RegCountByEvent [] = [];
</script>

<div class="rounded-md shadow bg-secondary p-4">
    <h3 class="font-semibold">Registratons</h3>
    {#if loading}
        <div class="mx-auto text-center">
            <Loader/>
        </div>
    {:else}
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p class="py-4">Total Registered: <span class="font-bold">{totalRegistrationCount}</span></p>
        </div>
        {#each regCountByEvent as regPerEvent}
            <Link to={`event/registration/${regPerEvent.event_id}`} class="flex justify-between items-center my-4 p-2 rounded bg-blue-950 font-medium shadow">
                <span>{regPerEvent.event_name}</span>
                <span class="px-2 py-1 bg-secondary rounded-sm font-bold">{regPerEvent.count}</span>
            </Link>
        {/each}
    {/if}
</div>
