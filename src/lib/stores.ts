import { writable } from "svelte/store";
import { Category } from "./categories";

export interface ItemType {
    text: string,
    category: Category
}

function createItems() {
    const { subscribe, set, update } = writable<ItemType[]>([{text: 'test', category: Category.Todo}]);
    return {
        subscribe,
        removeItem: (ind: number) => update(n => {n.splice(ind, 1); return n}),
        addTodo: (text: string) => update(n => {n.push({text: text, category: Category.Todo}); return n}),
        moveToProgress: (ind: number) => {
            //set(n => [...n])
            //update(n => {n[ind].category = Category.Progress; console.log(n) ; return n});
        },
        moveToTodo: (ind: number) => {
            update(n => {n[ind].category = Category.Todo; return n});
        },
        moveToDone: (ind: number) => {
            update(n => {n[ind].category = Category.Done; return n});
        }
    };
}

export const items = createItems();