import React from 'react';

import { sheet } from 'constants/blocks';

export const TitleBlock: React.FC = () => {
    return (
        <div>
            <h1>Blocks places Demo</h1>
            <h4>Sheet size: {sheet.width} x {sheet.height} inches</h4>
        </div>
    );
};
