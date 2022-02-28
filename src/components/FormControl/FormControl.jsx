import React from 'react';
import styles from './FormControl.module.css';
const FormControl = ({type, value, label, label_side}) => {
    return (
        <label className={styles.form_control}>
            <span>{label_side==='before' && label}</span>
            <input type={type} value={value}/>
            <span>{label_side==='after' && label}</span>
        </label>
    );
}
export default FormControl;