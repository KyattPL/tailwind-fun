import { writable } from "svelte/store";
import { Category } from "./categories";

export interface ItemType {
    id: number,
    text: string,
    category: Category
}

let currId = 3;
const startItems: ItemType[] = [];

function createItems() {
    const { subscribe, set, update } = writable<ItemType[]>(startItems);
    return {
        subscribe,
        removeItem: (id: number) => update(arr => {
            const newArr = [...arr];
            newArr.splice(newArr.findIndex(item => item.id === id), 1);
            return newArr;
        }),
        addTodo: (text: string) => update(arr => {
            const newArr = [...arr, { id: currId, text: text, category: Category.Todo }];
            currId += 1;
            return newArr;
        }),
        moveToProgress: (id: number) => {
            update(arr => {
                const newArr = [...arr];
                newArr[newArr.findIndex(item => item.id === id)].category = Category.Progress;
                console.log(newArr);
                return newArr;
            });
        },
        moveToTodo: (id: number) => {
            update(arr => {
                const newArr = [...arr];
                newArr[newArr.findIndex(item => item.id === id)].category = Category.Todo;
                console.log(newArr);
                return newArr;
            });
        },
        moveToDone: (id: number) => {
            update(arr => {
                const newArr = [...arr];
                newArr[newArr.findIndex(item => item.id === id)].category = Category.Done;
                console.log(newArr);
                return newArr;
            });
        },
        setItems: (loadedItems: ItemType[]) => set(loadedItems)
    };
}

export const items = createItems();