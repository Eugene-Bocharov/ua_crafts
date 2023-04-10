import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import { ContainerBox } from './components/ContainerBox/ContainerBox';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ContainerBox>
                <MainPage />
              </ContainerBox>
            }
          />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route
            path="/not-found"
            element={
              <ContainerBox>
                <NotFoundPage />
              </ContainerBox>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
