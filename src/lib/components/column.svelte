<script lang="ts">
    import { Category } from '$lib/categories';
    import type { ItemType } from '$lib/stores';
    import { items } from '$lib/stores';

    import Button from '$lib/components/button.svelte';
    import AddItem from './addItem.svelte';

    export let colName: string;
    export let colItems: ItemType[];
    export let type: Category;
</script>

<div class="p-4 m-4 rounded bg-slate-600 overflow-auto">
    <div
        class="text-gray-700 text-4xl font-bold text-center font-mono 
bg-slate-300 p-3 rounded">
        {colName}
    </div>
    {#each colItems as item}
        <div class="flex h-20 my-5">
            <div
                class="text-white text-base md:text-xl lg:text-2xl xl:text-4xl font-bold text-center font-mono
bg-slate-500 rounded-l w-full h-full p-3 shrink overflow-auto">
                {item.text}
            </div>
            {#if type === Category.Todo}
                <Button text="->" fun={() => items.moveToProgress(item.id)} />
                <Button text="X" fun={() => items.removeItem(item.id)} />
            {:else if type === Category.Progress}
                <Button text="<-" fun={() => items.moveToTodo(item.id)} />
                <Button text="->" fun={() => items.moveToDone(item.id)} />
                <Button text="X" fun={() => items.removeItem(item.id)} />
            {:else}
                <Button text="<-" fun={() => items.moveToProgress(item.id)} />
                <Button text="X" fun={() => items.removeItem(item.id)} />
            {/if}
        </div>
    {/each}
    {#if type === Category.Todo}
        <AddItem />
    {/if}
</div>
