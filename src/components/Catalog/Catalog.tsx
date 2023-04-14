import React from 'react';
import styles from './Catalog.module.css';

import Grid2 from '@mui/material/Unstable_Grid2';
import { productCardProps } from '../../declarations/Interfaces/ComponentProps';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';

const ProductCard: React.FC<productCardProps> = ({
  img,
  label,
  price,
  discount,
}) => {
  return (
    <React.Fragment>
      <div className={styles['card-box']}>
        <img className={styles['card-img']} src={img} alt="" />
        <p>{label}</p>
        <div>
          <p>{price}</p>
          {discount ? <p>{discount}</p> : ''}
        </div>
      </div>
    </React.Fragment>
  );
};

export const Catalog: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <Grid2 container spacing={4} columns={{ xs: 3 }}>
          <Grid2>
            <ProductCard
              img={img1}
              label="“Ukraine” bracelet"
              price="130 UAH"
            />
          </Grid2>
          <Grid2>
            <ProductCard
              img={img1}
              label="“Ukraine” bracelet"
              price="130 UAH"
            />
          </Grid2>
          <Grid2>
            <ProductCard
              img={img1}
              label="“Ukraine” bracelet"
              price="130 UAH"
            />
          </Grid2>
        </Grid2>
      </div>
    </React.Fragment>
  );
};
