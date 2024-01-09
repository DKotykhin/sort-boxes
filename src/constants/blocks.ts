export interface Block {
    width: number;
    height: number;
    quantity: number;
}

export interface Sheet {
    width: number;
    height: number;
}

export const blocks: Block[] = [
    { width: 5, height: 7, quantity: 50 },
    { width: 3, height: 4.5, quantity: 70 },
    { width: 9, height: 2, quantity: 50 },
];

export const sheet: Sheet = { width: 20, height: 40 };
