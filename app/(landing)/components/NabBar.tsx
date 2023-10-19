import Link from "next/link"
import classNames from "classnames"


import { IconComponent } from "@components/index"
import { AlignJustify } from "lucide-react"
import { Tajawal } from "next/font/google"
import { ShareWithUsButton, DrawerButton } from "."



const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})



const Links = () => {
    return (
        <div className={classNames('lg:flex items-center justify-evenly hidden w-full pt-1', tajawal.className)}>
            <Link href='/'>منصاتنا</Link>
            <Link href='/'>تطبيقنا</Link>
            <Link href='/'>عن ادعوني</Link>
        </div>
    )
}



const NabBar = () => {
    return (
        <nav className='flex h-24 items-center justify-between px-8 md:px-16 lg:px-20 xl:px-24 bg-transparent'>
            <ShareWithUsButton isSecondary={true} />
            <Links />
            {/* <DrawerButton/> */}
            <AlignJustify className='lg:hidden cursor-pointer'/>
            <IconComponent />
        </nav>
    )
}

export default NabBar
