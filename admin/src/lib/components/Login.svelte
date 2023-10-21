<script lang="ts">
    import {admin, login} from '../stores/admin'

    let loading = false;
    
    const loginAsAdmin = (e:SubmitEvent) => {
        loading = true;
        setTimeout(async () => {
            const el = e.target as HTMLFormElement;
            const formData = new FormData(el);
            const data = Object.fromEntries(formData);
            
           login(data.username as string, data.password as string)
           .then(() => loading = false); 
        
        }, 1000);
    }
</script>

<div class="p-4">
    <form class="p-4 rounded-md shadow w-full max-w-sm bg-secondary" on:submit|preventDefault={loginAsAdmin}>
        <input class="w-full p-2 outline-none border my-3 bg-primary-800" type="text" name="username" id="username" placeholder="Username" required>
        <input class="w-full p-2 outline-none border my-3 bg-primary-800" type="password" name="password" id="password" placeholder="Password" required>
        <button disabled={loading} type="submit" class="w-full text-white py-2 px-4 my-3 bg-blue-800 font-semibold"> {loading ? 'Please wait..' : 'Log in'} </button>
    </form>
</div>