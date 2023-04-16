import React from 'react';

import { Header } from '../../components/Header/Header';
import { PosterSlider } from '../../components/PosterSlider/PosterSlider';
import { Listing } from '../../components/Listing/Listing';
import { Footer } from '../../components/Footer/Footer';
import { Alert } from '../../components/Alert/Alert';

export const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <PosterSlider />
      <Listing />
      <Footer />
      <Alert />
    </React.Fragment>
  );
};
