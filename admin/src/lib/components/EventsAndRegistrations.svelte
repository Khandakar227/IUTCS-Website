<script lang="ts">
  import { onMount } from "svelte";
  import EventsDetails from "./EventsDetails.svelte";
  import { EVENT_API_URL, REGISTER_API_URL } from "../configs/api";
  import { toasts } from "svelte-toasts";
  import type { CSEvent, RegCountByEvent, Registration } from "../types";
  import Registrations from "./Registrations.svelte";

  let events: CSEvent[] = [];
  let regCountByEvent:RegCountByEvent [] = [];
  let eventLoading = true;
  let regLoading = true;
  let totalRegistrationCount = 0;

  onMount(async () => {
    getEvents();
    getRegistrations();
});

  const getEvents = async () => {
    const res = await fetch(EVENT_API_URL);
    const data = await res.json();
    if (!data.error) events = data.events;
    else {
      toasts.error(data.error);
    }
    if (data) eventLoading = false;
  }

  const getRegistrations = async () => {
    const res = await fetch(`${REGISTER_API_URL}/regcountbyevent`, {
        credentials: 'include',
        method: 'GET'
    });
    const data = await res.json();
    console.log(data);
    if (!data.error) {
        regCountByEvent = data.data;
        totalRegistrationCount = data.totalCount;
    } else {
      toasts.error(data.error);
    }
    if (data) regLoading = false;
  }
</script>
<EventsDetails {events} loading={eventLoading}/>
<Registrations loading={regLoading} {regCountByEvent} {totalRegistrationCount}/>