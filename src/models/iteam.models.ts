export interface Item{
    id:number;
    itemName:string;
    description:string;
    price:number;
    inStock:boolean;
}


export let items:Item[] = [];