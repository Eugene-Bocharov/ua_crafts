import React from 'react';
import styles from './Footer.module.css';

import { ContainerBox } from '../ContainerBox/ContainerBox';
import { ContactProps } from '../../declarations/Interfaces/ComponentProps';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import Logo from './Logo.svg';

const Contact: React.FC<ContactProps> = ({ name, contact }) => {
  return (
    <React.Fragment>
      <li className={styles.flex}>
        <span className={styles['contact-name']}>{name}:</span>
        <a className={styles['contact-link']} href={contact}>
          {contact}
        </a>
      </li>
    </React.Fragment>
  );
};

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.gray}>
        <ContainerBox>
          <div className={styles['flex-container']}>
            <img src={Logo} alt="" />
            <div>
              <h1 className={styles.contacts}>Contacts</h1>
              <ul>
                <Contact
                  name="Advertising E-mail"
                  contact="uacraftsad@gmail.com"
                />
                <Contact
                  name="Cooperation E-mail"
                  contact="uacraftscoop@gmail.com"
                />
                <Contact name="Q&A E-mail" contact="uacraftsqa@gmail.com" />
              </ul>
            </div>
            <div className={styles.lefty}>
              <div>
                <TwitterIcon className={styles.icon} />
                <YouTubeIcon className={styles.icon} />
                <FacebookIcon className={styles.icon} />
                <InstagramIcon className={styles.icon} />
              </div>
              <p className={styles.copyright}>
                © UA crafts 2023, all right reserved.
              </p>
              <a className={styles.policy} href="">
                Privacy policy
              </a>
            </div>
          </div>
        </ContainerBox>
      </div>
    </React.Fragment>
  );
};
