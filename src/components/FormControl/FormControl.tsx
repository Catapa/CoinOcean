import React, { HTMLInputTypeAttribute } from 'react';
import styles from './FormControl.module.css';

type TFormControlProps = {
    type: HTMLInputTypeAttribute | undefined,
    value: string | number | readonly string[] | undefined,
    label: String,
    label_side: 'before' | 'after'
};

const FormControl = ({type, value, label, label_side} : TFormControlProps) => {
    return (
        <label className={styles.form_control}>
            <span>{label_side==='before' && label}</span>
            <input type={type} value={value}/>
            <span>{label_side==='after' && label}</span>
        </label>
    );
}
export default FormControl;