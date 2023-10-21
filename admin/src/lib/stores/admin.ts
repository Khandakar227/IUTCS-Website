import { writable } from "svelte/store";
import { ADMIN_API_URL } from "../configs/api";
import { toasts } from "svelte-toasts";

export type AdminProps = {
    _id: string,
    username: string;
    email: string;
    role: string,
}

export const admin = writable<AdminProps|null>(null);
export const login = async (username: string, password:string) => {
    try {
        const body = { username, password };
        
        const res = await fetch(`${ADMIN_API_URL}/login`, {
            method: "POST",
            body: JSON.stringify(body),
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }
        })

        const data = await res.json();
        if(!data.error) {
            admin.set(data.user);
            return true;
        }
        else {
            toasts.error(data.message);
            return false;
        }
    } catch (error) {
        const err = error as Error;
        console.log(error);
        toasts.error(err.message);
        return false;
    }
}