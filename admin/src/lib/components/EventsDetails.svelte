<script lang="ts">
  import Loader from "./Loader.svelte";
  import type { CSEvent } from "../types";
  import { Link } from "svelte-routing";

  export let events: CSEvent[] = [];
  export let loading = true;


</script>

<div class="rounded-md shadow bg-secondary p-4">
  <h3 class="font-semibold">Events</h3>
  {#if loading}
    <div class="mx-auto text-center">
        <Loader/>
    </div>
  {:else}
    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="py-4">Total events: <span class="font-bold">{events.length}</span></p>
        <button class="px-4 py-1 bg-orange-100 text-black">Create a new event</button>
    </div>
    {#each events as event}
        <Link to={`event/details/${event._id}`} class="block my-4 p-2 rounded bg-blue-950 font-medium shadow">
            <p>{event.name}</p>
        </Link>
    {/each}
  {/if}
</div>
