import { Block, Sheet } from 'constants/blocks';

export const calculateSheets = (blocks: Block[], sheet: Sheet) => {
    const sortedBlocks = [...blocks].sort((a, b) => b.width * b.height - a.width * a.height);
    // console.log('sortedBlocks: ', sortedBlocks)

    let usedSheets = 0;

    for (const block of sortedBlocks) {
        let blockQuantity = block.quantity;
        // console.log('outer counter ', usedSheets)

        const blocksFitHorizontally = Math.floor(sheet.width / block.width);
        const blocksFitVertically = Math.floor(sheet.height / block.height);
        const maxBlocks = blocksFitHorizontally * blocksFitVertically;
        // console.log('maxBlocks: ', maxBlocks);

        for (let i = 0; i < usedSheets && blockQuantity > 0; i++) {
            // console.log('inner counter', usedSheets)

            const blocksToPlace = Math.min(maxBlocks, blockQuantity);
            blockQuantity -= blocksToPlace;

            if (blockQuantity > 0) {
                usedSheets++;
            }
        }

        while (blockQuantity > 0) {
            usedSheets++;
            blockQuantity -=
                Math.floor(sheet.width / block.width) * Math.floor(sheet.height / block.height);
        }
    }

    return usedSheets;
};
