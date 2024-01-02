
'use client'
import { useState, FC } from 'react';
import '../styles.css'; // Import your CSS stylesheet here
import Link from 'next/link';
import classNames from 'classnames'
import { Tajawal } from 'next/font/google';
import { ShareWithUsMenuButton } from '.';


const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})



interface MyNavbarProps {
    links: { label: string; link: string }[];
    beforeColor?: string;
    afterColor?: string;
    backgroundColor: string,
    position: {
        top: number;
        left: number;
        right: number;
        bottom: number;
    },
    spaceBetween: number
}

const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='md:hidden'>
            <div className="hamburger absolute right-5 top-5 " onClick={toggleNav}>
                <div className={classNames(`line duration-300 bg-[#fff]`, { "rotate-45 translate-y-1 bg-[#000] ": isOpen },)}></div>
                <div className={classNames("line bg-[#fff] duration-200", { "hidden": isOpen })}></div>
                <div className={classNames("line duration-300 bg-[#fff]", { "-rotate-45 -translate-y-1 bg-[#000]": isOpen })}></div>
            </div>
            <ul className={classNames(`nav-links  bg-white text-primary ${tajawal.className}`, { "open": isOpen })}>
                <li onClick={toggleNav} className={classNames("px-4 mb-4 text-primary ", { "fade": isOpen })}><Link href="/">عن ادعوني</Link></li>
                <li onClick={toggleNav} className={classNames("px-4 mb-4 ", { "fade": isOpen })}><Link href="/">تطبيقنا</Link></li>
                <li onClick={toggleNav} className={classNames("px-4 mb-4 ", { "fade": isOpen })}><Link href="/">منصاتنا</Link></li>
                <li  className={classNames("px-4 mb-4 ", { "fade": isOpen })}>
                    <ShareWithUsMenuButton toggle={toggleNav}/>
                </li>

            </ul>
        </div>

    );
};

export default MyNavbar;
