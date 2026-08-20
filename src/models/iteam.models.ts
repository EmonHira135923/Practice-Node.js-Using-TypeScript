export interface Item{
    id:number;
    itemName:string;
    description:string;
    price:number;
    inStock:boolean;
}

export const items:Item[] = [];