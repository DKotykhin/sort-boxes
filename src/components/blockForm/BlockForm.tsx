import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import { blocks, sheet } from 'constants/blocks';
import { NumberInput } from '../inputs/NumberInput';
import { calculateSheets } from 'utils/calculateSheets';

import styles from './blockForm.module.scss';

interface IQuantityType {
    quantity_1: number;
    quantity_2: number;
    quantity_3: number;
}

const BlockFormValidation: {
    defaultValues: IQuantityType;
} = {
    defaultValues: {
        quantity_1: blocks[0].quantity,
        quantity_2: blocks[1].quantity,
        quantity_3: blocks[2].quantity,
    },
};

export const BlockForm: React.FC = () => {

    const [usedSheets, setUsedSheets] = React.useState<number>(0);

    useEffect(() => {
        const result = calculateSheets(blocks, sheet);
        setUsedSheets(result);
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IQuantityType>(BlockFormValidation);

    const onSubmit: SubmitHandler<IQuantityType> = async (formData) => {
        // console.log(formData);
        const { quantity_1, quantity_2, quantity_3 } = formData;
        const newBlocks = [
            { ...blocks[0], quantity: quantity_1 },
            { ...blocks[1], quantity: quantity_2 },
            { ...blocks[2], quantity: quantity_3 },
        ];
        const result = calculateSheets(newBlocks, sheet);
        setUsedSheets(result);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.block_wrapper}>
                    <div className={styles.title_wrapper}>
                        <p>Block</p>
                        <p>{blocks[0].width} x {blocks[0].height} inches</p>
                    </div>
                    <div className={styles.block_1} />
                    <NumberInput
                        control={control}
                        name="quantity_1"
                        error={errors.quantity_1}
                    />
                </div>
                <div className={styles.separator} />
                <div className={styles.block_wrapper}>
                    <div className={styles.title_wrapper}>
                        <p>Block</p>
                        <p>{blocks[1].width} x {blocks[1].height} inches</p>
                    </div>
                    <div className={styles.block_2} />
                    <NumberInput
                        control={control}
                        name="quantity_2"
                        error={errors.quantity_2}
                    />
                </div>
                <div className={styles.separator} />
                <div className={styles.block_wrapper}>
                    <div className={styles.title_wrapper}>
                        <p>Block</p>
                        <p>{blocks[2].width} x {blocks[2].height} inches</p>
                    </div>
                    <div className={styles.block_3} />
                    <NumberInput
                        control={control}
                        name="quantity_3"
                        error={errors.quantity_3}
                    />
                </div>
                <div className={styles.separator} />
                <button type="submit">Calculate</button>
            </form>
            <h2>Number of required sheets: {usedSheets}</h2>
        </>
    );
};
