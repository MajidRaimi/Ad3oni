import { UserButton } from "@clerk/nextjs"


import { SideBar } from "./dashboard/components"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid grid-cols-7 bg-white'>
            <SideBar/>
            <div className='col-span-6'>
                <div className='flex items-center w-full justify-end p-8'>
                    <UserButton afterSignOutUrl="/" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout
