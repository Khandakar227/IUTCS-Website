<script lang="ts">
  import Login from "../components/Login.svelte";
  import Loader from '../components/Loader.svelte';
  import { admin } from '../stores/admin';
  import Dashboard from "../components/Dashboard.svelte";

  export let loading = true;

</script>
{#if loading}
    <div class="flex w-full justify-center items-center p-4 min-h-screen">
        <Loader/>
    </div>
{:else if $admin}
    <Dashboard/>
{:else}
    <div class="min-h-screen flex justify-center items-center">
        <Login/>
    </div>
{/if}