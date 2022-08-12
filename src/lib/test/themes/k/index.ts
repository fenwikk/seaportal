import type { Theme } from "$lib/seaportal";
import Home from "./pages/Home.svelte";
import Sub from "./pages/Sub.svelte";

const k: Theme = {
    id: "k",
    pages: [
        {
            slug: "/",
            component: Home
        },
        {
            slug: "/sub",
            component: Sub
        },
    ]
}

export default k