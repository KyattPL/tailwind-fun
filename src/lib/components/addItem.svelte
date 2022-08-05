<script lang="ts">
    import { items } from '$lib/stores';

    let isOpen = false;
    let itemText = '';

    const closeAdd = () => {
        isOpen = false;
    };

    const openAdd = () => {
        isOpen = true;
    };

    const changeText = (newVal: EventTarget & HTMLInputElement) => {
        if (newVal !== null) {
            itemText = newVal.value;
        }
    };

    const addTodo = () => {
        items.addTodo(itemText);
        isOpen = false;
        itemText = '';
    };
</script>

{#if isOpen}
    <div class="flex w-full h-20 mt-3">
        <input
            on:change={(val) => changeText(val.currentTarget)}
            type="text"
            class="p-3 font-mono shrink w-full text-4xl focus:outline-4 focus:outline-black" />
        <button
            on:click={() => addTodo()}
            class="bg-slate-300 text-gray-700 text-2xl px-3 basis-1/6 hover:cursor-pointer 
        hover:bg-opacity-70 active:bg-slate-400 h-20">✔</button>
        <button
            class="bg-slate-300 text-gray-700 text-2xl px-3 basis-1/6 hover:cursor-pointer 
        hover:bg-opacity-70 active:bg-slate-400 h-20"
            on:click={() => closeAdd()}>X</button>
    </div>
{:else}
    <div
        class="bg-slate-500 mt-3 text-white text-2xl p-3 rounded
text-center
hover:bg-opacity-90 hover:cursor-pointer"
        on:click={() => openAdd()}>
        ADD
    </div>
{/if}
