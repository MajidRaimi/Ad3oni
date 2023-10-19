import { Tajawal } from 'next/font/google';

import classNames from "classnames"

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const ShareWithUsButton = ({ isSecondary }: { isSecondary: boolean }) => {
    return (
        <button className={classNames({'border border-white bg-opacity-0 text-[#FFF] hidden lg:block mb-0 hover:bg-opacity-100 hover:bg-white hover:text-primary p-0' : isSecondary},'bg-white w-36 h-12 text-primary rounded-lg mb-16 font-serif mx-auto pt-1 duration-300 border border-transparent hover:text-white hover:bg-transparent hover:border-white', tajawal.className, )}>
            {
                isSecondary ? 'شارك' : 'شاركنا دعاءك'
            }
        </button>
    )
}

export default ShareWithUsButton
