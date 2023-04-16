import React from 'react';
import styles from './InputLabel.module.css';

import { InputProps } from '../../declarations/Interfaces/ComponentProps';

export const InputLabel: React.FC<InputProps> = ({
  name,
  value,
  type,
  small,
  big,
}) => {
  return (
    <React.Fragment>
      <div>
        <p className={styles['input-label']}>{name}</p>
        <input
          className={`${styles.input} ${small ? styles['small-input'] : ''}`}
          placeholder={name}
          defaultValue={value}
          type={type || 'text'}
        />
      </div>
    </React.Fragment>
  );
};
