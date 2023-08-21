import React from 'react';
import styles from './Select.module.css';

const Select = ({ options, value, optionTitle = 'Сортировка', onChange }) => {
  return (
    <select className={styles.select} value={value} onChange={event => onChange(event.target.value)}>
      <option disabled>{optionTitle}</option>
      {
        options.map(o =>
          <option className={styles.option}
                  key={o.value}
                  value={o.value}
          >{o.name}</option>
        )
      }
    </select>
  );
};

export default Select;