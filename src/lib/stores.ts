import { writable } from "svelte/store";
import { Category } from "./categories";

export interface ItemType {
    id: number,
    text: string,
    category: Category
}

// TODO: jakoś statycznie trzymać maxId i wszystko robić na podtawie id itema
//      moveToProgress ma dobry syntax i to samo wszędzie indziej

function createItems() {
    const { subscribe, set, update } = writable<ItemType[]>([{id: 1, text: 'test', category: Category.Todo}, {id: 2, text: 'okayge', category: Category.Todo}]);
    return {
        subscribe,
        removeItem: (id: number) => update(n => {n.splice(ind, 1); return n}),
        addTodo: (text: string) => update(n => {n.push({id: 0,text: text, category: Category.Todo}); return n}),
        moveToProgress: (id: number) => {
            update(arr => {
                const newArr = [...arr];
                newArr[ind].category = Category.Progress;
                console.log(newArr);
                return newArr;
            })
        },
        moveToTodo: (id: number) => {
            update(n => {n[ind].category = Category.Todo; return n});
        },
        moveToDone: (id: number) => {
            update(n => {n[ind].category = Category.Done; return n});
        }
    };
}

export const items = createItems();