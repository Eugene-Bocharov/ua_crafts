import React from 'react';

import { Header } from '../../components/Header/Header';
import { PosterSlider } from '../../components/PosterSlider/PosterSlider';
import { Listing } from '../../components/Listing/Listing';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <PosterSlider />
      <Listing />
    </React.Fragment>
  );
};
