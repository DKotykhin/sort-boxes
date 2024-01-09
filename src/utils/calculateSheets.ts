import { Block, Sheet } from 'constants/blocks';

export const calculateSheets = (blocks: Block[], sheet: Sheet) => {
    let usedSheets = 0;
    let sheetHeight = sheet.height;

    for (const block of blocks) {
        let blockQuantity = block.quantity;
        // console.log('outer counter ', usedSheets);

        const blocksFitHorizontally = Math.floor(sheet.width / block.width);
        const blocksFitVertically = Math.floor(sheetHeight / block.height);
        let maxBlocks = blocksFitHorizontally * blocksFitVertically;
        sheetHeight = sheet.height;

        for (let i = 0; i < usedSheets && blockQuantity > 0; i++) {
            // console.log('inner counter', usedSheets);

            const blocksToPlace = Math.min(maxBlocks, blockQuantity);
            blockQuantity -= blocksToPlace;

            const blocksFitVertically = Math.floor(sheet.height / block.height);
            maxBlocks = blocksFitHorizontally * blocksFitVertically;

            if (blockQuantity > 0) usedSheets++;
        }

        while (blockQuantity > 0) {
            usedSheets++;
            blockQuantity -= maxBlocks;
            if (blockQuantity === 0) usedSheets++;
            if (blockQuantity <= 0) {
                sheetHeight =
                    block.height * Math.floor(Math.abs(blockQuantity) / blocksFitHorizontally);
            }
        }
    }

    return usedSheets;
};
