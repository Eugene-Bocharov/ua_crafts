import React from 'react';
import styles from './ProfilePage.module.css';

import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { ContainerBox } from '../../components/ContainerBox/ContainerBox';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { BasketTable } from '../../components/BasketTable/BasketTable';
import { BackLink } from '../../components/BackLink/BackLink';

export const ProfilePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header loggedIn />
      <ContainerBox>
        <div className={styles.main}>
          <BackLink />
          <div className={styles['center-container']}>
            <div>
              <ProfileForm />
              <BasketTable />
            </div>
          </div>
        </div>
      </ContainerBox>
    </React.Fragment>
  );
};
