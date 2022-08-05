<script lang="ts">
    import { Category } from '$lib/categories';

    import Column from '$lib/components/column.svelte';
    import { items, type ItemType } from '$lib/stores';

    let todos: ItemType[] = [];
    let progress: ItemType[] = [];
    let done: ItemType[] = [];

    $: {
        todos = $items.filter((item) => item.category === Category.Todo);
        progress = $items.filter((item) => item.category === Category.Progress);
        done = $items.filter((item) => item.category === Category.Done);
    }
</script>

<div class="grid grid-cols-1 h-screen lg:grid-cols-3 gap-3 bg-slate-900">
    <Column colName="TODO" colItems={todos} type={Category.Todo} />
    <Column colName="IN PROGRESS" colItems={progress} type={Category.Progress} />
    <Column colName="DONE" colItems={done} type={Category.Done} />
</div>
