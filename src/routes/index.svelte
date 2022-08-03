<script lang="typescript">
    const todos: string[] = [];
    const progress: string[] = [];
    const done: string[] = [];

    let isAddOpen: boolean = false;

    let switchAdd = () => {
        isAddOpen = !isAddOpen;
        console.log(isAddOpen);
    };
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900 h-screen">
    <div class="p-4 m-4 rounded bg-slate-600">
        <div class="text-white text-4xl font-bold text-center font-mono 
            bg-slate-500 p-3 rounded">
            TODO:
        </div>
        {#each todos as todo}
            <div class="text-white text-4xl font-bold text-center font-mono
            bg-slate-500 p-3 rounded m-3">
                {todo}
            </div>
        {/each}
        {#if isAddOpen}
            <div class="">
                ok
            </div>
        {:else}
            <div class="bg-slate-500 mt-3 text-white text-2xl p-3 rounded
                text-center
                hover:bg-opacity-90 hover:cursor-pointer" on:click={switchAdd}>
                ADD
            </div>
        {/if}
    </div>
    <div class="p-4 m-4 rounded bg-slate-600">
        <div class="text-white text-4xl font-bold text-center font-mono 
        bg-slate-500 p-3 rounded">IN PROGRESS:</div>
    </div>
    <div class="p-4 m-4 rounded bg-slate-600">
        <div class="text-white text-4xl font-bold text-center font-mono 
        bg-slate-500 p-3 rounded">DONE:</div>
    </div>
</div>