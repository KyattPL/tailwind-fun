<script lang="ts">
    import '../app.css';
    import { items } from '$lib/stores';
    import { browser } from '$app/env';

    $: {
        if (browser) {
            localStorage.clear();
        }

        for (const item of $items) {
            localStorage.setItem(`${item.id}-text`, item.text);
            localStorage.setItem(`${item.id}-cat`, item.category.toString());
        }
    }

    function retrieveFromStorage() {
        const howManyItems = localStorage.length;
        let retrievedItems: any = {};
        const loadedItems = [];

        for (let i = 0; i < howManyItems; i++) {
            const retrievedKey = localStorage.key(i);
            const retrievedVal = localStorage.getItem(retrievedKey!);
            const [id, param] = retrievedKey!.split('-');

            if (!Object.hasOwn(retrievedItems, id)) {
                retrievedItems[id] = {};
            }

            if (param === 'text') {
                retrievedItems[id].text = retrievedVal;
            } else {
                retrievedItems[id].cat = retrievedVal;
            }
        }

        for (const key of Object.keys(retrievedItems)) {
            loadedItems.push({
                id: Number.parseInt(key),
                text: retrievedItems[key]['text'],
                category: Number.parseInt(retrievedItems[key]['cat'])
            });
        }

        console.log(loadedItems);

        return loadedItems;
    }

    if (browser) {
        const loaded = retrieveFromStorage();

        if (loaded.length !== 0) {
            items.setItems(loaded);
        }
    }
</script>

<slot />
