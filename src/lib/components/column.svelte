<script lang="ts">
    import { Category } from '$lib/categories';
    import type { ItemType } from '$lib/stores';
    import { items } from '$lib/stores';

    import Button from '$lib/components/button.svelte';

    export let colName: string;
    export let colItems: ItemType[];
    export let type: Category;

    const switchAdd = () => {
        console.log('hello :>');
    };
</script>

<div class="p-4 m-4 rounded bg-slate-600 overflow-auto">
    <div
        class="text-gray-700 text-4xl font-bold text-center font-mono 
bg-slate-300 p-3 rounded">
        {colName}
    </div>
    {#each colItems as item, index}
        <div class="flex h-30">
            <div
                class="text-white text-4xl font-bold text-center font-mono
bg-slate-500 p-3 mt-3 w-full h-full rounded-l shrink">
                {item.text}
            </div>
            {#if type === Category.Todo}
                <Button text="->" fun={() => items.moveToProgress(index)} />
                <Button text="X" fun={() => items.removeItem(index)} />
            {:else if type === Category.Progress}
                <Button text="<-" fun={() => items.moveToTodo(index)} />
                <Button text="->" fun={() => items.moveToDone(index)} />
                <Button text="X" fun={() => items.removeItem(index)} />
            {:else}
                <Button text="<-" fun={() => items.moveToProgress(index)} />
                <Button text="X" fun={() => items.removeItem(index)} />
            {/if}
        </div>
    {/each}
    {#if type === Category.Todo}
        <div
            class="bg-slate-500 mt-3 text-white text-2xl p-3 rounded
    text-center
    hover:bg-opacity-90 hover:cursor-pointer"
            on:click={switchAdd}>
            ADD
        </div>
    {/if}
</div>
