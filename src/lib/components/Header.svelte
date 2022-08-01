<script lang="ts">
    import "../main.css"
    import Portal from "../assets/portal.png"
    import { goto } from "$app/navigation";

    export let baseUrl: string
    export let currentSite: any = null
</script>


<div class="border-b border-black">
    <div class="container">
        <div class="py-4 flex items-center">
            <div class="flex items-center">
                <img src={Portal} class="w-12 h-12" alt="" />
                <!-- <div class="mx-5">
                    <div class="w-[2px] h-8 rotate-12 rounded-full bg-black" />
                </div> -->
                <!-- <div class="select w-52 mt-0 ml-0 duration-150 {selectFocused ? "" : "hover:mt-1 hover:ml-1"}">
                    <Select
                        bind:items
                        Icon={SelectIcon}
                        bind:isFocused={selectFocused}
                        containerClasses={selectFocused
                            ? "hard-shadow"
                            : "duration-150 hard-shadow hover:shadow-none"}
                        iconProps={{ ico: currentSite?.site_info.ico_url }}
                        isClearable={false}
                        showIndicator={true}
                        indicatorSvg="<img src={chevron} alt=''>"
                        on:select={handleSelect}
                    />
                </div> -->
            </div>
        </div>
        <ul class="flex">
            <li
                on:click={() => goto(baseUrl)}
                class="border-b-2 border-transparent hover:border-black py-2 mx-3 cursor-pointer"
            >
                Home
            </li>
            <li
                on:click={() => goto(baseUrl + "/settings")}
                class="border-b-2 border-transparent hover:border-black py-2 mx-3 cursor-pointer"
            >
                Settings
            </li>
            <li
                on:click={() => goto(baseUrl + "/pages")}
                class="border-b-2 border-transparent hover:border-black py-2 mx-3 cursor-pointer"
            >
                Pages
            </li>
            <li
                on:click={() => goto(baseUrl + "/data")}
                class="border-b-2 border-transparent hover:border-black py-2 mx-3 cursor-pointer"
            >
                Data
            </li>
            
            {#if currentSite?.site_info.hasBlog}
                <li
                    on:click={() => goto(baseUrl + "/posts")}
                    class="border-b-2 border-transparent hover:border-black py-2 mx-3 cursor-pointer"
                >
                    Posts
                </li>
            {/if}
        </ul>

    </div>
</div>