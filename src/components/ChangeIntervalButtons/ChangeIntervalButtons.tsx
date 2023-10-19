import React, {useState} from 'react';
import styles from './ChangeIntervalButtons.module.css';

type TProps = {
    onChangeInterval: Function
};

const ChangeIntervalButtons = ({onChangeInterval}: TProps) => {
    const intervalChangeOptions: string[] = ['24h', '7d', '30d', '60d', '200d','1y'];
    let [activeInterval, setActiveInterval] = useState(intervalChangeOptions[0]);

    const toggleActiveInterval = (index: number) => {
        let selectedInterval = intervalChangeOptions[index];
        setActiveInterval(selectedInterval);
        return onChangeInterval(selectedInterval);
    }

    const getStyles = (interval: string) => {
        let classes = [styles.change_interval_button];
        classes.push(interval===activeInterval ? styles.active: '');
        return classes.join(' ');
    }

    return (
        <div className={styles.change_interval_buttons_container}>
            <span className={styles.buttons_label}>Change: </span>
            {
                intervalChangeOptions.map((interval, index) =>
                    <button
                        key={interval}
                        value={interval}
                        className={getStyles(interval)}
                        onClick={() => toggleActiveInterval(index)}>{interval}</button>
                )
            }
        </div>
    )
}
export default ChangeIntervalButtons