import { Home, Hand  } from "lucide-react";
import { SideBarLinkProps } from "../types";



const adminLinks : SideBarLinkProps[] =[
    {
        id: 1,
        label: "Home",
        link: "/dashboard",
        icon: '🏠'
    },
    {
        id: 2,
        label: "Prayers",
        link: "/dashboard/prayers",
        icon: '🙏'
    },
]


export default adminLinks;