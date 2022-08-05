<script lang="ts">
    export let text: string;
    export let fun: Function;
</script>

<button
    on:click={() => fun()}
    class="bg-slate-300 text-gray-700 text-2xl px-3 shrink-0 hover:cursor-pointer 
hover:bg-opacity-70 active:bg-slate-400 h-full">{text}</button>
