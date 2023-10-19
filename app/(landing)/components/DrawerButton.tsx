import { AlignJustify } from "lucide-react"


const DrawerButton = () => {
    return (
        <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary bg-opacity-0 border-0 drawer-button">
                <AlignJustify className='lg:hidden' />
                </label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 min-h-full bg-primary text-white">
                    <li className='hover:bg-opacity-0'><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerButton
