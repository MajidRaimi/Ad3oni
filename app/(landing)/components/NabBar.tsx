'use client'

import Link from "next/link"
import classNames from "classnames"
import { toast } from "sonner"

import { IconComponent } from "@components/index"
import { AlignJustify } from "lucide-react"
import { Tajawal } from "next/font/google"
import { ShareWithUsButton, DrawerButton, ShareButton, MyNavbar } from "."

import '../styles.css'


const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})



const Links = () => {
    return (
        <div className={classNames('lg:flex items-center justify-evenly hidden w-full pt-1', tajawal.className)}>
            <Link href='/' onClick={() => toast.success(
                'شكرا للمشاركة',
                {

                    duration: 2000,
                    className: 'text-center',
                    style: {

                    }
                }
            )}>منصاتنا</Link>
            <Link href='/'>تطبيقنا</Link>
            <Link href='/'>عن ادعوني</Link>
        </div>
    )
}



const NabBar = () => {
    return (
        <nav className='flex h-24 items-center justify-between px-8 md:px-16 lg:px-20 xl:px-24 bg-transparent'>
            <ShareButton />
            <Links />
            <div></div>
            <IconComponent />
        </nav>
    )
}

export default NabBar
