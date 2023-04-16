import React from 'react';
import styles from './BackLink.module.css';

import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import { backLinkProps } from '../../declarations/Interfaces/ComponentProps';

export const BackLink: React.FC<backLinkProps> = ({ to }) => {
  console.log(to);
  return (
    <React.Fragment>
      <div className={styles['back-div']}>
        <Link to={`${to || ''}` || '/'}>
          <IconButton className={styles.back} aria-label="back">
            <WestIcon />
          </IconButton>
        </Link>
      </div>
    </React.Fragment>
  );
};
