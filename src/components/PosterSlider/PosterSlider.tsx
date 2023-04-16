import React from 'react';
import styles from './PosterSlider.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import ArrowRight from './ArrowRight.svg';
import ArrowLeft from './ArrowLeft.svg';
import Carousel from 'react-bootstrap/Carousel';
import poster from './Poster_1.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const PosterSlider: React.FC = () => {
  return (
    <React.Fragment>
      <ContainerBox>
        <Carousel
          prevIcon={
            <img
              className={styles.arrow + ' ' + styles.right}
              src={ArrowRight}
            />
          }
          nextIcon={
            <img className={styles.arrow + ' ' + styles.left} src={ArrowLeft} />
          }
          variant={'dark'}
          controls
          indicators={false}
        >
          <Carousel.Item>
            <img className={styles.img} src={poster} alt={poster} />
            <Carousel.Caption>
              <div className={styles['ads-div']}>
                <div className={styles.left}>
                  <h1 className={styles['head']}>
                    From March 27 to April 10.{' '}
                  </h1>
                  <h2 className={styles['under-head']}>
                    Discounts on all keychains up to -70%.
                  </h2>
                  <button className={styles['learn-btn']}>Learn more</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.img} src={poster} alt={poster} />
            <Carousel.Caption>
              <div className={styles['ads-div']}>
                <div className={styles.left}>
                  <h1 className={styles['head']}>
                    From March 27 to April 10.{' '}
                  </h1>
                  <h2 className={styles['under-head']}>
                    Discounts on all keychains up to -70%.
                  </h2>
                  <button className={styles['learn-btn']}>Learn more</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className={styles.img} src={poster} alt={poster} />
            <Carousel.Caption>
              <div className={styles['ads-div']}>
                <div className={styles.left}>
                  <h1 className={styles['head']}>
                    From March 27 to April 10.{' '}
                  </h1>
                  <h2 className={styles['under-head']}>
                    Discounts on all keychains up to -70%.
                  </h2>
                  <button className={styles['learn-btn']}>Learn more</button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </ContainerBox>
    </React.Fragment>
  );
};
