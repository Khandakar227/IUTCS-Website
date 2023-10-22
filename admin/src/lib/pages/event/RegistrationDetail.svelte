<script lang="ts">
  import { toasts } from "svelte-toasts";
  import { EVENT_API_URL, REGISTER_API_URL } from "../../configs/api";
  import type { CSEvent, Participant, Registration } from "../../types";
  import { onMount } from "svelte";
  import Loader from "../../components/Loader.svelte";
  import { Link } from "svelte-routing";

  export let id = "";

  let regLoading = true, eventLoading = true;
  let registrations: Registration[] = [];
  let event: CSEvent;

  onMount(() => {
    getRegistrations();
    getEventDetails();
  });

  const getRegistrations = async () => {
    const res = await fetch(`${REGISTER_API_URL}/${id}`, {
      credentials: "include",
      method: "GET",
    });
    const data = await res.json();
    
    if (!data.error) {
      registrations = data.registrations;
    } else {
      toasts.error(data.error);
    }
    if (data) regLoading = false;
  };

  const getEventDetails = async () => {
    const res = await fetch(`${EVENT_API_URL}/${id}`);
    const data = await res.json();
    if (!data.error) {
      event = data.event;
    } else {
      toasts.error(data.error);
    }
    if (data) eventLoading = false;
  }

  function getTeamMembersIdx(max_team_members:number) {
    if (!max_team_members) return [];
    let team = [];
    for (let i = 0; i < max_team_members; i++) {
        team.push(i+1);
    }
    return team;
  }
  function getMembers (members:Participant[], max_team_members: number) {
    let m:Participant[] = []
    members.forEach(member => m.push(member));
    
    for (let i = 0; i <= max_team_members - m.length + 1; i++) {
        m.push({name: "", email: "", phone_number: "", institution: ""} as Participant);
    }
    
    return m;
  }
</script>

<div class="min-h-screen">
    <h2 class="text-2xl mb-8 font-bold px-4 py-2 bg-gray-950"> 
        <Link to="/">
            ADMIN PANEL
        </Link>
    
    </h2>
    <div class="p-4">
        <p class="font-medium text-center">Registratons</p>
        {#if regLoading && eventLoading}
            <div class="mx-auto text-center">
                <Loader/>
            </div>
        {/if}
        
        {#if !eventLoading}
            <h3 class="font-semibold text-center">{event.name}</h3>
        {/if}
    
        {#if !regLoading}
            <div class="overflow-auto py-12 mx-auto w-full">
                <table>
                    <tr class="border-b p-2 w-full bg-slate-950">
                        <th>Team Name</th>
                        <th>Reg. Email</th>
                        <th>Status</th>
                        {#each getTeamMembersIdx(event?.max_team_members) as teamMateNo}
                            <th>Member {teamMateNo}</th>
                        {/each}
                        <th>Payment Contact No.</th>
                        <th>Trx ID</th>
                      </tr>
                      <tbody>
                          {#each registrations as registration}
                            <tr class="border-b text-sm">
                                <td class="whitespace-nowrap">{registration.team_name}</td>
                                <td class="whitespace-nowrap text-center">{registration.email}</td>
                                <td class="whitespace-nowrap text-center">{registration.status}</td>
                                {#each getMembers(registration.team_members, event?.max_team_members) as member}
                                    <td class="">
                                        <p>{member?.name}</p>
                                        <p>{member?.email}</p>
                                        <p>{member?.phone_number}</p>
                                        <p>{member?.institution}</p>
                                    </td>
                                {/each}
                                <td class="whitespace-nowrap text-center">
                                    {registration?.payment_phone_number && 0}
                                    {registration?.payment_phone_number ? registration?.payment_phone_number : ""}
                                </td>
                                <td class="whitespace-nowrap text-center">
                                    {registration?.trxId ? registration?.trxId : ""}
                                </td>
                            </tr>
                          {/each}
                      </tbody>
                </table>
            </div> 
        {/if}
    </div>
</div>

<style>
    th {
        padding: 0 1rem;
        min-width: 135px;
        width: 100%;
        border-left: 1px solid white;
        border-right: 1px solid white;
        font-weight: 500;
    }
    td {
        padding: 0.5rem;
    }
    tbody tr:nth-child(even) {
        background-color: #001927;
    }
</style>