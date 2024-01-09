import React from 'react';
import { format } from 'date-fns';

import Github from 'images/github.svg';
import LinkedIn from 'images/linkedin.svg';
import Web from 'images/web.svg';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <p className='text-white text-sm'>
                    &copy;{format(new Date(), 'yyyy')} &nbsp; Dmytro Kotykhin
                </p>
                <div className={styles.icon_wrapper}>
                    <a href='https://dmytro-kotykhin.space' target='_blank' rel='noopener noreferrer'>
                        <img src={Web} width={26} height={26} alt='logo' />
                    </a>
                    <a href='https://www.linkedin.com/in/dmytro-kotykhin-4683151b' target='_blank' rel='noopener noreferrer'>
                        <img src={LinkedIn} width={22} height={22} alt='logo' />
                    </a>
                    <a href='https://github.com/DKotykhin' target='_blank' rel='noopener noreferrer'>
                        <img src={Github} width={22} height={22} alt='logo' />
                    </a>
                </div>
            </div>

        </footer>
    );
};
