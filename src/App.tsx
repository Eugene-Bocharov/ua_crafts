import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { WelcomePage } from './pages/WelcomePage/WelcomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { StartPage } from './pages/StartPage/StartPage';

import { ContainerBox } from './components/ContainerBox/ContainerBox';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/start" element={<StartPage />} />
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
