<script lang="ts">
    import { Category } from '$lib/categories';

    import Column from '$lib/components/column.svelte';
    import { items } from '$lib/stores';

    let todos = $items.filter((item) => item.category === Category.Todo);
    let progress = $items.filter((item) => item.category === Category.Progress);
    let done = $items.filter((item) => item.category === Category.Done);

    $: console.log(todos);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-900 md:h-screen">
    <Column colName="TODO" colItems={todos} type={Category.Todo} />
    <Column colName="IN PROGRESS" colItems={progress} type={Category.Progress} />
    <Column colName="DONE" colItems={done} type={Category.Done} />
</div>
