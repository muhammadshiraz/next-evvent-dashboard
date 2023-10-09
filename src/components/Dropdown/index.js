"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import styles from './styles.module.scss';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className={`${styles.dropdownHeader} ${isOpen ? styles.dropdownactive : ''} flex flex-row justify-between items-center gap-x-3 rounded-md py-2 px-2 font-medium text-base`} onClick={toggleDropdown}>
        {title} {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {isOpen && (
        <ul className="dropdown-menu flex flex-col justify-between items-start gap-y-2 ml-3 mt-2 mb-5 text-sm">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
