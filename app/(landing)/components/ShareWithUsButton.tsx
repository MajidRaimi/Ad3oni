import { Tajawal } from 'next/font/google';

import classNames from "classnames"

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const ShareWithUsButton = () => {
    return (
        <div className='flex items-start h-24 justify-center mx-24 lg:justify-end'>
            <button className={classNames('bg-white w-36 h-12 text-primary rounded-lg  font-serif pt-1 duration-300 border border-transparent hover:text-white hover:bg-transparent hover:border-white', tajawal.className,)}>
                شاركنا دعاءك
            </button>
        </div>
    )
}

export default ShareWithUsButton
