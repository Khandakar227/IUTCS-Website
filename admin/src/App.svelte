<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import {BootstrapToast, ToastContainer} from 'svelte-toasts'
  import {ADMIN_API_URL} from './lib/configs/api';
  
  import Home from "./lib/pages/Home.svelte";
  import { onMount } from "svelte";
  import { admin } from "./lib/stores/admin";
  import EventDetail from "./lib/pages/event/EventDetail.svelte";
  import RegistrationDetail from "./lib/pages/event/RegistrationDetail.svelte";
  
  export let url = "";
  let loading = true;

  onMount(async () => {
    try {
    
        const res = await fetch(ADMIN_API_URL, {credentials: 'include',method: 'GET'});
        const data = await res.json();
        if(!data.error)
            admin.set(data.admin);
        
        loading = false;
    
    } catch (error) {
    
        const err = error as Error;
        console.log(err);
        loading = false;
    }
});


</script>

<Router {url}>
  <Route path="/"><Home {loading} /></Route>
  <Route path="event/details/:id" let:params><EventDetail id={params.id}/></Route>
  <Route path="event/registration/:id" let:params><RegistrationDetail id={params.id}/></Route>
</Router>
<ToastContainer let:data={data}>
<BootstrapToast {data} />
</ToastContainer>