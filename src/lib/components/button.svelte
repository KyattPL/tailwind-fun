<script lang="ts">
    export let text: string;
    export let fun: Function;
</script>

<button
    on:click={() => fun()}
    class="bg-slate-300 text-gray-700 text-2xl mt-3 px-3 basis-1/6 hover:cursor-pointer 
hover:bg-opacity-70 active:bg-slate-400">{text}</button>
