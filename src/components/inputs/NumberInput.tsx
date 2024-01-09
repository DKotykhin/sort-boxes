import React from 'react';

import { Control, Controller, FieldError } from "react-hook-form";

import styles from './input.module.scss';

interface INumberInputInput {
    name: string;
    error?: FieldError;
    control: Control<any>;
    defaultValue?: string;
}

export const NumberInput: React.FC<INumberInputInput> = ({ control, error, defaultValue, name }) => {
    return (
        <div className={styles.input_box}>
            <label htmlFor={name}>Quantity</label>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: 'Field is required!', pattern: {
                        value: /^[0-9]+$/,
                        message: 'Enter a valid integer!',
                    },
                }}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <input
                        {...field}
                        type='number'
                        placeholder='Type quantity...'
                        className={error ? styles.active : ''}
                    />
                )}
            />
            <p className={styles.error}>{error?.message}</p>
        </div>
    );
};

