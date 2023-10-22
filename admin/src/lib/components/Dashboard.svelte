<script>
  import BlogWriter from "./BlogWriter.svelte";
  import EventsAndRegistrations from "./EventsAndRegistrations.svelte";
  import EventsDetails from "./EventsDetails.svelte";
  import Registrations from "./Registrations.svelte";

</script>
<div class="min-h-screen">
    <h2 class="text-2xl mb-8 font-bold p-2 bg-gray-950"> ADMIN PANEL </h2>
    <div class="grid justify-center items-start lg:grid-cols-2 p-4 gap-4">
      <div class="grid gap-4">
        <EventsAndRegistrations />
      </div>
      <div>
        <BlogWriter />
      </div>
    </div>
</div>