import React from 'react';
import styles from './Catalog.module.css';

import Grid2 from '@mui/material/Unstable_Grid2';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        <p className={styles.label}>{label}</p>
        <div className={styles.flex}>
          <p className={styles.price + (discount ? ' ' + styles.canceled : '')}>
            {price}
          </p>
          {discount ? <p className={styles.price}>{discount}</p> : ''}
        </div>
      </div>
    </React.Fragment>
  );
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1220,
      lg: 1900,
      xl: 2500,
    },
  },
});

export const Catalog: React.FC = () => {
  return (
    <React.Fragment>
      <div id="catalog" className={styles.main}>
        <ThemeProvider theme={theme}>
          <Grid2
            display="flex"
            justifyContent="flex-end"
            container
            spacing={4}
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          >
            <Grid2>
              <ProductCard
                img={img1}
                label="“Ukraine” bracelet"
                price="130 UAH"
              />
            </Grid2>
            <Grid2>
              <ProductCard
                img={img2}
                label="Hoodie with Ukrainian patterns"
                price="700 UAH"
              />
            </Grid2>
            <Grid2>
              <ProductCard
                img={img3}
                label="Ukrainian bracelet with sunflower"
                price="200 UAH"
              />
            </Grid2>
            <Grid2>
              <ProductCard
                img={img4}
                label="Blue and yellow bracelet"
                price="180 UAH"
              />
            </Grid2>
            <Grid2>
              <ProductCard
                img={img5}
                label="Ukrainian leather keychain"
                price="80 UAH"
                discount="40 UAN"
              />
            </Grid2>
            <Grid2>
              <ProductCard
                img={img6}
                label="Country-shaped keychain"
                price="70 UAH"
                discount="30 UAN"
              />
            </Grid2>
          </Grid2>
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
};
