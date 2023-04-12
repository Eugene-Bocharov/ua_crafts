import React from 'react';
import styles from './PosterSlider.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import ArrowRight from './ArrowRight.svg';
import ArrowLeft from './ArrowLeft.svg';

export const PosterSlider: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerBox>
        <div className={styles['flex-div']}>
          <div style={{ width: '50%' }} className={styles['flex-div']}>
            <img className={styles.arrow} src={ArrowRight} alt="Arrow" />
            <div>
              <h1 className={styles['head']}>From March 27 to April 10. </h1>
              <h2 className={styles['under-head']}>
                Discounts on all keychains up to -70%.
              </h2>
              <button className={styles['learn-btn']}>Learn more</button>
            </div>
          </div>
          <img className={styles.arrow} src={ArrowLeft} alt="Arrow" />
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
