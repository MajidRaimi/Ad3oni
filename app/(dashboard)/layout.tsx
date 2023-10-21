import { UserButton } from "@clerk/nextjs"


import { SideBar } from "./dashboard/components"


const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid grid-cols-7 bg-white h-screen'>
            <SideBar />
            <div className='col-span-6 relative'>
                <div className='absolute top-4 right-4'>
                    <UserButton afterSignOutUrl="/" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default layout
