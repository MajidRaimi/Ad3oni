import { Tajawal } from "next/font/google"
import classNames from "classnames"

const tajawal = Tajawal({
    weight: ['400'],
    subsets: ['arabic']
})

const ShareButton = () => {
    return (
        <button className={classNames('border border-white bg-opacity-0 w-32 duration-300 rounded-lg h-10 text-[#FFF] hidden lg:block mb-0 hover:bg-opacity-100 hover:bg-white hover:text-primary p-0 pt-1 px', tajawal.className)}>
            شاركنا
        </button>
    )
}

export default ShareButton
