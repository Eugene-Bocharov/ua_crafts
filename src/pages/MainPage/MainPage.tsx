import React from 'react';

import { Header } from '../../components/Header/Header';
import { PosterSlider } from '../../components/PosterSlider/PosterSlider';
import { Listing } from '../../components/Listing/Listing';
import { Footer } from '../../components/Footer/Footer';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <PosterSlider />
      <Listing />
      <Footer />
    </React.Fragment>
  );
};
