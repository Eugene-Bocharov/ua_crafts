import React, { useEffect } from 'react';
import './StartPage.css';

import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { AboutUs } from '../../components/AboutUs/AboutUs';

export const StartPage: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${
      process.env.PUBLIC_URL + 'background.png'
    })`;
    document.body.style.backgroundRepeat = 'non-repeat';
    document.body.style.backgroundSize = 'cover';
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundRepeat = '';
    };
  });
  return (
    <React.Fragment>
      <Header />
      <ContainerBox>
        <div style={{ marginTop: '150px' }}>
          <AboutUs />
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
