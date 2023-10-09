import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';
import { AiFillPieChart, AiTwotoneMedicineBox, AiFillDollarCircle, AiFillMessage } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdShowChart } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import Dropdown from '../Dropdown'; // Import the Dropdown component

const Sidebar = () => {
  const dashboardItems = ['Overview', 'Transaction List'];
  const servicesItems = ['Services 01', 'Services 02'];
  const otherItems = ['Reports', 'Settings'];

  return (
    <aside className={`${styles.sidebar} ${styles.primaryText} bg-gray-color text-black p-4 h-screen rounded-r-2xl flex flex-col justify-start items-center gap-y-8`}>
      <Link href="/">
        <Image src="/images/logo.png" className='mx-auto' alt="Logo" width={120} height={120} />
      </Link>
      <ul className='dropdown-nav w-44 cursor-pointer flex flex-col justify-start items-start border-solid border-b-[#cccccc] border-b-[1px] pb-5'>
        <li className="mb-5">
          <Dropdown title={<div className='flex flex-row justify-between items-center gap-x-2'><AiFillPieChart className="text-xl" /><span>Dashboard</span></div>} items={dashboardItems} />
        </li>
        <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base">
          <Dropdown title={<div className='flex flex-row justify-between items-center gap-x-2'><AiTwotoneMedicineBox className="text-xl" /><span>Services</span></div>} items={servicesItems} />
        </li>
        <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">
          <div className='flex flex-row justify-start items-center gap-x-2'><MdShowChart className="text-xl" /><span>Analytics</span></div>
        </li>
        <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">
          <div className='flex flex-row justify-start items-center gap-x-2'><AiFillDollarCircle className="text-xl" /><span>Earnings</span></div>
        </li>
      </ul>
      <ul className='w-44 cursor-pointer flex flex-col justify-start items-start pb-5'>
          <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">        
            <div className='flex flex-row justify-start items-center gap-x-2'><FaUserCircle className="text-xl" /><span>My Profile</span></div>            
          </li>
          <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">
            <div className='flex flex-row justify-start items-center gap-x-2'><AiFillMessage className="text-xl" /><span>My Message</span></div>            
          </li>
          <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">
            <div className='flex flex-row justify-start items-center gap-x-2'><AiTwotoneMedicineBox className="text-xl" /><span>My Order</span></div>            
          </li>
          <li className="mb-5 flex flex-row justify-between items-center gap-x-3 rounded-md font-medium text-base px-2 py-2">
            <div className='flex flex-row justify-start items-center gap-x-2'><BiLogIn className="text-xl" /><span>Log out</span></div>
          </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
