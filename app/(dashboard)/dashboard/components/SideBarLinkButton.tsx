'use client';


import classNames from 'classnames'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation';

const inter = Inter({
    display: 'swap',
    subsets: ['latin-ext'],
})

import { SideBarLinkProps } from '@/app/types'
import Link from 'next/link'

const SideBarLinkButton : React.FC<SideBarLinkProps> = ({
    label, link, icon,
}) => {

    const pathname = usePathname();
    return (
        <Link className={classNames('flex items-center w-full text-white justify-start py-1 border border-white my-1 rounded-lg px-2 hover:text-primary hover:border-transparent hover:bg-white duration-300', inter.className, {
            'bg-white text-primary' : pathname === link
        })} href={link}>
            <span className='text-sm'>
            {icon}
            </span>
            <h1 className={classNames('ml-2 ', {'text-primary': pathname === link})}>{label}</h1>
        </Link>
    )
}

export default SideBarLinkButton
