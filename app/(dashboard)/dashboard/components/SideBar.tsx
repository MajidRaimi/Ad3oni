import { IconComponent } from "@/app/components"

import { adminLinks } from "@/app/data"
import { SideBarLinkButton } from "."
import Link from "next/link"


const SideBar = () => {
    return (
        <div className=' col-span-1 min-h-screen bg-primary w-full flex flex-col items-center justify-start py-8 px-2 '>
            <Link href='/'>
                <IconComponent />
            </Link>
            <h1 className='text-white font-semibold text-center text-xs font-mono py-2'>Dashboard</h1>

            {
                adminLinks.map((link) => {
                    return (
                        <SideBarLinkButton
                            key={link.id}
                            id={link.id}
                            icon={link.icon}
                            label={link.label}
                            link={link.link}
                        />
                    )
                })
            }

        </div>
    )
}

export default SideBar
