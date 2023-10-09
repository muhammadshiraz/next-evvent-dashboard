// components/Header.js

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineBell } from 'react-icons/ai';
import { BiMessageRounded } from 'react-icons/bi';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.primaryText} p-4 flex flex-row justify-between items-center px-8 py-5`}>
      {/* <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
      </Link> */}
      <div className="flex flex-row items-center space-x-4 text-sm font-medium">
        <button className={styles.navLink}>Homepage</button>
        <button className={styles.navLink}>Explore</button>
        <button className={styles.navLink}>About Evvent</button>
      </div>
      <div className='flex flex-row justify-between items-center gap-x-4'>
        <button type='button' className='flex flex-row justify-between items-center border-solid border-[1px] border-[#cccccc] rounded-md py-2 px-3 text-sm text-black'><AiOutlinePlus className="text-xl mr-1" />Add Services</button>
        <button type='button'><BiMessageRounded className="text-xl" /></button>        
        <button type='button'><AiOutlineBell className="text-xl" /></button>
        <button type='button'><FaUserCircle className="text-xl" /></button>
      </div>
    </header>
  );
};

export default Header;
